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
var import_server5 = require("unicore-api/server");

// server-src/demo.channel.ts
var import_common = require("@nestjs/common");
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
var _DemoChannel = class _DemoChannel {
  constructor() {
    __publicField(this, "request", "demo");
  }
  async publish(target, post) {
    (0, import_server.core)().logger("demo").log(`\u041A\u0430\u043D\u0430\u043B demo \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043F\u043E\u0441\u0442 \xAB${post.title}\xBB \u0434\u043B\u044F ${target.url || "\u0431\u0435\u0437 \u0430\u0434\u0440\u0435\u0441\u0430"}`);
    return {
      messageId: `demo-${Date.now()}`
    };
  }
};
__name(_DemoChannel, "DemoChannel");
var DemoChannel = _DemoChannel;
DemoChannel = _ts_decorate([
  (0, import_common.Injectable)()
], DemoChannel);

// server-src/demo.module.ts
var import_common6 = require("@nestjs/common");
var import_typeorm6 = require("@nestjs/typeorm");

// server-src/demo.controller.ts
var import_common3 = require("@nestjs/common");
var import_server2 = require("unicore-api/server");

// server-src/demo.service.ts
var import_common2 = require("@nestjs/common");
var import_typeorm2 = require("@nestjs/typeorm");
var import_typeorm3 = require("typeorm");
var import_unicore_api = require("unicore-api");

// server-src/entities/note.entity.ts
var import_typeorm = require("typeorm");
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
function _ts_metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata, "_ts_metadata");
var _DemoNote = class _DemoNote {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "uuid");
    __publicField(this, "text");
    __publicField(this, "created");
  }
};
__name(_DemoNote, "DemoNote");
var DemoNote = _DemoNote;
_ts_decorate2([
  (0, import_typeorm.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata("design:type", Number)
], DemoNote.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm.Column)({
    name: "uuid",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], DemoNote.prototype, "uuid", void 0);
_ts_decorate2([
  (0, import_typeorm.Column)("text", {
    name: "text"
  }),
  _ts_metadata("design:type", String)
], DemoNote.prototype, "text", void 0);
_ts_decorate2([
  (0, import_typeorm.CreateDateColumn)({
    name: "created"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], DemoNote.prototype, "created", void 0);
DemoNote = _ts_decorate2([
  (0, import_typeorm.Entity)({
    name: "mod_demo_notes"
  })
], DemoNote);

// server-src/demo.service.ts
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
function _ts_metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata2, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var _DemoService = class _DemoService {
  constructor(notes) {
    __publicField(this, "notes");
    this.notes = notes;
  }
  async list() {
    const greeting = await (0, import_unicore_api.core)().config.get("public_mod_demo_greeting") || "\u041F\u0440\u0438\u0432\u0435\u0442";
    const limit = await (0, import_unicore_api.core)().config.getNumber("mod_demo_limit", 10);
    return {
      greeting,
      notes: await this.notes.find({
        order: {
          id: "DESC"
        },
        take: limit
      })
    };
  }
  create(uuid, text) {
    return this.notes.save(this.notes.create({
      uuid: uuid || null,
      text
    }));
  }
};
__name(_DemoService, "DemoService");
var DemoService = _DemoService;
DemoService = _ts_decorate3([
  (0, import_common2.Injectable)(),
  _ts_param(0, (0, import_typeorm2.InjectRepository)(DemoNote)),
  _ts_metadata2("design:type", Function),
  _ts_metadata2("design:paramtypes", [
    typeof import_typeorm3.Repository === "undefined" ? Object : import_typeorm3.Repository
  ])
], DemoService);

// server-src/demo.controller.ts
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
function _ts_metadata3(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata3, "_ts_metadata");
function _ts_param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param2, "_ts_param");
var _DemoController = class _DemoController {
  constructor(service) {
    __publicField(this, "service");
    this.service = service;
  }
  list() {
    return this.service.list();
  }
  create(user, body) {
    return this.service.create(user?.uuid || null, String(body?.text || "").slice(0, 500));
  }
};
__name(_DemoController, "DemoController");
var DemoController = _DemoController;
_ts_decorate4([
  (0, import_server2.Public)(),
  (0, import_common3.Get)("notes"),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", []),
  _ts_metadata3("design:returntype", void 0)
], DemoController.prototype, "list", null);
_ts_decorate4([
  (0, import_server2.Permissions)([
    "mod.demo.write"
  ]),
  (0, import_common3.Post)("notes"),
  _ts_param2(0, (0, import_server2.CurrentUser)()),
  _ts_param2(1, (0, import_common3.Body)()),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", [
    Object,
    Object
  ]),
  _ts_metadata3("design:returntype", void 0)
], DemoController.prototype, "create", null);
DemoController = _ts_decorate4([
  (0, import_common3.Controller)("mod/demo"),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", [
    typeof DemoService === "undefined" ? Object : DemoService
  ])
], DemoController);

// server-src/demo.tasks.ts
var import_common4 = require("@nestjs/common");
var import_typeorm4 = require("@nestjs/typeorm");
var import_typeorm5 = require("typeorm");
var import_server3 = require("unicore-api/server");
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
function _ts_metadata4(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata4, "_ts_metadata");
function _ts_param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param3, "_ts_param");
var _DemoTasks = class _DemoTasks {
  constructor(notes) {
    __publicField(this, "notes");
    this.notes = notes;
  }
  async cleanup() {
    const border = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    await this.notes.createQueryBuilder().delete().where("created < :border", {
      border
    }).execute();
  }
};
__name(_DemoTasks, "DemoTasks");
var DemoTasks = _DemoTasks;
_ts_decorate5([
  (0, import_server3.SafeCron)("0 3 * * *", "\u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u0441\u0442\u0430\u0440\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0434\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044F"),
  _ts_metadata4("design:type", Function),
  _ts_metadata4("design:paramtypes", []),
  _ts_metadata4("design:returntype", Promise)
], DemoTasks.prototype, "cleanup", null);
DemoTasks = _ts_decorate5([
  (0, import_common4.Injectable)(),
  _ts_param3(0, (0, import_typeorm4.InjectRepository)(DemoNote)),
  _ts_metadata4("design:type", Function),
  _ts_metadata4("design:paramtypes", [
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository
  ])
], DemoTasks);

// server-src/demo.upload.controller.ts
var import_common5 = require("@nestjs/common");
var import_platform_express = require("@nestjs/platform-express");
var import_server4 = require("unicore-api/server");
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
function _ts_metadata5(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata5, "_ts_metadata");
function _ts_param4(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param4, "_ts_param");
var _DemoUploadController = class _DemoUploadController {
  async upload(file) {
    const name = await (0, import_server4.core)().storage.save(file.originalname, file.buffer);
    return {
      url: (0, import_server4.core)().storage.url(name)
    };
  }
};
__name(_DemoUploadController, "DemoUploadController");
var DemoUploadController = _DemoUploadController;
_ts_decorate6([
  (0, import_server4.Permissions)([
    "mod.demo.write"
  ]),
  (0, import_common5.Post)("screenshot"),
  (0, import_common5.UseInterceptors)((0, import_platform_express.FileInterceptor)("file")),
  _ts_param4(0, (0, import_common5.UploadedFile)()),
  _ts_metadata5("design:type", Function),
  _ts_metadata5("design:paramtypes", [
    Object
  ]),
  _ts_metadata5("design:returntype", Promise)
], DemoUploadController.prototype, "upload", null);
DemoUploadController = _ts_decorate6([
  (0, import_common5.Controller)("mod/demo")
], DemoUploadController);

// server-src/demo.module.ts
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
var _DemoModule = class _DemoModule {
};
__name(_DemoModule, "DemoModule");
var DemoModule = _DemoModule;
DemoModule = _ts_decorate7([
  (0, import_common6.Module)({
    imports: [
      import_typeorm6.TypeOrmModule.forFeature([
        DemoNote
      ])
    ],
    controllers: [
      DemoController,
      DemoUploadController
    ],
    providers: [
      DemoService,
      DemoTasks,
      DemoChannel
    ],
    exports: [
      DemoChannel
    ]
  })
], DemoModule);

// locales/ru.json
var ru_default = {
  "mod.demo.cabinet_tab": "\u0414\u0435\u043C\u043E-\u0432\u043A\u043B\u0430\u0434\u043A\u0430",
  "mod.demo.cabinet_tab_text": "\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0434\u0443\u043B\u0435\u043C",
  "mod.demo.config_greeting": "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",
  "mod.demo.config_greeting_hint": "\u0422\u0435\u043A\u0441\u0442 \u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u0438\u0433\u0440\u043E\u043A\u043E\u043C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043C\u043E\u0434\u0443\u043B\u044F.",
  "mod.demo.config_limit": "\u041B\u0438\u043C\u0438\u0442 \u0437\u0430\u043C\u0435\u0442\u043E\u043A",
  "mod.demo.config_limit_hint": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C: \u043E\u0442 1 \u0434\u043E 100.",
  "mod.demo.footer_note": "\u0421\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u0443\u0442\u0435\u0440\u0435 \u043E\u0442 \u0434\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044F",
  "mod.demo.news_note": "\u0414\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044C \u0432\u0441\u0442\u0440\u043E\u0438\u043B\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u0441\u0442\u044C \xAB{title}\xBB",
  "mod.demo.news_note_title": "\u0411\u043B\u043E\u043A \u043F\u043E\u0434 \u043D\u043E\u0432\u043E\u0441\u0442\u044C\u044E",
  "mod.demo.notes": "\u0417\u0430\u043C\u0435\u0442\u043A\u0438",
  "mod.demo.server_widget": "\u0412\u0438\u0434\u0436\u0435\u0442 \u043C\u043E\u0434\u0443\u043B\u044F \u0432\u0441\u0442\u0440\u043E\u0435\u043D \u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u043B\u043E\u0442",
  "mod.demo.title": "\u0414\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044C",
  "mod.demo.user_notes": "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u0434\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044F",
  "mod.demo.user_notes_text": "\u0411\u043B\u043E\u043A \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u0438\u0433\u0440\u043E\u043A\u0430 {username}",
  "perm.group.mod.demo": "\u0414\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044C",
  "perm.mod.demo.read": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "perm.mod.demo.read.hint": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0443 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0434\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044F.",
  "perm.mod.demo.write": "\u041F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "perm.mod.demo.write.hint": "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043E\u043A."
};

// locales/en.json
var en_default = {
  "mod.demo.cabinet_tab": "Demo tab",
  "mod.demo.cabinet_tab_text": "A cabinet tab added by the module",
  "mod.demo.config_greeting": "Greeting",
  "mod.demo.config_greeting_hint": "The text greets the player on the module page.",
  "mod.demo.config_limit": "Notes limit",
  "mod.demo.config_limit_hint": "How many recent notes to show: from 1 to 100.",
  "mod.demo.footer_note": "A footer line from the demo module",
  "mod.demo.news_note": 'The demo module embedded itself into "{title}"',
  "mod.demo.news_note_title": "Block under the news",
  "mod.demo.notes": "Notes",
  "mod.demo.server_widget": "Module widget injected into the server page via a slot",
  "mod.demo.title": "Demo module",
  "mod.demo.user_notes": "Demo module notes",
  "mod.demo.user_notes_text": "A block in the profile of {username}",
  "perm.group.mod.demo": "Demo module",
  "perm.mod.demo.read": "View notes",
  "perm.mod.demo.read.hint": "Access to the demo module notes.",
  "perm.mod.demo.write": "Edit notes",
  "perm.mod.demo.write.hint": "Creating and editing notes."
};

// server-src/index.ts
var index_default = (0, import_server5.defineModule)({
  id: "demo",
  entities: [
    DemoNote
  ],
  nestModules: [
    DemoModule
  ],
  webhookChannels: [
    new DemoChannel()
  ],
  permissions: [
    "mod.demo.read",
    "mod.demo.write"
  ],
  config: [
    {
      key: "greeting",
      type: "string",
      default: "\u041F\u0440\u0438\u0432\u0435\u0442",
      public: true,
      label: "mod.demo.config_greeting"
    },
    {
      key: "limit",
      type: "number",
      default: 10,
      min: 1,
      max: 100,
      label: "mod.demo.config_limit"
    }
  ],
  locales: {
    ru: ru_default,
    en: en_default
  },
  setup(context) {
    context.logger.log("\u0414\u0435\u043C\u043E-\u043C\u043E\u0434\u0443\u043B\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D");
    const note = /* @__PURE__ */ __name(async (uuid, text) => {
      await context.core().db.getRepository(DemoNote).save({
        uuid,
        text
      });
    }, "note");
    context.events.on("payment.paid", async (payload) => {
      await note(payload.uuid, `\u041E\u043F\u043B\u0430\u0442\u0430 ${payload.amount} \u0447\u0435\u0440\u0435\u0437 ${payload.method}`);
    }, context.id);
    context.events.on("gift.activated", async (payload) => {
      await note(payload.uuid, `\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 ${payload.promocode}`);
    }, context.id);
    context.events.on("user.registered", async (payload) => {
      await note(payload.uuid, `\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ${payload.username}`);
    }, context.id);
    context.events.on("purchase.completed", async (payload) => {
      await note(payload.uuid, `\u041F\u043E\u043A\u0443\u043F\u043A\u0430 ${payload.kind} #${payload.itemId} \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ${payload.serverId}`);
    }, context.id);
    context.events.on("user.login", async (payload) => {
      await note(payload.uuid, `\u0412\u0445\u043E\u0434 ${payload.username} \u0441 ${payload.ip || "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430"}`);
    }, context.id);
    context.events.on("user.password.changed", async (payload) => {
      await note(payload.uuid, `\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F ${payload.username}`);
    }, context.id);
    context.events.on("core.ready", async () => {
      const core4 = context.core();
      const [online, methods] = await Promise.all([
        core4.servers.online(),
        core4.payments.methods()
      ]);
      context.logger.log(`\u0421\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u043E\u043D\u043B\u0430\u0439\u043D: ${online.filter((server) => server.online).length} \u0438\u0437 ${online.length}, \u043A\u0430\u043D\u0430\u043B\u044B \u0432\u0435\u0431\u0445\u0443\u043A\u043E\u0432: ${core4.webhooks.channels().join(", ")}, \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B: ${methods.length ? methods.join(", ") : "\u043D\u0435\u0442"}`);
    }, context.id);
  }
});
//# sourceMappingURL=index.js.map