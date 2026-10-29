import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(resolve(here, '../../../UnicoreCMS/workspaces/server/package.json'));
const ts = require('typescript');
const members = [
  { uuid: 'senior', username: 'Senior', priority: 10, serverId: null },
  { uuid: 'junior', username: 'Junior', priority: 1, serverId: 'dev' },
];
let links = [{ userUuid: 'senior', categoryId: 0, sortIndex: 10 }, { userUuid: 'junior', categoryId: 0, sortIndex: 0 }];
const source = readFileSync(resolve(here, '../server-src/team.service.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, experimentalDecorators: true } }).outputText;
const exports = {};
runInNewContext(compiled, { exports, Map, Set, require(name) {
  if (name === 'unicore-api') return { core: () => ({ staff: { members: async () => members }, servers: { all: async () => [{ id: 'dev', name: 'Dev' }] } }) };
  if (name.startsWith('./entities/')) return { TeamNote: class {}, TeamCategory: class {}, TeamMemberCategory: class {}, GLOBAL_CATEGORY_ID: 0 };
  return require(name);
} });
const team = new exports.TeamService({ find: async () => [] }, { find: async () => [] }, { find: async () => links });
it('applies explicit global order in server and category display modes', async () => {
  const server = await team.sections('All');
  const categories = await team.categorySections('Other', 'All');
  assert.deepEqual(Array.from(server.find((section) => section.id === 'global').members, (member) => member.uuid), ['junior', 'senior']);
  assert.deepEqual(Array.from(categories.find((section) => section.id === 'global').members, (member) => member.uuid), ['junior', 'senior']);
  assert.equal(server.find((section) => section.id === 'dev').members[0].uuid, 'junior');
});
it('keeps automatic priority order when indices are unset', async () => {
  links = links.map((link) => ({ ...link, sortIndex: null }));
  const server = await team.sections('All');
  assert.deepEqual(Array.from(server.find((section) => section.id === 'global').members, (member) => member.uuid), ['senior', 'junior']);
});
