import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { REACTIONS } from '../shared/constants.ts'

const here = dirname(fileURLToPath(import.meta.url))
const target = resolve(here, '..', 'client', 'assets', 'emoji')
const source = resolve(here, '..', '..', 'node_modules', '@iconify-json', 'fluent-emoji-flat', 'icons.json')

const set = JSON.parse(readFileSync(source, 'utf8'))

mkdirSync(target, { recursive: true })

for (const reaction of REACTIONS) {
  const icon = set.icons[reaction.icon]

  if (!icon) throw new Error(`нет иконки ${reaction.icon}`)

  const width = icon.width || set.width || 32
  const height = icon.height || set.height || 32
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${icon.body}</svg>`

  writeFileSync(resolve(target, `${reaction.id}.svg`), svg)
}

console.log(`сохранено иконок: ${REACTIONS.length}`)
