var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// server-src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_server4 = require("unicore-api/server");

// server-src/entities/note.entity.ts
var import_typeorm = require("typeorm");
var import_server = require("unicore-api/server");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata, "_ts_metadata");
var _TeamNote = class _TeamNote {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "text");
  }
};
__name(_TeamNote, "TeamNote");
var TeamNote = _TeamNote;
_ts_decorate([
  (0, import_typeorm.PrimaryColumn)({
    name: "id"
  }),
  _ts_metadata("design:type", String)
], TeamNote.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)("text", {
    name: "text",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], TeamNote.prototype, "text", void 0);
TeamNote = _ts_decorate([
  (0, import_server.Translatable)("mod.team.note", [
    "text"
  ], {
    read: [
      "mod.team.read"
    ],
    write: [
      "mod.team.write"
    ]
  }),
  (0, import_typeorm.Entity)({
    name: "mod_team_notes"
  })
], TeamNote);

// server-src/entities/category.entity.ts
var import_typeorm2 = require("typeorm");
var import_server2 = require("unicore-api/server");
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata2, "_ts_metadata");
var _TeamCategory = class _TeamCategory {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "position");
  }
};
__name(_TeamCategory, "TeamCategory");
var TeamCategory = _TeamCategory;
_ts_decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata2("design:type", Number)
], TeamCategory.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "name",
    length: 120
  }),
  _ts_metadata2("design:type", String)
], TeamCategory.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "position",
    default: 0
  }),
  _ts_metadata2("design:type", Number)
], TeamCategory.prototype, "position", void 0);
TeamCategory = _ts_decorate2([
  (0, import_server2.Translatable)("mod.team.category", [
    "name"
  ], {
    read: [
      "mod.team.read"
    ],
    write: [
      "mod.team.write"
    ]
  }),
  (0, import_typeorm2.Entity)({
    name: "mod_team_categories"
  })
], TeamCategory);

// server-src/entities/member-category.entity.ts
var import_typeorm3 = require("typeorm");
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata3, "_ts_metadata");
var GLOBAL_CATEGORY_ID = 0;
var _TeamMemberCategory = class _TeamMemberCategory {
  constructor() {
    __publicField(this, "userUuid");
    __publicField(this, "categoryId");
    __publicField(this, "sortIndex");
  }
};
__name(_TeamMemberCategory, "TeamMemberCategory");
var TeamMemberCategory = _TeamMemberCategory;
_ts_decorate3([
  (0, import_typeorm3.PrimaryColumn)({
    name: "user_uuid"
  }),
  _ts_metadata3("design:type", String)
], TeamMemberCategory.prototype, "userUuid", void 0);
_ts_decorate3([
  (0, import_typeorm3.PrimaryColumn)({
    name: "category_id"
  }),
  _ts_metadata3("design:type", Number)
], TeamMemberCategory.prototype, "categoryId", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "sort_index",
    nullable: true
  }),
  _ts_metadata3("design:type", Number)
], TeamMemberCategory.prototype, "sortIndex", void 0);
TeamMemberCategory = _ts_decorate3([
  (0, import_typeorm3.Entity)({
    name: "mod_team_member_categories"
  })
], TeamMemberCategory);

// server-src/team.module.ts
var import_common3 = require("@nestjs/common");
var import_typeorm6 = require("@nestjs/typeorm");

// server-src/team.controller.ts
var import_common2 = require("@nestjs/common");
var import_unicore_api2 = require("unicore-api");
var import_server3 = require("unicore-api/server");

// server-src/dto/category.input.ts
var import_class_transformer = require("class-transformer");
var import_class_validator = require("class-validator");
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata4, "_ts_metadata");
var _CategoryInput = class _CategoryInput {
  constructor() {
    __publicField(this, "name");
    __publicField(this, "position");
  }
};
__name(_CategoryInput, "CategoryInput");
var CategoryInput = _CategoryInput;
_ts_decorate4([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MinLength)(1),
  (0, import_class_validator.MaxLength)(120),
  _ts_metadata4("design:type", String)
], CategoryInput.prototype, "name", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(0),
  _ts_metadata4("design:type", Number)
], CategoryInput.prototype, "position", void 0);
var _MemberCategoryInput = class _MemberCategoryInput {
  constructor() {
    __publicField(this, "categoryId");
    __publicField(this, "sortIndex");
  }
};
__name(_MemberCategoryInput, "MemberCategoryInput");
var MemberCategoryInput = _MemberCategoryInput;
_ts_decorate4([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(0),
  _ts_metadata4("design:type", Number)
], MemberCategoryInput.prototype, "categoryId", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(0),
  _ts_metadata4("design:type", Number)
], MemberCategoryInput.prototype, "sortIndex", void 0);
var _MemberCategoriesInput = class _MemberCategoriesInput {
  constructor() {
    __publicField(this, "categories");
    __publicField(this, "global");
    __publicField(this, "globalIndex");
  }
};
__name(_MemberCategoriesInput, "MemberCategoriesInput");
var MemberCategoriesInput = _MemberCategoriesInput;
_ts_decorate4([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.ValidateNested)({
    each: true
  }),
  (0, import_class_transformer.Type)(() => MemberCategoryInput),
  _ts_metadata4("design:type", Array)
], MemberCategoriesInput.prototype, "categories", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsBoolean)(),
  _ts_metadata4("design:type", Boolean)
], MemberCategoriesInput.prototype, "global", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(0),
  _ts_metadata4("design:type", Number)
], MemberCategoriesInput.prototype, "globalIndex", void 0);

// server-src/dto/note.input.ts
var import_class_validator2 = require("class-validator");
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata5, "_ts_metadata");
var NOTE_MAX = 400;
var _TeamNoteInput = class _TeamNoteInput {
  constructor() {
    __publicField(this, "text");
  }
};
__name(_TeamNoteInput, "TeamNoteInput");
var TeamNoteInput = _TeamNoteInput;
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(NOTE_MAX),
  _ts_metadata5("design:type", String)
], TeamNoteInput.prototype, "text", void 0);

// server-src/team.service.ts
var import_common = require("@nestjs/common");
var import_typeorm4 = require("@nestjs/typeorm");
var import_typeorm5 = require("typeorm");
var import_unicore_api = require("unicore-api");
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata6, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var GLOBAL = "global";
var _TeamService = class _TeamService {
  constructor(notes, categories, memberCategories) {
    __publicField(this, "notes");
    __publicField(this, "categories");
    __publicField(this, "memberCategories");
    this.notes = notes;
    this.categories = categories;
    this.memberCategories = memberCategories;
  }
  listCategories() {
    return this.categories.find({
      order: {
        position: "ASC",
        id: "ASC"
      }
    });
  }
  async saveCategory(id, input) {
    const category = id ? await this.categories.findOneBy({
      id
    }) : this.categories.create();
    if (id && !category) throw new Error("category_not_found");
    category.name = input.name;
    category.position = input.position ?? (id ? category.position : await this.categories.count() + 1);
    return this.categories.save(category);
  }
  async removeCategory(id) {
    await this.memberCategories.delete({
      categoryId: id
    });
    await this.categories.delete({
      id
    });
  }
  async memberSettings(uuid) {
    const rows = await this.memberCategories.find({
      where: {
        userUuid: uuid
      }
    });
    const global = rows.find((row) => row.categoryId === GLOBAL_CATEGORY_ID);
    return {
      global: Boolean(global),
      globalIndex: global?.sortIndex ?? null,
      categories: rows.filter((row) => row.categoryId !== GLOBAL_CATEGORY_ID).map((row) => ({
        categoryId: row.categoryId,
        sortIndex: row.sortIndex ?? null
      }))
    };
  }
  async setMemberCategories(uuid, input) {
    const unique = /* @__PURE__ */ new Map();
    if (input.global) unique.set(GLOBAL_CATEGORY_ID, input.globalIndex ?? null);
    for (const item of input.categories || []) if (item.categoryId !== GLOBAL_CATEGORY_ID) unique.set(item.categoryId, item.sortIndex ?? null);
    await this.memberCategories.delete({
      userUuid: uuid
    });
    if (!unique.size) return;
    await this.memberCategories.insert([
      ...unique.entries()
    ].map(([categoryId, sortIndex]) => ({
      userUuid: uuid,
      categoryId,
      sortIndex
    })));
  }
  async categorySections(restTitle, globalTitle) {
    const [categories, members] = await Promise.all([
      this.listCategories(),
      (0, import_unicore_api.core)().staff.members()
    ]);
    if (!members.length) return [];
    const links = await this.memberCategories.find();
    if (!categories.length && !links.some((link) => link.categoryId === GLOBAL_CATEGORY_ID)) return [];
    const byUuid = new Map(members.map((member) => [
      member.uuid,
      member
    ]));
    const notes = await this.noteMap();
    const sections = /* @__PURE__ */ new Map();
    const placed = /* @__PURE__ */ new Set();
    sections.set(GLOBAL_CATEGORY_ID, {
      section: {
        id: "global",
        title: globalTitle,
        icon: null,
        members: []
      },
      entries: []
    });
    for (const category of categories) {
      sections.set(category.id, {
        section: {
          id: `category-${category.id}`,
          title: category.name,
          icon: null,
          members: []
        },
        entries: []
      });
    }
    for (const link of links) {
      const member = byUuid.get(link.userUuid);
      const bucket = sections.get(link.categoryId);
      if (!member || !bucket) continue;
      placed.add(member.uuid);
      bucket.entries.push({
        member,
        index: link.sortIndex ?? null
      });
    }
    const result = [];
    for (const [id, bucket] of sections) {
      if (id === GLOBAL_CATEGORY_ID && !bucket.entries.length) continue;
      bucket.section.members = this.orderEntries(bucket.entries).map((entry) => this.card(entry.member, notes));
      result.push(bucket.section);
    }
    const rest = members.filter((member) => !placed.has(member.uuid));
    const unique = new Map(rest.map((member) => [
      member.uuid,
      member
    ]));
    if (unique.size) result.push({
      id: "uncategorized",
      title: restTitle,
      icon: null,
      members: this.orderEntries([
        ...unique.values()
      ].map((member) => ({
        member,
        index: null
      }))).map((entry) => this.card(entry.member, notes))
    });
    return result;
  }
  orderEntries(entries) {
    const unique = /* @__PURE__ */ new Map();
    for (const entry of entries) if (!unique.has(entry.member.uuid)) unique.set(entry.member.uuid, entry);
    return [
      ...unique.values()
    ].sort((left, right) => {
      if (left.index !== right.index) {
        if (left.index === null) return 1;
        if (right.index === null) return -1;
        return left.index - right.index;
      }
      return right.member.priority - left.member.priority || left.member.username.localeCompare(right.member.username);
    });
  }
  async sections(globalTitle) {
    const members = await (0, import_unicore_api.core)().staff.members();
    if (!members.length) return [];
    const [notes, servers, pinned] = await Promise.all([
      this.noteMap(),
      this.serverMap(members),
      this.globalMembers()
    ]);
    const sections = /* @__PURE__ */ new Map();
    const place = /* @__PURE__ */ __name((key, title, icon, member) => {
      if (!sections.has(key)) sections.set(key, {
        id: key,
        title,
        icon,
        members: []
      });
      const section = sections.get(key);
      if (section.members.some((card) => card.uuid === member.uuid)) return;
      section.members.push(this.card(member, notes));
    }, "place");
    for (const member of this.sorted(members)) {
      const server = member.serverId ? servers.get(member.serverId) : null;
      if (member.serverId && !server) continue;
      if (server) place(server.id, server.name, server.icon || null, member);
      if (!server || pinned.has(member.uuid)) place(GLOBAL, globalTitle, null, member);
    }
    const order = [
      ...servers.keys()
    ];
    const rank = /* @__PURE__ */ __name((section) => section.id === GLOBAL ? -1 : order.indexOf(section.id), "rank");
    return [
      ...sections.values()
    ].sort((left, right) => rank(left) - rank(right));
  }
  async list() {
    const members = await (0, import_unicore_api.core)().staff.members();
    const notes = await this.noteMap();
    const seen = /* @__PURE__ */ new Set();
    const cards = [];
    for (const member of this.sorted(members)) {
      if (seen.has(member.uuid)) continue;
      seen.add(member.uuid);
      cards.push(this.card(member, notes));
    }
    return cards;
  }
  async saveNote(uuid, input) {
    const text = (input.text || "").trim();
    if (!text) {
      await this.notes.delete({
        id: uuid
      });
      return null;
    }
    return this.notes.save(this.notes.create({
      id: uuid,
      text
    }));
  }
  card(member, notes) {
    return {
      uuid: member.uuid,
      username: member.username,
      label: member.label,
      color: member.color || null,
      role: member.role || null,
      note: notes.get(member.uuid) || null,
      skin: member.skin ? {
        file: member.skin.file
      } : null
    };
  }
  sorted(members) {
    return members.slice().sort((left, right) => right.priority - left.priority || left.username.localeCompare(right.username));
  }
  async globalMembers() {
    const rows = await this.memberCategories.find({
      where: {
        categoryId: GLOBAL_CATEGORY_ID
      }
    });
    return new Set(rows.map((row) => row.userUuid));
  }
  async noteMap() {
    const rows = await this.notes.find();
    return new Map(rows.map((row) => [
      row.id,
      row
    ]));
  }
  async serverMap(members) {
    if (!members.some((member) => member.serverId)) return /* @__PURE__ */ new Map();
    const servers = await (0, import_unicore_api.core)().servers.all();
    return new Map(servers.map((server) => [
      server.id,
      server
    ]));
  }
};
__name(_TeamService, "TeamService");
var TeamService = _TeamService;
TeamService = _ts_decorate6([
  (0, import_common.Injectable)(),
  _ts_param(0, (0, import_typeorm4.InjectRepository)(TeamNote)),
  _ts_param(1, (0, import_typeorm4.InjectRepository)(TeamCategory)),
  _ts_param(2, (0, import_typeorm4.InjectRepository)(TeamMemberCategory)),
  _ts_metadata6("design:type", Function),
  _ts_metadata6("design:paramtypes", [
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository,
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository,
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository
  ])
], TeamService);

// server-src/team.controller.ts
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata7(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata7, "_ts_metadata");
function _ts_param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param2, "_ts_param");
var _TeamController = class _TeamController {
  constructor(service) {
    __publicField(this, "service");
    this.service = service;
  }
  async sections() {
    const title = await (0, import_unicore_api2.core)().config.get("public_mod_team_global") || "\u041D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445";
    return this.service.sections(title);
  }
  members() {
    return this.service.list();
  }
  saveNote(uuid, body) {
    return this.service.saveNote(uuid, body);
  }
  async categorySections() {
    const [rest, global] = await Promise.all([
      (0, import_unicore_api2.core)().config.get("public_mod_team_rest"),
      (0, import_unicore_api2.core)().config.get("public_mod_team_global")
    ]);
    return this.service.categorySections(rest || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", global || "\u041D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445");
  }
  listCategories() {
    return this.service.listCategories();
  }
  createCategory(body) {
    return this.service.saveCategory(null, body);
  }
  updateCategory(id, body) {
    return this.service.saveCategory(id, body);
  }
  removeCategory(id) {
    return this.service.removeCategory(id);
  }
  memberCategories(uuid) {
    return this.service.memberSettings(uuid);
  }
  setMemberCategories(uuid, body) {
    return this.service.setMemberCategories(uuid, body);
  }
};
__name(_TeamController, "TeamController");
var TeamController = _TeamController;
_ts_decorate7([
  (0, import_server3.Public)(),
  (0, import_common2.Get)(),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", Promise)
], TeamController.prototype, "sections", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.read"
  ]),
  (0, import_common2.Get)("members"),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "members", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.write"
  ]),
  (0, import_common2.Patch)("members/:uuid"),
  _ts_param2(0, (0, import_common2.Param)("uuid")),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    String,
    typeof TeamNoteInput === "undefined" ? Object : TeamNoteInput
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "saveNote", null);
_ts_decorate7([
  (0, import_server3.Public)(),
  (0, import_common2.Get)("categories-sections"),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", Promise)
], TeamController.prototype, "categorySections", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.read"
  ]),
  (0, import_common2.Get)("categories"),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "listCategories", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.write"
  ]),
  (0, import_common2.Post)("categories"),
  _ts_param2(0, (0, import_common2.Body)()),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    typeof CategoryInput === "undefined" ? Object : CategoryInput
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "createCategory", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.write"
  ]),
  (0, import_common2.Patch)("categories/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    Number,
    typeof CategoryInput === "undefined" ? Object : CategoryInput
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "updateCategory", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.write"
  ]),
  (0, import_common2.Delete)("categories/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    Number
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "removeCategory", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.read"
  ]),
  (0, import_common2.Get)("members/:uuid/categories"),
  _ts_param2(0, (0, import_common2.Param)("uuid")),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    String
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "memberCategories", null);
_ts_decorate7([
  (0, import_server3.Permissions)([
    "mod.team.write"
  ]),
  (0, import_common2.Put)("members/:uuid/categories"),
  _ts_param2(0, (0, import_common2.Param)("uuid")),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    String,
    typeof MemberCategoriesInput === "undefined" ? Object : MemberCategoriesInput
  ]),
  _ts_metadata7("design:returntype", void 0)
], TeamController.prototype, "setMemberCategories", null);
TeamController = _ts_decorate7([
  (0, import_common2.Controller)("mod/team"),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    typeof TeamService === "undefined" ? Object : TeamService
  ])
], TeamController);

// server-src/team.module.ts
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
var _TeamModule = class _TeamModule {
};
__name(_TeamModule, "TeamModule");
var TeamModule = _TeamModule;
TeamModule = _ts_decorate8([
  (0, import_common3.Module)({
    imports: [
      import_typeorm6.TypeOrmModule.forFeature([
        TeamNote,
        TeamCategory,
        TeamMemberCategory
      ])
    ],
    controllers: [
      TeamController
    ],
    providers: [
      TeamService
    ]
  })
], TeamModule);

// locales/ru.json
var ru_default = {
  "mod.team.categories": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
  "mod.team.categories_display_hint": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0432\u0438\u0434\u043D\u044B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0432 \u0440\u0435\u0436\u0438\u043C\u0430\u0445 \xAB\u041F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C\xBB \u0438 \xAB\u0412\u0441\u0451 \u0432\u043C\u0435\u0441\u0442\u0435\xBB. \u0420\u0435\u0436\u0438\u043C \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043C\u043E\u0434\u0443\u043B\u044F.",
  "mod.team.categories_empty": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u043D\u0435\u0442: \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C.",
  "mod.team.categories_hint": "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u044B: \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \xAB\u041C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044F\xBB \u0438\u043B\u0438 \xAB\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430\xBB. \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445.",
  "mod.team.category_add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
  "mod.team.category_name": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
  "mod.team.category_position": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A",
  "mod.team.config_display": "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
  "mod.team.config_display_hint": "\u041A\u0430\u043A \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u0412 \u0440\u0435\u0436\u0438\u043C\u0435 \xAB\u041F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C\xBB \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0430 \u043F\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F; \u043F\u043E\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u043D\u0435\u0442, \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C.",
  "mod.team.config_global": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u0449\u0435\u0433\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
  "mod.team.config_global_hint": "\u0422\u0430\u043A \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0434\u0435\u043B \u0441 \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0445 \u0440\u043E\u043B\u0435\u0439 \u0441\u0430\u0439\u0442\u0430 \u2014 \u043E\u043D\u0438 \u043D\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u044B \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443.",
  "mod.team.config_rest": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0431\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
  "mod.team.config_rest_hint": "\u0422\u0430\u043A \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0434\u0435\u043B \u0441 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043D\u0438 \u043E\u0434\u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F. \u0412\u0438\u0434\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u0435\u0436\u0438\u043C\u0430\u0445 \u0441 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C\u0438.",
  "mod.team.config_subtitle": "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
  "mod.team.config_subtitle_hint": "\u0421\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C. \u041F\u0443\u0441\u0442\u043E \u2014 \u0441\u0442\u0440\u043E\u043A\u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442.",
  "mod.team.config_title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  "mod.team.config_title_hint": "\u041A\u0440\u0443\u043F\u043D\u0430\u044F \u043D\u0430\u0434\u043F\u0438\u0441\u044C \u0441\u0432\u0435\u0440\u0445\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \xAB\u041A\u043E\u043C\u0430\u043D\u0434\u0430\xBB.",
  "mod.team.empty": "\u0412 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435\u0442",
  "mod.team.empty_hint": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0440\u043E\u043B\u044C \u0438\u043B\u0438 \u043F\u0440\u0438\u0432\u0438\u043B\u0435\u0433\u0438\u044E \u043A\u0430\u043A \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u0443\u044E, \u0438 \u0435\u0451 \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.",
  "mod.team.member_categories": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430",
  "mod.team.member_global": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB\u041D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445\xBB",
  "mod.team.member_global_hint": "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u043F\u043E\u043F\u0430\u0434\u0451\u0442 \u0432 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u043A \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F.",
  "mod.team.member_index": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u0445",
  "mod.team.member_index_auto": "\u0410\u0432\u0442\u043E",
  "mod.team.member_index_hint": "\u041C\u0435\u043D\u044C\u0448\u0435 \u2014 \u0432\u044B\u0448\u0435. \u041F\u0443\u0441\u0442\u043E \u2014 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u0432\u0441\u0442\u0430\u0451\u0442 \u043F\u043E\u0441\u043B\u0435 \u0442\u0435\u0445, \u0443 \u043A\u043E\u0433\u043E \u0438\u043D\u0434\u0435\u043A\u0441 \u0437\u0430\u0434\u0430\u043D, \u043F\u043E \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0443 \u0440\u043E\u043B\u0438. \u041E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u044B \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0443 \u043D\u0435 \u043B\u043E\u043C\u0430\u044E\u0442.",
  "mod.team.member_label": "\u0420\u043E\u043B\u044C",
  "mod.team.member_note": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  "mod.team.member_note_hint": "\u0421\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0434 \u0440\u043E\u043B\u044C\u044E: \u0447\u0435\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F. \u041F\u0443\u0441\u0442\u043E \u2014 \u0441\u0442\u0440\u043E\u043A\u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442.",
  "mod.team.member_username": "\u0418\u0433\u0440\u043E\u043A",
  "mod.team.note_saved": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E",
  "mod.team.page_title": "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
  "mod.team.source_hint": "\u0421\u043E\u0441\u0442\u0430\u0432 \u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0438\u0437 \u0440\u043E\u043B\u0435\u0439 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043F\u0440\u0438\u0432\u0438\u043B\u0435\u0433\u0438\u0439, \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u043A \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435. \u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0435.",
  "mod.team.title": "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
  "mod.team.translations": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B",
  "perm.group.mod.team": "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
  "perm.mod.team.read": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443",
  "perm.mod.team.read.hint": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430.",
  "perm.mod.team.write": "\u041F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443",
  "perm.mod.team.write.hint": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439 \u0438 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432."
};

// locales/en.json
var en_default = {
  "mod.team.categories": "Categories",
  "mod.team.categories_display_hint": "Categories appear on the team page in the \xABBy categories\xBB and \xABEverything\xBB modes. The mode is chosen in the module settings.",
  "mod.team.categories_empty": "No categories: members are grouped by servers.",
  "mod.team.categories_hint": "Custom team sections like \u201CModeration\u201D or \u201CDevelopment\u201D. A member can join several.",
  "mod.team.category_add": "Add category",
  "mod.team.category_name": "Name",
  "mod.team.category_position": "Order",
  "mod.team.config_display": "Team display",
  "mod.team.config_display_hint": "How members are grouped on the team page. \xABBy categories\xBB hides the per-server split; while no category exists members are still grouped by server.",
  "mod.team.config_global": "Shared section heading",
  "mod.team.config_global_hint": "The title of the section with holders of staff site roles \u2014 those are not bound to a server.",
  "mod.team.config_rest": "Title of the uncategorized section",
  "mod.team.config_rest_hint": "The section holding members without a category. Visible only in the category modes.",
  "mod.team.config_subtitle": "Subheading",
  "mod.team.config_subtitle_hint": "The line under the heading. Empty means no line.",
  "mod.team.config_title": "Page heading",
  "mod.team.config_title_hint": "The large heading at the top of the team page.",
  "mod.team.empty": "The team is empty",
  "mod.team.empty_hint": "Mark a role or a privilege as staff and its holders show up here.",
  "mod.team.member_categories": "Member categories",
  "mod.team.member_global": "Show in the \xABEverywhere\xBB section",
  "mod.team.member_global_hint": "The member also lands in the standard section even when bound to a server. Extra categories still apply.",
  "mod.team.member_index": "Order inside sections",
  "mod.team.member_index_auto": "Auto",
  "mod.team.member_index_hint": "Lower goes higher. Empty \u2014 the member follows those with an index, ordered by role priority. Equal indexes do not break the order.",
  "mod.team.member_label": "Role",
  "mod.team.member_note": "Note",
  "mod.team.member_note_hint": "The line under the role: what the person does. Empty means no line.",
  "mod.team.member_username": "Player",
  "mod.team.note_saved": "Note saved",
  "mod.team.page_title": "Project team",
  "mod.team.source_hint": "The team is taken from site roles and privileges marked as staff. Here you can only add a note about a person.",
  "mod.team.title": "Team",
  "mod.team.translations": "Translations",
  "perm.group.mod.team": "Project team",
  "perm.mod.team.read": "View team",
  "perm.mod.team.read.hint": "Access to the project team settings.",
  "perm.mod.team.write": "Edit team",
  "perm.mod.team.write.hint": "Editing member labels and notes."
};

// server-src/index.ts
var index_default = (0, import_server4.defineModule)({
  id: "team",
  entities: [
    TeamNote,
    TeamCategory,
    TeamMemberCategory
  ],
  nestModules: [
    TeamModule
  ],
  permissions: [
    "mod.team.read",
    "mod.team.write"
  ],
  config: [
    {
      key: "title",
      type: "string",
      default: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
      public: true,
      label: "mod.team.config_title",
      hint: "mod.team.config_title_hint"
    },
    {
      key: "subtitle",
      type: "string",
      default: "\u041B\u044E\u0434\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u043B\u0430\u044E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442",
      public: true,
      label: "mod.team.config_subtitle",
      hint: "mod.team.config_subtitle_hint"
    },
    {
      key: "global",
      type: "string",
      default: "\u041D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445",
      public: true,
      label: "mod.team.config_global",
      hint: "mod.team.config_global_hint"
    },
    {
      key: "rest",
      type: "string",
      default: "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
      public: true,
      label: "mod.team.config_rest",
      hint: "mod.team.config_rest_hint"
    },
    {
      key: "display",
      type: "select",
      default: "categories",
      public: true,
      label: "mod.team.config_display",
      hint: "mod.team.config_display_hint",
      options: [
        {
          label: "\u041F\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C",
          value: "servers"
        },
        {
          label: "\u041F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C",
          value: "categories"
        },
        {
          label: "\u0412\u0441\u0451 \u0432\u043C\u0435\u0441\u0442\u0435",
          value: "all"
        }
      ]
    }
  ],
  locales: {
    ru: ru_default,
    en: en_default
  }
});
//# sourceMappingURL=index.js.map