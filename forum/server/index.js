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
var import_server8 = require("unicore-api/server");

// shared/constants.ts
var NODE_SLUG_MAX_LENGTH = 64;
var NODE_TITLE_MAX_LENGTH = 120;
var NODE_DESCRIPTION_MAX_LENGTH = 500;
var NODE_ICON_MAX_LENGTH = 64;
var NODE_DEPTH_MAX = 6;
var TOPIC_TITLE_MIN_LENGTH = 3;
var TOPIC_TITLE_MAX_LENGTH = 160;
var POST_CONTENT_MIN_LENGTH = 2;
var POST_CONTENT_MAX_LENGTH = 6e4;
var TOPICS_PER_PAGE = 20;
var POSTS_PER_PAGE = 15;
var LATEST_TOPICS_LIMIT = 5;
var LEADERS_LIMIT = 5;
var SEARCH_MIN_LENGTH = 3;
var SEARCH_LIMIT = 25;
var UPLOAD_MAX_MEGABYTES = 4;
var UPLOADS_PER_HOUR = 30;
var PERMISSION_READ = "mod.forum.read";
var PERMISSION_WRITE = "mod.forum.write";
var PERMISSION_MODERATE = "mod.forum.moderate";
var PERMISSION_EDIT_POSTS = "mod.forum.edit_posts";
var PERMISSION_MANAGE = "mod.forum.manage";
var PERMISSION_LOGS = "mod.forum.logs";
var CATEGORY = "forum";
var AUDIT_CLASS = "mod.forum";
var AUDIT_POST_EDIT = "post.edit";
var AUDIT_POST_DELETE = "post.delete";
var AUDIT_TOPIC_CLOSE = "topic.close";
var AUDIT_TOPIC_DELETE = "topic.delete";
var auditAction = /* @__PURE__ */ __name((action) => `mod.forum.${action}`, "auditAction");
var SETTING_PLAYER_CLOSE = "player_close";
var SANITIZE_DENY_ATTRIBUTES = [
  "style",
  "id"
];
var REACTIONS = [
  {
    id: "like",
    icon: "thumbs-up"
  },
  {
    id: "heart",
    icon: "red-heart"
  },
  {
    id: "laugh",
    icon: "face-with-tears-of-joy"
  },
  {
    id: "wow",
    icon: "astonished-face"
  },
  {
    id: "sad",
    icon: "crying-face"
  },
  {
    id: "fire",
    icon: "fire"
  },
  {
    id: "party",
    icon: "party-popper"
  },
  {
    id: "dislike",
    icon: "thumbs-down"
  }
];
var REACTION_IDS = REACTIONS.map((reaction) => reaction.id);
var REACTION_ID_MAX_LENGTH = 16;

// server-src/entities/node.entity.ts
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
var _ForumNode = class _ForumNode {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "parent_id");
    __publicField(this, "parent");
    __publicField(this, "children");
    __publicField(this, "slug");
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "icon");
    __publicField(this, "position");
    __publicField(this, "locked");
    __publicField(this, "hidden");
    __publicField(this, "read_permission");
    __publicField(this, "write_permission");
    __publicField(this, "moderator_roles");
    __publicField(this, "topics_count");
    __publicField(this, "posts_count");
    __publicField(this, "last_topic_id");
    __publicField(this, "last_post_at");
    __publicField(this, "last_post_uuid");
    __publicField(this, "created_at");
    __publicField(this, "updated_at");
  }
};
__name(_ForumNode, "ForumNode");
var ForumNode = _ForumNode;
_ts_decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Index)(),
  (0, import_typeorm.Column)({
    name: "parent_id",
    nullable: true
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "parent_id", void 0);
_ts_decorate([
  (0, import_typeorm.ManyToOne)(() => ForumNode, (node) => node.children, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  }),
  (0, import_typeorm.JoinColumn)({
    name: "parent_id"
  }),
  _ts_metadata("design:type", Object)
], ForumNode.prototype, "parent", void 0);
_ts_decorate([
  (0, import_typeorm.OneToMany)(() => ForumNode, (node) => node.parent),
  _ts_metadata("design:type", Array)
], ForumNode.prototype, "children", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "slug",
    length: NODE_SLUG_MAX_LENGTH,
    unique: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "slug", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "title",
    length: NODE_TITLE_MAX_LENGTH
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "title", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "description",
    length: NODE_DESCRIPTION_MAX_LENGTH,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "description", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "icon",
    length: NODE_ICON_MAX_LENGTH,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "icon", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "position",
    default: 100
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "position", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "locked",
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], ForumNode.prototype, "locked", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "hidden",
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], ForumNode.prototype, "hidden", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "read_permission",
    length: 64,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "read_permission", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "write_permission",
    length: 64,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "write_permission", void 0);
_ts_decorate([
  (0, import_typeorm.Column)("simple-array", {
    name: "moderator_roles",
    nullable: true
  }),
  _ts_metadata("design:type", Array)
], ForumNode.prototype, "moderator_roles", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "topics_count",
    default: 0
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "topics_count", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "posts_count",
    default: 0
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "posts_count", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "last_topic_id",
    nullable: true
  }),
  _ts_metadata("design:type", Number)
], ForumNode.prototype, "last_topic_id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "last_post_at",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ForumNode.prototype, "last_post_at", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "last_post_uuid",
    length: 36,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], ForumNode.prototype, "last_post_uuid", void 0);
_ts_decorate([
  (0, import_typeorm.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ForumNode.prototype, "created_at", void 0);
_ts_decorate([
  (0, import_typeorm.UpdateDateColumn)({
    name: "updated_at"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ForumNode.prototype, "updated_at", void 0);
ForumNode = _ts_decorate([
  (0, import_server.Translatable)("mod.forum.node", [
    "title",
    "description"
  ], {
    read: [
      PERMISSION_READ
    ],
    write: [
      PERMISSION_MANAGE
    ]
  }),
  (0, import_typeorm.Entity)({
    name: "mod_forum_nodes"
  })
], ForumNode);

// server-src/entities/post.entity.ts
var import_typeorm3 = require("typeorm");

// server-src/entities/topic.entity.ts
var import_typeorm2 = require("typeorm");
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
var _ForumTopic = class _ForumTopic {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "node_id");
    __publicField(this, "node");
    __publicField(this, "author_uuid");
    __publicField(this, "title");
    __publicField(this, "pinned");
    __publicField(this, "closed");
    __publicField(this, "closed_by");
    __publicField(this, "views");
    __publicField(this, "posts_count");
    __publicField(this, "last_post_id");
    __publicField(this, "last_post_uuid");
    __publicField(this, "last_post_at");
    __publicField(this, "deleted_at");
    __publicField(this, "created_at");
    __publicField(this, "updated_at");
  }
};
__name(_ForumTopic, "ForumTopic");
var ForumTopic = _ForumTopic;
_ts_decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata2("design:type", Number)
], ForumTopic.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "node_id"
  }),
  _ts_metadata2("design:type", Number)
], ForumTopic.prototype, "node_id", void 0);
_ts_decorate2([
  (0, import_typeorm2.ManyToOne)(() => ForumNode, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  }),
  (0, import_typeorm2.JoinColumn)({
    name: "node_id"
  }),
  _ts_metadata2("design:type", typeof ForumNode === "undefined" ? Object : ForumNode)
], ForumTopic.prototype, "node", void 0);
_ts_decorate2([
  (0, import_typeorm2.Index)(),
  (0, import_typeorm2.Column)({
    name: "author_uuid",
    length: 36
  }),
  _ts_metadata2("design:type", String)
], ForumTopic.prototype, "author_uuid", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "title",
    length: TOPIC_TITLE_MAX_LENGTH
  }),
  _ts_metadata2("design:type", String)
], ForumTopic.prototype, "title", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "pinned",
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], ForumTopic.prototype, "pinned", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "closed",
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], ForumTopic.prototype, "closed", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "closed_by",
    type: "varchar",
    length: 36,
    nullable: true
  }),
  _ts_metadata2("design:type", Object)
], ForumTopic.prototype, "closed_by", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "views",
    default: 0
  }),
  _ts_metadata2("design:type", Number)
], ForumTopic.prototype, "views", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "posts_count",
    default: 0
  }),
  _ts_metadata2("design:type", Number)
], ForumTopic.prototype, "posts_count", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "last_post_id",
    default: 0
  }),
  _ts_metadata2("design:type", Number)
], ForumTopic.prototype, "last_post_id", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "last_post_uuid",
    length: 36,
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], ForumTopic.prototype, "last_post_uuid", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "last_post_at",
    type: "datetime"
  }),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], ForumTopic.prototype, "last_post_at", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "deleted_at",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], ForumTopic.prototype, "deleted_at", void 0);
_ts_decorate2([
  (0, import_typeorm2.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], ForumTopic.prototype, "created_at", void 0);
_ts_decorate2([
  (0, import_typeorm2.UpdateDateColumn)({
    name: "updated_at"
  }),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], ForumTopic.prototype, "updated_at", void 0);
ForumTopic = _ts_decorate2([
  (0, import_typeorm2.Entity)({
    name: "mod_forum_topics"
  }),
  (0, import_typeorm2.Index)([
    "node_id",
    "last_post_at"
  ])
], ForumTopic);

// server-src/entities/post.entity.ts
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
var _ForumPost = class _ForumPost {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "topic_id");
    __publicField(this, "topic");
    __publicField(this, "author_uuid");
    __publicField(this, "content");
    __publicField(this, "reply_to_id");
    __publicField(this, "first");
    __publicField(this, "edited_at");
    __publicField(this, "edited_by");
    __publicField(this, "deleted_at");
    __publicField(this, "deleted_by");
    __publicField(this, "created_at");
    __publicField(this, "updated_at");
  }
};
__name(_ForumPost, "ForumPost");
var ForumPost = _ForumPost;
_ts_decorate3([
  (0, import_typeorm3.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata3("design:type", Number)
], ForumPost.prototype, "id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "topic_id"
  }),
  _ts_metadata3("design:type", Number)
], ForumPost.prototype, "topic_id", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => ForumTopic, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "topic_id"
  }),
  _ts_metadata3("design:type", typeof ForumTopic === "undefined" ? Object : ForumTopic)
], ForumPost.prototype, "topic", void 0);
_ts_decorate3([
  (0, import_typeorm3.Index)(),
  (0, import_typeorm3.Column)({
    name: "author_uuid",
    length: 36
  }),
  _ts_metadata3("design:type", String)
], ForumPost.prototype, "author_uuid", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)("longtext", {
    name: "content"
  }),
  _ts_metadata3("design:type", String)
], ForumPost.prototype, "content", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "reply_to_id",
    nullable: true
  }),
  _ts_metadata3("design:type", Number)
], ForumPost.prototype, "reply_to_id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "first",
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], ForumPost.prototype, "first", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "edited_at",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], ForumPost.prototype, "edited_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "edited_by",
    length: 36,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], ForumPost.prototype, "edited_by", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "deleted_at",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], ForumPost.prototype, "deleted_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "deleted_by",
    length: 36,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], ForumPost.prototype, "deleted_by", void 0);
_ts_decorate3([
  (0, import_typeorm3.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], ForumPost.prototype, "created_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.UpdateDateColumn)({
    name: "updated_at"
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], ForumPost.prototype, "updated_at", void 0);
ForumPost = _ts_decorate3([
  (0, import_typeorm3.Entity)({
    name: "mod_forum_posts"
  }),
  (0, import_typeorm3.Index)([
    "topic_id",
    "created_at"
  ])
], ForumPost);

// server-src/entities/reaction.entity.ts
var import_typeorm4 = require("typeorm");
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
var _ForumReaction = class _ForumReaction {
  constructor() {
    __publicField(this, "post_id");
    __publicField(this, "post");
    __publicField(this, "user_uuid");
    __publicField(this, "kind");
    __publicField(this, "created_at");
  }
};
__name(_ForumReaction, "ForumReaction");
var ForumReaction = _ForumReaction;
_ts_decorate4([
  (0, import_typeorm4.PrimaryColumn)({
    name: "post_id"
  }),
  _ts_metadata4("design:type", Number)
], ForumReaction.prototype, "post_id", void 0);
_ts_decorate4([
  (0, import_typeorm4.ManyToOne)(() => ForumPost, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  }),
  (0, import_typeorm4.JoinColumn)({
    name: "post_id"
  }),
  _ts_metadata4("design:type", typeof ForumPost === "undefined" ? Object : ForumPost)
], ForumReaction.prototype, "post", void 0);
_ts_decorate4([
  (0, import_typeorm4.PrimaryColumn)({
    name: "user_uuid",
    length: 36
  }),
  _ts_metadata4("design:type", String)
], ForumReaction.prototype, "user_uuid", void 0);
_ts_decorate4([
  (0, import_typeorm4.PrimaryColumn)({
    name: "kind",
    length: REACTION_ID_MAX_LENGTH
  }),
  _ts_metadata4("design:type", String)
], ForumReaction.prototype, "kind", void 0);
_ts_decorate4([
  (0, import_typeorm4.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], ForumReaction.prototype, "created_at", void 0);
ForumReaction = _ts_decorate4([
  (0, import_typeorm4.Entity)({
    name: "mod_forum_reactions"
  }),
  (0, import_typeorm4.Index)([
    "post_id",
    "kind"
  ])
], ForumReaction);

// server-src/entities/read.entity.ts
var import_typeorm5 = require("typeorm");
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
var _ForumRead = class _ForumRead {
  constructor() {
    __publicField(this, "user_uuid");
    __publicField(this, "topic_id");
    __publicField(this, "topic");
    __publicField(this, "last_post_id");
    __publicField(this, "updated_at");
  }
};
__name(_ForumRead, "ForumRead");
var ForumRead = _ForumRead;
_ts_decorate5([
  (0, import_typeorm5.PrimaryColumn)({
    name: "user_uuid",
    length: 36
  }),
  _ts_metadata5("design:type", String)
], ForumRead.prototype, "user_uuid", void 0);
_ts_decorate5([
  (0, import_typeorm5.PrimaryColumn)({
    name: "topic_id"
  }),
  _ts_metadata5("design:type", Number)
], ForumRead.prototype, "topic_id", void 0);
_ts_decorate5([
  (0, import_typeorm5.ManyToOne)(() => ForumTopic, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  }),
  (0, import_typeorm5.JoinColumn)({
    name: "topic_id"
  }),
  _ts_metadata5("design:type", typeof ForumTopic === "undefined" ? Object : ForumTopic)
], ForumRead.prototype, "topic", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    name: "last_post_id",
    default: 0
  }),
  _ts_metadata5("design:type", Number)
], ForumRead.prototype, "last_post_id", void 0);
_ts_decorate5([
  (0, import_typeorm5.UpdateDateColumn)({
    name: "updated_at"
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], ForumRead.prototype, "updated_at", void 0);
ForumRead = _ts_decorate5([
  (0, import_typeorm5.Entity)({
    name: "mod_forum_reads"
  }),
  (0, import_typeorm5.Index)([
    "user_uuid",
    "last_post_id"
  ])
], ForumRead);

// server-src/entities/watermark.entity.ts
var import_typeorm6 = require("typeorm");
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
var _ForumWatermark = class _ForumWatermark {
  constructor() {
    __publicField(this, "user_uuid");
    __publicField(this, "last_post_id");
  }
};
__name(_ForumWatermark, "ForumWatermark");
var ForumWatermark = _ForumWatermark;
_ts_decorate6([
  (0, import_typeorm6.PrimaryColumn)({
    name: "user_uuid",
    length: 36
  }),
  _ts_metadata6("design:type", String)
], ForumWatermark.prototype, "user_uuid", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)({
    name: "last_post_id",
    default: 0
  }),
  _ts_metadata6("design:type", Number)
], ForumWatermark.prototype, "last_post_id", void 0);
ForumWatermark = _ts_decorate6([
  (0, import_typeorm6.Entity)({
    name: "mod_forum_watermarks"
  })
], ForumWatermark);

// server-src/forum.module.ts
var import_common4 = require("@nestjs/common");
var import_typeorm9 = require("@nestjs/typeorm");

// server-src/forum-admin.controller.ts
var import_common2 = require("@nestjs/common");
var import_server4 = require("unicore-api/server");

// server-src/dto/node.input.ts
var import_class_validator = require("class-validator");
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
var SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
var ROLES_MAX = 30;
var _NodeInput = class _NodeInput {
  constructor() {
    __publicField(this, "slug");
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "icon");
    __publicField(this, "parent_id");
    __publicField(this, "position");
    __publicField(this, "locked");
    __publicField(this, "hidden");
    __publicField(this, "read_permission");
    __publicField(this, "write_permission");
    __publicField(this, "moderator_roles");
  }
};
__name(_NodeInput, "NodeInput");
var NodeInput = _NodeInput;
_ts_decorate7([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(NODE_SLUG_MAX_LENGTH),
  (0, import_class_validator.Matches)(SLUG_PATTERN),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "slug", void 0);
_ts_decorate7([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(NODE_TITLE_MAX_LENGTH),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "title", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(NODE_DESCRIPTION_MAX_LENGTH),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "description", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(NODE_ICON_MAX_LENGTH),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "icon", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(1),
  _ts_metadata7("design:type", Number)
], NodeInput.prototype, "parent_id", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  (0, import_class_validator.Min)(0),
  _ts_metadata7("design:type", Number)
], NodeInput.prototype, "position", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsBoolean)(),
  _ts_metadata7("design:type", Boolean)
], NodeInput.prototype, "locked", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsBoolean)(),
  _ts_metadata7("design:type", Boolean)
], NodeInput.prototype, "hidden", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(64),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "read_permission", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(64),
  _ts_metadata7("design:type", String)
], NodeInput.prototype, "write_permission", void 0);
_ts_decorate7([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsArray)(),
  (0, import_class_validator.ArrayMaxSize)(ROLES_MAX),
  (0, import_class_validator.IsString)({
    each: true
  }),
  _ts_metadata7("design:type", Array)
], NodeInput.prototype, "moderator_roles", void 0);

// server-src/forum.service.ts
var import_common = require("@nestjs/common");
var import_typeorm7 = require("@nestjs/typeorm");
var import_typeorm8 = require("typeorm");
var import_server3 = require("unicore-api/server");

// server-src/forum-access.ts
var import_server2 = require("unicore-api/server");
var guest = /* @__PURE__ */ __name(() => ({
  uuid: null,
  perms: (0, import_server2.defaultGrantedPermissions)(),
  roles: [],
  superuser: false
}), "guest");
var viewerOf = /* @__PURE__ */ __name((user) => user ? {
  uuid: user.uuid,
  perms: user.perms || [],
  roles: user.roles || [],
  superuser: Boolean(user.superuser)
} : guest(), "viewerOf");
var allows = /* @__PURE__ */ __name((viewer, permission) => {
  if (viewer.superuser) return true;
  if (!permission) return true;
  return (0, import_server2.satisfiesPermission)(viewer.perms, permission);
}, "allows");
var manages = /* @__PURE__ */ __name((viewer) => allows(viewer, PERMISSION_MANAGE), "manages");
var moderatesEverything = /* @__PURE__ */ __name((viewer) => manages(viewer) || allows(viewer, PERMISSION_MODERATE), "moderatesEverything");
var moderates = /* @__PURE__ */ __name((viewer, branch) => {
  if (moderatesEverything(viewer)) return true;
  if (!viewer.roles.length) return false;
  return branch.some((node) => (node.moderator_roles || []).some((role) => viewer.roles.includes(role)));
}, "moderates");
var reads = /* @__PURE__ */ __name((viewer, branch) => {
  if (moderates(viewer, branch)) return true;
  if (!allows(viewer, PERMISSION_READ)) return false;
  return branch.every((node) => !node.hidden && allows(viewer, node.read_permission));
}, "reads");
var writes = /* @__PURE__ */ __name((viewer, branch) => {
  if (!viewer.uuid) return false;
  if (moderates(viewer, branch)) return true;
  if (!reads(viewer, branch)) return false;
  if (branch.some((node) => node.locked)) return false;
  if (!allows(viewer, PERMISSION_WRITE)) return false;
  return branch.every((node) => allows(viewer, node.write_permission));
}, "writes");
var editsForeignPosts = /* @__PURE__ */ __name((viewer, branch) => manages(viewer) || moderates(viewer, branch) && allows(viewer, PERMISSION_EDIT_POSTS), "editsForeignPosts");

// server-src/forum.service.ts
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
function _ts_metadata8(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata8, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var EXCERPT_LENGTH = 140;
var PLAYER_CLOSE_KEY = `${(0, import_server3.modulePrefixes)("forum").config}${SETTING_PLAYER_CLOSE}`;
var plain = /* @__PURE__ */ __name((html) => String(html || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim(), "plain");
var excerpt = /* @__PURE__ */ __name((html) => {
  const text = plain(html);
  return text.length > EXCERPT_LENGTH ? `${text.slice(0, EXCERPT_LENGTH)}\u2026` : text;
}, "excerpt");
var _ForumService = class _ForumService {
  constructor(nodes, topics, posts, reactions, reads2, watermarks) {
    __publicField(this, "nodes");
    __publicField(this, "topics");
    __publicField(this, "posts");
    __publicField(this, "reactions");
    __publicField(this, "reads");
    __publicField(this, "watermarks");
    this.nodes = nodes;
    this.topics = topics;
    this.posts = posts;
    this.reactions = reactions;
    this.reads = reads2;
    this.watermarks = watermarks;
  }
  async index(user) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const visible = all.filter((node) => reads(viewer, this.branch(node, all)));
    const unread = await this.unreadByNode(viewer, all);
    const last = await this.lastInfo(visible);
    const roots = visible.filter((node) => !node.parent_id);
    const sections = roots.map((root) => ({
      ...this.nodeView(root, unread, last),
      children: visible.filter((node) => node.parent_id === root.id).map((node) => ({
        ...this.nodeView(node, unread, last),
        children_count: visible.filter((child) => child.parent_id === node.id).length
      }))
    }));
    const [latest, leaders, stats] = await Promise.all([
      this.latest(viewer, all, visible),
      this.leaders(),
      this.stats()
    ]);
    return {
      sections,
      latest,
      leaders,
      stats,
      can: {
        manage: moderatesEverything(viewer),
        write: Boolean(viewer.uuid)
      }
    };
  }
  async node(slug, user, query) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const node = all.find((item) => item.slug === slug);
    if (!node) throw new import_common.NotFoundException();
    const branch = this.branch(node, all);
    if (!reads(viewer, branch)) throw new import_common.ForbiddenException();
    const unread = await this.unreadByNode(viewer, all);
    const visibleChildren = all.filter((item) => item.parent_id === node.id && reads(viewer, this.branch(item, all)));
    const last = await this.lastInfo([
      node,
      ...visibleChildren
    ]);
    const children = visibleChildren.map((item) => ({
      ...this.nodeView(item, unread, last),
      children_count: all.filter((child) => child.parent_id === item.id).length
    }));
    const page = await (0, import_server3.paginate)({
      ...query,
      limit: query.limit || TOPICS_PER_PAGE
    }, this.topics.createQueryBuilder("topic").where("topic.node_id = :node", {
      node: node.id
    }).andWhere("topic.deleted_at IS NULL"), {
      sortableColumns: [
        "last_post_at",
        "created_at",
        "posts_count",
        "views",
        "title"
      ],
      searchableColumns: [
        "title"
      ],
      defaultSortBy: [
        [
          "pinned",
          "DESC"
        ],
        [
          "last_post_at",
          "DESC"
        ]
      ],
      defaultLimit: TOPICS_PER_PAGE,
      maxLimit: TOPICS_PER_PAGE
    });
    return {
      node: {
        ...this.nodeView(node, unread, last),
        breadcrumbs: branch.map((item) => this.ref(item))
      },
      children,
      topics: await this.topicPage(page, viewer),
      can: {
        write: writes(viewer, branch),
        moderate: moderates(viewer, branch)
      }
    };
  }
  async topic(id, user, query) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const topic = await this.topics.findOne({
      where: {
        id
      }
    });
    if (!topic || topic.deleted_at && !moderatesEverything(viewer)) throw new import_common.NotFoundException();
    const node = all.find((item) => item.id === topic.node_id);
    if (!node) throw new import_common.NotFoundException();
    const branch = this.branch(node, all);
    if (!reads(viewer, branch)) throw new import_common.ForbiddenException();
    const moderator = moderates(viewer, branch);
    const page = await (0, import_server3.paginate)({
      ...query,
      limit: query.limit || POSTS_PER_PAGE
    }, this.posts.createQueryBuilder("post").where("post.topic_id = :topic", {
      topic: topic.id
    }).andWhere(moderator ? "1 = 1" : "post.deleted_at IS NULL"), {
      sortableColumns: [
        "created_at",
        "id"
      ],
      defaultSortBy: [
        [
          "created_at",
          "ASC"
        ],
        [
          "id",
          "ASC"
        ]
      ],
      defaultLimit: POSTS_PER_PAGE,
      maxLimit: POSTS_PER_PAGE
    });
    const replyIds = page.data.map((post) => post.reply_to_id).filter(Boolean);
    const replies = replyIds.length ? await this.posts.find({
      where: {
        id: (0, import_typeorm8.In)(replyIds)
      }
    }) : [];
    const cards = await this.cards([
      topic.author_uuid,
      ...page.data.map((post) => post.author_uuid),
      ...replies.map((post) => post.author_uuid)
    ]);
    const reactions = await this.reactionsOf(page.data.map((post) => post.id), viewer);
    await this.topics.increment({
      id: topic.id
    }, "views", 1);
    if (viewer.uuid && page.data.length) await this.markRead(viewer.uuid, topic, page.data[page.data.length - 1].id);
    return {
      topic: {
        id: topic.id,
        title: topic.title,
        pinned: topic.pinned,
        closed: topic.closed,
        deleted: Boolean(topic.deleted_at),
        views: topic.views,
        posts_count: topic.posts_count,
        created_at: topic.created_at,
        author: cards.get(topic.author_uuid) || null,
        node: this.ref(node),
        breadcrumbs: branch.map((item) => this.ref(item))
      },
      posts: {
        ...page,
        data: page.data.map((post) => ({
          id: post.id,
          content: post.deleted_at && !moderator ? "" : post.content,
          created_at: post.created_at,
          edited_at: post.edited_at,
          deleted: Boolean(post.deleted_at),
          first: post.first,
          author: cards.get(post.author_uuid) || null,
          reply_to: this.replyView(post.reply_to_id, replies, cards),
          reactions: reactions.get(post.id) || [],
          can: {
            edit: this.canEditPost(viewer, post, branch),
            delete: this.canRemovePost(viewer, post, moderator)
          }
        }))
      },
      can: {
        reply: !topic.closed && writes(viewer, branch),
        moderate: moderator,
        close: await this.canCloseTopic(viewer, topic, moderator),
        open: this.canOpenTopic(viewer, topic, moderator)
      }
    };
  }
  async createTopic(slug, user, input) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const node = all.find((item) => item.slug === slug);
    if (!node) throw new import_common.NotFoundException();
    const branch = this.branch(node, all);
    if (!writes(viewer, branch)) throw new import_common.ForbiddenException();
    const now = /* @__PURE__ */ new Date();
    const topic = await this.topics.save(this.topics.create({
      node_id: node.id,
      author_uuid: user.uuid,
      title: input.title,
      last_post_at: now,
      last_post_uuid: user.uuid,
      posts_count: 1
    }));
    const post = await this.posts.save(this.posts.create({
      topic_id: topic.id,
      author_uuid: user.uuid,
      content: input.content,
      first: true
    }));
    await this.topics.update({
      id: topic.id
    }, {
      last_post_id: post.id
    });
    await this.touch(branch, topic.id, user.uuid, now, {
      topics: 1,
      posts: 1
    });
    await this.markRead(user.uuid, topic, post.id);
    return {
      id: topic.id
    };
  }
  async reply(topicId, user, input) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const topic = await this.topics.findOne({
      where: {
        id: topicId,
        deleted_at: (0, import_typeorm8.IsNull)()
      }
    });
    if (!topic) throw new import_common.NotFoundException();
    const node = all.find((item) => item.id === topic.node_id);
    const branch = node ? this.branch(node, all) : [];
    if (!node || !writes(viewer, branch)) throw new import_common.ForbiddenException();
    if (topic.closed && !moderates(viewer, branch)) throw new import_common.ForbiddenException();
    if (input.reply_to_id) {
      const parent = await this.posts.findOne({
        where: {
          id: input.reply_to_id,
          topic_id: topic.id
        }
      });
      if (!parent) throw new import_common.BadRequestException("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442, \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    }
    const now = /* @__PURE__ */ new Date();
    const post = await this.posts.save(this.posts.create({
      topic_id: topic.id,
      author_uuid: user.uuid,
      content: input.content,
      reply_to_id: input.reply_to_id || null
    }));
    await this.topics.update({
      id: topic.id
    }, {
      last_post_at: now,
      last_post_id: post.id,
      last_post_uuid: user.uuid,
      posts_count: topic.posts_count + 1
    });
    await this.touch(branch, topic.id, user.uuid, now, {
      topics: 0,
      posts: 1
    });
    await this.markRead(user.uuid, topic, post.id);
    await this.notifyReply(topic, post, user);
    return {
      id: post.id,
      page: Math.ceil((topic.posts_count + 1) / POSTS_PER_PAGE)
    };
  }
  async editPost(id, user, input) {
    const viewer = viewerOf(user);
    const { post, topic, branch } = await this.locate(id, viewer);
    if (!this.canEditPost(viewer, post, branch)) throw new import_common.ForbiddenException();
    await this.posts.update({
      id: post.id
    }, {
      content: input.content,
      edited_at: /* @__PURE__ */ new Date(),
      edited_by: user.uuid
    });
    if (post.author_uuid !== user.uuid) this.log(AUDIT_POST_EDIT, user, topic, post.id, {
      content: [
        excerpt(post.content),
        excerpt(input.content)
      ]
    });
    return {
      id: post.id
    };
  }
  async removePost(id, user) {
    const viewer = viewerOf(user);
    const { post, topic, branch } = await this.locate(id, viewer);
    const moderator = moderates(viewer, branch);
    if (!this.canRemovePost(viewer, post, moderator)) throw new import_common.ForbiddenException();
    if (post.first) throw new import_common.BadRequestException("\u041F\u0435\u0440\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0442\u0435\u043C\u043E\u0439");
    await this.posts.update({
      id: post.id
    }, {
      deleted_at: /* @__PURE__ */ new Date(),
      deleted_by: user.uuid
    });
    await this.topics.decrement({
      id: post.topic_id
    }, "posts_count", 1);
    if (post.author_uuid !== user.uuid) this.log(AUDIT_POST_DELETE, user, topic, post.id);
    return {
      id: post.id
    };
  }
  async react(id, user, input) {
    const viewer = viewerOf(user);
    const { post, branch } = await this.locate(id, viewer);
    if (!reads(viewer, branch) || post.deleted_at) throw new import_common.ForbiddenException();
    if (!REACTION_IDS.includes(input.kind)) throw new import_common.BadRequestException("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F");
    const existing = await this.reactions.findOne({
      where: {
        post_id: post.id,
        user_uuid: user.uuid,
        kind: input.kind
      }
    });
    if (existing) await this.reactions.delete({
      post_id: post.id,
      user_uuid: user.uuid,
      kind: input.kind
    });
    else await this.reactions.save(this.reactions.create({
      post_id: post.id,
      user_uuid: user.uuid,
      kind: input.kind
    }));
    const map = await this.reactionsOf([
      post.id
    ], viewer);
    return map.get(post.id) || [];
  }
  async updateTopic(id, user, input) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const topic = await this.topics.findOne({
      where: {
        id
      }
    });
    if (!topic) throw new import_common.NotFoundException();
    const node = all.find((item) => item.id === topic.node_id);
    const branch = node ? this.branch(node, all) : [];
    const moderator = moderates(viewer, branch);
    const author = viewer.uuid === topic.author_uuid;
    if (!moderator && !author) throw new import_common.ForbiddenException();
    const patch = {};
    if (input.closed !== void 0 && input.closed !== topic.closed) {
      if (input.closed && !await this.canCloseTopic(viewer, topic, moderator)) throw new import_common.ForbiddenException();
      if (!input.closed && !this.canOpenTopic(viewer, topic, moderator)) throw new import_common.ForbiddenException();
      patch.closed = input.closed;
      patch.closed_by = input.closed ? viewer.uuid : null;
      if (moderator) this.log(AUDIT_TOPIC_CLOSE, user, topic, topic.id, {
        closed: [
          topic.closed,
          input.closed
        ]
      });
    }
    if (input.title !== void 0 && (moderator || author)) patch.title = input.title;
    if (input.pinned !== void 0) {
      if (!moderator) throw new import_common.ForbiddenException();
      patch.pinned = input.pinned;
    }
    if (input.node_id !== void 0 && input.node_id !== topic.node_id) {
      if (!moderator) throw new import_common.ForbiddenException();
      const target = all.find((item) => item.id === input.node_id);
      if (!target) throw new import_common.BadRequestException("\u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
      if (!moderates(viewer, this.branch(target, all))) throw new import_common.ForbiddenException();
      patch.node_id = target.id;
      await this.moveCounters(branch, this.branch(target, all), topic);
    }
    if (Object.keys(patch).length) await this.topics.update({
      id: topic.id
    }, patch);
    return {
      id: topic.id
    };
  }
  async removeTopic(id, user) {
    const viewer = viewerOf(user);
    const all = await this.tree();
    const topic = await this.topics.findOne({
      where: {
        id
      }
    });
    if (!topic) throw new import_common.NotFoundException();
    const node = all.find((item) => item.id === topic.node_id);
    const branch = node ? this.branch(node, all) : [];
    if (!moderates(viewer, branch) && viewer.uuid !== topic.author_uuid) throw new import_common.ForbiddenException();
    await this.topics.update({
      id: topic.id
    }, {
      deleted_at: /* @__PURE__ */ new Date()
    });
    if (topic.author_uuid !== user.uuid) this.log(AUDIT_TOPIC_DELETE, user, topic, topic.id);
    for (const item of branch) await this.nodes.update({
      id: item.id
    }, {
      topics_count: Math.max(0, item.topics_count - 1),
      posts_count: Math.max(0, item.posts_count - topic.posts_count)
    });
    return {
      id: topic.id
    };
  }
  async search(term, user) {
    const query = String(term || "").trim();
    if (query.length < SEARCH_MIN_LENGTH) return {
      topics: [],
      posts: []
    };
    const viewer = viewerOf(user);
    const all = await this.tree();
    const allowed = all.filter((node) => reads(viewer, this.branch(node, all))).map((node) => node.id);
    if (!allowed.length) return {
      topics: [],
      posts: []
    };
    const topics = await this.topics.createQueryBuilder("topic").where("topic.node_id IN (:...allowed)", {
      allowed
    }).andWhere("topic.deleted_at IS NULL").andWhere("topic.title LIKE :term", {
      term: `%${query}%`
    }).orderBy("topic.last_post_at", "DESC").take(SEARCH_LIMIT).getMany();
    const posts = await this.posts.createQueryBuilder("post").innerJoin(ForumTopic, "topic", "topic.id = post.topic_id").where("topic.node_id IN (:...allowed)", {
      allowed
    }).andWhere("topic.deleted_at IS NULL").andWhere("post.deleted_at IS NULL").andWhere("post.content LIKE :term", {
      term: `%${query}%`
    }).orderBy("post.created_at", "DESC").take(SEARCH_LIMIT).getMany();
    const topicIds = [
      ...new Set(posts.map((post) => post.topic_id))
    ];
    const postTopics = topicIds.length ? await this.topics.find({
      where: {
        id: (0, import_typeorm8.In)(topicIds)
      }
    }) : [];
    const cards = await this.cards([
      ...topics.map((topic) => topic.author_uuid),
      ...posts.map((post) => post.author_uuid)
    ]);
    const byId = new Map(all.map((node) => [
      node.id,
      node
    ]));
    return {
      topics: topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        created_at: topic.created_at,
        author: cards.get(topic.author_uuid) || null,
        node: this.refOrNull(byId.get(topic.node_id))
      })),
      posts: posts.map((post) => {
        const topic = postTopics.find((item) => item.id === post.topic_id);
        return {
          id: post.id,
          topic_id: post.topic_id,
          topic_title: topic?.title || "",
          excerpt: excerpt(post.content),
          created_at: post.created_at,
          author: cards.get(post.author_uuid) || null,
          node: this.refOrNull(topic ? byId.get(topic.node_id) : void 0)
        };
      })
    };
  }
  async markAllRead(uuid) {
    const top = await this.posts.createQueryBuilder("post").select("MAX(post.id)", "last").getRawOne();
    await this.watermarks.upsert({
      user_uuid: uuid,
      last_post_id: Number(top?.last || 0)
    }, [
      "user_uuid"
    ]);
    await this.reads.delete({
      user_uuid: uuid
    });
    return {
      done: true
    };
  }
  async adminNodes() {
    const all = await this.tree();
    return all.map((node) => ({
      id: node.id,
      parent_id: node.parent_id || null,
      slug: node.slug,
      title: node.title,
      description: node.description,
      icon: node.icon,
      position: node.position,
      locked: node.locked,
      hidden: node.hidden,
      read_permission: node.read_permission,
      write_permission: node.write_permission,
      moderator_roles: node.moderator_roles || [],
      topics_count: node.topics_count,
      posts_count: node.posts_count
    }));
  }
  async createNode(input) {
    await this.assertSlugFree(input.slug);
    await this.assertDepth(input.parent_id);
    const node = await this.nodes.save(this.nodes.create(this.nodePatch(input)));
    return {
      id: node.id
    };
  }
  async updateNode(id, input) {
    const node = await this.nodes.findOne({
      where: {
        id
      }
    });
    if (!node) throw new import_common.NotFoundException();
    await this.assertSlugFree(input.slug, id);
    if (input.parent_id === id) throw new import_common.BadRequestException("\u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D \u0441\u0430\u043C \u0432 \u0441\u0435\u0431\u044F");
    if (input.parent_id) {
      const all = await this.tree();
      if (this.branch(all.find((item) => item.id === input.parent_id), all).some((item) => item.id === id)) throw new import_common.BadRequestException("\u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0435\u043B\u044C\u0437\u044F \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0432 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B");
    }
    await this.assertDepth(input.parent_id);
    await this.nodes.update({
      id
    }, this.nodePatch(input));
    return {
      id
    };
  }
  async removeNode(id) {
    const node = await this.nodes.findOne({
      where: {
        id
      }
    });
    if (!node) throw new import_common.NotFoundException();
    const children = await this.nodes.count({
      where: {
        parent_id: id
      }
    });
    if (children) throw new import_common.BadRequestException("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u044B");
    const topics = await this.topics.count({
      where: {
        node_id: id,
        deleted_at: (0, import_typeorm8.IsNull)()
      }
    });
    if (topics) throw new import_common.BadRequestException("\u0412 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0435\u0441\u0442\u044C \u0442\u0435\u043C\u044B");
    await this.nodes.delete({
      id
    });
    return {
      id
    };
  }
  nodePatch(input) {
    return {
      slug: input.slug,
      title: input.title,
      description: input.description || null,
      icon: input.icon || null,
      parent_id: input.parent_id || null,
      position: input.position ?? 100,
      locked: Boolean(input.locked),
      hidden: Boolean(input.hidden),
      read_permission: input.read_permission || null,
      write_permission: input.write_permission || null,
      moderator_roles: input.moderator_roles?.length ? input.moderator_roles : null
    };
  }
  async assertSlugFree(slug, exceptId) {
    const existing = await this.nodes.findOne({
      where: {
        slug
      }
    });
    if (existing && existing.id !== exceptId) throw new import_common.BadRequestException("\u0422\u0430\u043A\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442");
  }
  async assertDepth(parentId) {
    if (!parentId) return;
    const all = await this.tree();
    const parent = all.find((item) => item.id === parentId);
    if (!parent) throw new import_common.BadRequestException("\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    if (this.branch(parent, all).length >= NODE_DEPTH_MAX) throw new import_common.BadRequestException("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0433\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432");
  }
  async locate(postId, viewer) {
    const post = await this.posts.findOne({
      where: {
        id: postId
      }
    });
    if (!post) throw new import_common.NotFoundException();
    const topic = await this.topics.findOne({
      where: {
        id: post.topic_id
      }
    });
    const all = await this.tree();
    const node = topic ? all.find((item) => item.id === topic.node_id) : void 0;
    if (!topic || !node) throw new import_common.NotFoundException();
    const branch = this.branch(node, all);
    if (!reads(viewer, branch)) throw new import_common.ForbiddenException();
    return {
      post,
      topic,
      node,
      branch
    };
  }
  canEditPost(viewer, post, branch) {
    if (viewer.uuid && viewer.uuid === post.author_uuid) return !post.deleted_at;
    return editsForeignPosts(viewer, branch);
  }
  canRemovePost(viewer, post, moderator) {
    if (moderator) return true;
    if (!viewer.uuid || viewer.uuid !== post.author_uuid) return false;
    return !post.deleted_at;
  }
  playerClose() {
    return (0, import_server3.core)().config.getBoolean(PLAYER_CLOSE_KEY, true);
  }
  async canCloseTopic(viewer, topic, moderator) {
    if (topic.closed) return false;
    if (moderator) return true;
    if (viewer.uuid !== topic.author_uuid) return false;
    return this.playerClose();
  }
  canOpenTopic(viewer, topic, moderator) {
    if (!topic.closed) return false;
    if (moderator) return true;
    return Boolean(viewer.uuid) && viewer.uuid === topic.author_uuid && topic.closed_by === viewer.uuid;
  }
  log(action, user, topic, targetId, changes) {
    (0, import_server3.audit)().record({
      action: auditAction(action),
      actor: {
        type: "user",
        id: user.uuid,
        name: user.username
      },
      target: {
        type: "forum",
        id: String(targetId),
        name: topic.title
      },
      changes: changes || null
    });
  }
  replyView(id, replies, cards) {
    if (!id) return null;
    const parent = replies.find((post) => post.id === id);
    if (!parent) return null;
    return {
      id: parent.id,
      excerpt: parent.deleted_at ? "" : excerpt(parent.content),
      author: cards.get(parent.author_uuid) || null
    };
  }
  async topicPage(page, viewer) {
    const cards = await this.cards([
      ...page.data.map((topic) => topic.author_uuid),
      ...page.data.map((topic) => topic.last_post_uuid)
    ]);
    const unread = await this.unreadTopics(viewer, page.data);
    return {
      ...page,
      data: page.data.map((topic) => ({
        id: topic.id,
        title: topic.title,
        pinned: topic.pinned,
        closed: topic.closed,
        views: topic.views,
        posts_count: topic.posts_count,
        created_at: topic.created_at,
        last_post_at: topic.last_post_at,
        author: cards.get(topic.author_uuid) || null,
        last_author: topic.last_post_uuid ? cards.get(topic.last_post_uuid) || null : null,
        unread: unread.has(topic.id),
        pages: Math.max(1, Math.ceil(topic.posts_count / POSTS_PER_PAGE))
      }))
    };
  }
  async unreadTopics(viewer, topics) {
    if (!viewer.uuid || !topics.length) return /* @__PURE__ */ new Set();
    const ids = topics.map((topic) => topic.id);
    const [rows, watermark] = await Promise.all([
      this.reads.find({
        where: {
          user_uuid: viewer.uuid,
          topic_id: (0, import_typeorm8.In)(ids)
        }
      }),
      this.watermarks.findOne({
        where: {
          user_uuid: viewer.uuid
        }
      })
    ]);
    const seen = new Map(rows.map((row) => [
      row.topic_id,
      row.last_post_id
    ]));
    const floor = watermark?.last_post_id ?? 0;
    return new Set(topics.filter((topic) => topic.last_post_id > Math.max(seen.get(topic.id) ?? 0, floor)).map((topic) => topic.id));
  }
  async unreadByNode(viewer, all) {
    const result = /* @__PURE__ */ new Set();
    if (!viewer.uuid) return result;
    const watermark = await this.watermarks.findOne({
      where: {
        user_uuid: viewer.uuid
      }
    });
    const floor = watermark?.last_post_id ?? 0;
    const rows = await this.topics.createQueryBuilder("topic").select("topic.node_id", "node_id").leftJoin(ForumRead, "read", "read.topic_id = topic.id AND read.user_uuid = :uuid", {
      uuid: viewer.uuid
    }).where("topic.deleted_at IS NULL").andWhere("topic.last_post_id > GREATEST(COALESCE(read.last_post_id, 0), :floor)", {
      floor
    }).groupBy("topic.node_id").getRawMany();
    const byId = new Map(all.map((node) => [
      node.id,
      node
    ]));
    for (const row of rows) for (const item of this.branch(byId.get(Number(row.node_id)), all)) result.add(item.id);
    return result;
  }
  async latest(viewer, all, visible) {
    const allowed = visible.map((node) => node.id);
    if (!allowed.length) return [];
    const topics = await this.topics.find({
      where: {
        node_id: (0, import_typeorm8.In)(allowed),
        deleted_at: (0, import_typeorm8.IsNull)()
      },
      order: {
        last_post_at: "DESC"
      },
      take: LATEST_TOPICS_LIMIT
    });
    const cards = await this.cards(topics.map((topic) => topic.last_post_uuid || topic.author_uuid));
    const byId = new Map(all.map((node) => [
      node.id,
      node
    ]));
    return topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      last_post_at: topic.last_post_at,
      author: cards.get(topic.last_post_uuid || topic.author_uuid) || null,
      node: this.refOrNull(byId.get(topic.node_id))
    }));
  }
  async leaders() {
    const rows = await this.posts.createQueryBuilder("post").select("post.author_uuid", "uuid").addSelect("COUNT(post.id)", "posts").where("post.deleted_at IS NULL").groupBy("post.author_uuid").orderBy("posts", "DESC").take(LEADERS_LIMIT).getRawMany();
    const cards = await this.cards(rows.map((row) => row.uuid));
    return rows.map((row) => ({
      user: cards.get(row.uuid) || null,
      posts: Number(row.posts)
    })).filter((row) => row.user);
  }
  async stats() {
    const [topics, posts, authors] = await Promise.all([
      this.topics.count({
        where: {
          deleted_at: (0, import_typeorm8.IsNull)()
        }
      }),
      this.posts.count({
        where: {
          deleted_at: (0, import_typeorm8.IsNull)()
        }
      }),
      this.posts.createQueryBuilder("post").select("COUNT(DISTINCT post.author_uuid)", "authors").where("post.deleted_at IS NULL").getRawOne()
    ]);
    return {
      topics,
      posts,
      authors: Number(authors?.authors || 0)
    };
  }
  async reactionsOf(postIds, viewer) {
    const result = /* @__PURE__ */ new Map();
    if (!postIds.length) return result;
    const rows = await this.reactions.find({
      where: {
        post_id: (0, import_typeorm8.In)(postIds)
      }
    });
    for (const id of postIds) {
      const own = rows.filter((row) => row.post_id === id);
      const kinds = REACTION_IDS.map((kind) => ({
        kind,
        count: own.filter((row) => row.kind === kind).length,
        mine: Boolean(viewer.uuid && own.some((row) => row.kind === kind && row.user_uuid === viewer.uuid))
      })).filter((entry) => entry.count > 0);
      result.set(id, kinds);
    }
    return result;
  }
  async cards(uuids) {
    const unique = [
      ...new Set(uuids.filter(Boolean))
    ];
    if (!unique.length) return /* @__PURE__ */ new Map();
    const users = await (0, import_server3.core)().users.getMany(unique);
    return new Map(users.map((user) => [
      user.uuid,
      {
        uuid: user.uuid,
        username: user.username,
        skin: user.skin || null,
        role: user.role || null
      }
    ]));
  }
  async markRead(uuid, topic, lastPostId) {
    const current = await this.reads.findOne({
      where: {
        user_uuid: uuid,
        topic_id: topic.id
      }
    });
    if (current && current.last_post_id >= lastPostId) return;
    await this.reads.upsert({
      user_uuid: uuid,
      topic_id: topic.id,
      last_post_id: lastPostId
    }, [
      "user_uuid",
      "topic_id"
    ]);
  }
  async touch(branch, topicId, uuid, at, delta) {
    for (const node of branch) await this.nodes.update({
      id: node.id
    }, {
      topics_count: node.topics_count + delta.topics,
      posts_count: node.posts_count + delta.posts,
      last_topic_id: topicId,
      last_post_at: at,
      last_post_uuid: uuid
    });
  }
  async moveCounters(from, to, topic) {
    for (const node of from) if (!to.some((item) => item.id === node.id)) await this.nodes.update({
      id: node.id
    }, {
      topics_count: Math.max(0, node.topics_count - 1),
      posts_count: Math.max(0, node.posts_count - topic.posts_count)
    });
    for (const node of to) if (!from.some((item) => item.id === node.id)) await this.nodes.update({
      id: node.id
    }, {
      topics_count: node.topics_count + 1,
      posts_count: node.posts_count + topic.posts_count
    });
  }
  async notifyReply(topic, post, user) {
    const targets = /* @__PURE__ */ new Set();
    if (topic.author_uuid && topic.author_uuid !== user.uuid) targets.add(topic.author_uuid);
    if (post.reply_to_id) {
      const parent = await this.posts.findOne({
        where: {
          id: post.reply_to_id
        }
      });
      if (parent?.author_uuid && parent.author_uuid !== user.uuid) targets.add(parent.author_uuid);
    }
    if (!targets.size) return;
    await (0, import_server3.core)().notifications.sendMany([
      ...targets
    ], {
      type: "forum.reply",
      category: CATEGORY,
      titleKey: "mod.forum.notify_reply",
      bodyKey: "mod.forum.notify_reply_body",
      params: {
        topic: topic.title,
        author: user.username
      },
      link: `/mod/forum/topic/${topic.id}`,
      icon: "bx bx-conversation"
    });
  }
  nodeView(node, unread, last) {
    return {
      id: node.id,
      slug: node.slug,
      title: node.title,
      description: node.description,
      icon: node.icon,
      locked: node.locked,
      topics_count: node.topics_count,
      posts_count: node.posts_count,
      unread: unread.has(node.id),
      last: last.get(node.id) || null
    };
  }
  async lastInfo(nodes) {
    const result = /* @__PURE__ */ new Map();
    const topicIds = [
      ...new Set(nodes.map((node) => node.last_topic_id).filter(Boolean))
    ];
    if (!topicIds.length) return result;
    const topics = await this.topics.find({
      where: {
        id: (0, import_typeorm8.In)(topicIds),
        deleted_at: (0, import_typeorm8.IsNull)()
      }
    });
    const cards = await this.cards(nodes.map((node) => node.last_post_uuid));
    for (const node of nodes) {
      const topic = topics.find((item) => item.id === node.last_topic_id);
      if (!topic) continue;
      result.set(node.id, {
        topic_id: topic.id,
        title: topic.title,
        at: node.last_post_at,
        user: cards.get(node.last_post_uuid) || null
      });
    }
    return result;
  }
  ref(node) {
    return {
      id: node.id,
      slug: node.slug,
      title: node.title
    };
  }
  refOrNull(node) {
    return node ? this.ref(node) : null;
  }
  branch(node, all) {
    const path = [];
    let current = node;
    while (current && path.length < NODE_DEPTH_MAX) {
      path.unshift(current);
      current = current.parent_id ? all.find((item) => item.id === current.parent_id) : void 0;
    }
    return path;
  }
  tree() {
    return this.nodes.find({
      order: {
        position: "ASC",
        id: "ASC"
      }
    });
  }
};
__name(_ForumService, "ForumService");
var ForumService = _ForumService;
ForumService = _ts_decorate8([
  (0, import_common.Injectable)(),
  _ts_param(0, (0, import_typeorm7.InjectRepository)(ForumNode)),
  _ts_param(1, (0, import_typeorm7.InjectRepository)(ForumTopic)),
  _ts_param(2, (0, import_typeorm7.InjectRepository)(ForumPost)),
  _ts_param(3, (0, import_typeorm7.InjectRepository)(ForumReaction)),
  _ts_param(4, (0, import_typeorm7.InjectRepository)(ForumRead)),
  _ts_param(5, (0, import_typeorm7.InjectRepository)(ForumWatermark)),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository,
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository,
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository,
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository,
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository,
    typeof import_typeorm8.Repository === "undefined" ? Object : import_typeorm8.Repository
  ])
], ForumService);

// server-src/forum-admin.controller.ts
function _ts_decorate9(decorators, target, key, desc) {
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
__name(_ts_decorate9, "_ts_decorate");
function _ts_metadata9(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata9, "_ts_metadata");
function _ts_param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param2, "_ts_param");
var _ForumAdminController = class _ForumAdminController {
  constructor(forum) {
    __publicField(this, "forum");
    this.forum = forum;
  }
  nodes() {
    return this.forum.adminNodes();
  }
  create(input) {
    return this.forum.createNode(input);
  }
  update(id, input) {
    return this.forum.updateNode(id, input);
  }
  remove(id) {
    return this.forum.removeNode(id);
  }
};
__name(_ForumAdminController, "ForumAdminController");
var ForumAdminController = _ForumAdminController;
_ts_decorate9([
  (0, import_server4.Permissions)([
    "panel.access",
    PERMISSION_MANAGE
  ]),
  (0, import_common2.Get)("nodes"),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", []),
  _ts_metadata9("design:returntype", void 0)
], ForumAdminController.prototype, "nodes", null);
_ts_decorate9([
  (0, import_server4.Permissions)([
    "panel.access",
    PERMISSION_MANAGE
  ]),
  (0, import_common2.Post)("nodes"),
  _ts_param2(0, (0, import_common2.Body)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof NodeInput === "undefined" ? Object : NodeInput
  ]),
  _ts_metadata9("design:returntype", void 0)
], ForumAdminController.prototype, "create", null);
_ts_decorate9([
  (0, import_server4.Permissions)([
    "panel.access",
    PERMISSION_MANAGE
  ]),
  (0, import_common2.Patch)("nodes/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    Number,
    typeof NodeInput === "undefined" ? Object : NodeInput
  ]),
  _ts_metadata9("design:returntype", void 0)
], ForumAdminController.prototype, "update", null);
_ts_decorate9([
  (0, import_server4.Permissions)([
    "panel.access",
    PERMISSION_MANAGE
  ]),
  (0, import_common2.Delete)("nodes/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    Number
  ]),
  _ts_metadata9("design:returntype", void 0)
], ForumAdminController.prototype, "remove", null);
ForumAdminController = _ts_decorate9([
  (0, import_common2.Controller)("mod/forum/admin"),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof ForumService === "undefined" ? Object : ForumService
  ])
], ForumAdminController);

// server-src/forum.controller.ts
var import_common3 = require("@nestjs/common");
var import_platform_express = require("@nestjs/platform-express");
var import_server7 = require("unicore-api/server");

// server-src/dto/post.input.ts
var import_class_validator2 = require("class-validator");
var import_server5 = require("unicore-api/server");
function _ts_decorate10(decorators, target, key, desc) {
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
__name(_ts_decorate10, "_ts_decorate");
function _ts_metadata10(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata10, "_ts_metadata");
var _PostInput = class _PostInput {
  constructor() {
    __publicField(this, "content");
    __publicField(this, "reply_to_id");
  }
};
__name(_PostInput, "PostInput");
var PostInput = _PostInput;
_ts_decorate10([
  (0, import_server5.SanitizeHtml)({
    denyAttributes: SANITIZE_DENY_ATTRIBUTES
  }),
  (0, import_class_validator2.IsDefined)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MinLength)(POST_CONTENT_MIN_LENGTH),
  (0, import_class_validator2.MaxLength)(POST_CONTENT_MAX_LENGTH),
  _ts_metadata10("design:type", String)
], PostInput.prototype, "content", void 0);
_ts_decorate10([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsInt)(),
  (0, import_class_validator2.Min)(1),
  _ts_metadata10("design:type", Number)
], PostInput.prototype, "reply_to_id", void 0);

// server-src/dto/reaction.input.ts
var import_class_validator3 = require("class-validator");
function _ts_decorate11(decorators, target, key, desc) {
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
__name(_ts_decorate11, "_ts_decorate");
function _ts_metadata11(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata11, "_ts_metadata");
var _ReactionInput = class _ReactionInput {
  constructor() {
    __publicField(this, "kind");
  }
};
__name(_ReactionInput, "ReactionInput");
var ReactionInput = _ReactionInput;
_ts_decorate11([
  (0, import_class_validator3.IsDefined)(),
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.IsIn)(REACTION_IDS),
  _ts_metadata11("design:type", String)
], ReactionInput.prototype, "kind", void 0);

// server-src/dto/topic.input.ts
var import_class_validator4 = require("class-validator");
var import_server6 = require("unicore-api/server");
function _ts_decorate12(decorators, target, key, desc) {
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
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata12(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata12, "_ts_metadata");
var _TopicInput = class _TopicInput {
  constructor() {
    __publicField(this, "title");
    __publicField(this, "content");
  }
};
__name(_TopicInput, "TopicInput");
var TopicInput = _TopicInput;
_ts_decorate12([
  (0, import_class_validator4.IsDefined)(),
  (0, import_class_validator4.IsString)(),
  (0, import_class_validator4.MinLength)(TOPIC_TITLE_MIN_LENGTH),
  (0, import_class_validator4.MaxLength)(TOPIC_TITLE_MAX_LENGTH),
  _ts_metadata12("design:type", String)
], TopicInput.prototype, "title", void 0);
_ts_decorate12([
  (0, import_server6.SanitizeHtml)({
    denyAttributes: SANITIZE_DENY_ATTRIBUTES
  }),
  (0, import_class_validator4.IsDefined)(),
  (0, import_class_validator4.IsString)(),
  (0, import_class_validator4.MinLength)(POST_CONTENT_MIN_LENGTH),
  (0, import_class_validator4.MaxLength)(POST_CONTENT_MAX_LENGTH),
  _ts_metadata12("design:type", String)
], TopicInput.prototype, "content", void 0);

// server-src/dto/topic-update.input.ts
var import_class_validator5 = require("class-validator");
function _ts_decorate13(decorators, target, key, desc) {
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
__name(_ts_decorate13, "_ts_decorate");
function _ts_metadata13(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata13, "_ts_metadata");
var _TopicUpdateInput = class _TopicUpdateInput {
  constructor() {
    __publicField(this, "title");
    __publicField(this, "pinned");
    __publicField(this, "closed");
    __publicField(this, "node_id");
  }
};
__name(_TopicUpdateInput, "TopicUpdateInput");
var TopicUpdateInput = _TopicUpdateInput;
_ts_decorate13([
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_validator5.IsString)(),
  (0, import_class_validator5.MinLength)(TOPIC_TITLE_MIN_LENGTH),
  (0, import_class_validator5.MaxLength)(TOPIC_TITLE_MAX_LENGTH),
  _ts_metadata13("design:type", String)
], TopicUpdateInput.prototype, "title", void 0);
_ts_decorate13([
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_validator5.IsBoolean)(),
  _ts_metadata13("design:type", Boolean)
], TopicUpdateInput.prototype, "pinned", void 0);
_ts_decorate13([
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_validator5.IsBoolean)(),
  _ts_metadata13("design:type", Boolean)
], TopicUpdateInput.prototype, "closed", void 0);
_ts_decorate13([
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_validator5.IsInt)(),
  (0, import_class_validator5.Min)(1),
  _ts_metadata13("design:type", Number)
], TopicUpdateInput.prototype, "node_id", void 0);

// server-src/forum.controller.ts
function _ts_decorate14(decorators, target, key, desc) {
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
__name(_ts_decorate14, "_ts_decorate");
function _ts_metadata14(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue);
  }
}
__name(_ts_metadata14, "_ts_metadata");
function _ts_param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param3, "_ts_param");
var MEGABYTE = 1024 * 1024;
var HOUR_SECONDS = 60 * 60;
var IMAGE_PATTERN = /\.(png|jpe?g|gif|webp)$/i;
var _ForumController = class _ForumController {
  constructor(forum) {
    __publicField(this, "forum");
    this.forum = forum;
  }
  index(user) {
    return this.forum.index(user || null);
  }
  search(q, user) {
    return this.forum.search(q, user || null);
  }
  node(slug, user, query) {
    return this.forum.node(slug, user || null, query);
  }
  topic(id, user, query) {
    return this.forum.topic(id, user || null, query);
  }
  createTopic(slug, user, input) {
    return this.forum.createTopic(slug, user, input);
  }
  reply(id, user, input) {
    return this.forum.reply(id, user, input);
  }
  updateTopic(id, user, input) {
    return this.forum.updateTopic(id, user, input);
  }
  removeTopic(id, user) {
    return this.forum.removeTopic(id, user);
  }
  editPost(id, user, input) {
    return this.forum.editPost(id, user, input);
  }
  removePost(id, user) {
    return this.forum.removePost(id, user);
  }
  react(id, user, input) {
    return this.forum.react(id, user, input);
  }
  readAll(user) {
    return this.forum.markAllRead(user.uuid);
  }
  async upload(user, ip, file) {
    if (!file) throw new import_common3.BadRequestException("\u0424\u0430\u0439\u043B \u043D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B");
    if (!IMAGE_PATTERN.test(file.originalname)) throw new import_common3.BadRequestException("\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438");
    if (file.size > UPLOAD_MAX_MEGABYTES * MEGABYTE) throw new import_common3.BadRequestException(`\u0424\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 ${UPLOAD_MAX_MEGABYTES} \u041C\u0411`);
    await this.throttle(user.uuid || ip);
    const name = await (0, import_server7.core)().storage.save(file.originalname, file.buffer);
    return {
      url: (0, import_server7.core)().storage.url(name)
    };
  }
  async throttle(key) {
    const cacheKey = `mod.forum.upload:${key}`;
    const used = Number(await (0, import_server7.core)().cache.get(cacheKey) || 0);
    if (used >= UPLOADS_PER_HOUR) throw new import_common3.BadRequestException("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435");
    await (0, import_server7.core)().cache.set(cacheKey, used + 1, HOUR_SECONDS);
  }
};
__name(_ForumController, "ForumController");
var ForumController = _ForumController;
_ts_decorate14([
  (0, import_server7.Public)(),
  (0, import_common3.Get)(),
  _ts_param3(0, (0, import_server7.CurrentUser)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "index", null);
_ts_decorate14([
  (0, import_server7.Public)(),
  (0, import_common3.Get)("search"),
  _ts_param3(0, (0, import_common3.Query)("q")),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    String,
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "search", null);
_ts_decorate14([
  (0, import_server7.Public)(),
  (0, import_common3.Get)("nodes/:slug"),
  _ts_param3(0, (0, import_common3.Param)("slug")),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_server7.Paginate)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    String,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof import_server7.PaginateQuery === "undefined" ? Object : import_server7.PaginateQuery
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "node", null);
_ts_decorate14([
  (0, import_server7.Public)(),
  (0, import_common3.Get)("topics/:id"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_server7.Paginate)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof import_server7.PaginateQuery === "undefined" ? Object : import_server7.PaginateQuery
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "topic", null);
_ts_decorate14([
  (0, import_server7.Permissions)([
    PERMISSION_WRITE
  ]),
  (0, import_common3.Post)("nodes/:slug/topics"),
  _ts_param3(0, (0, import_common3.Param)("slug")),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_common3.Body)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    String,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof TopicInput === "undefined" ? Object : TopicInput
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "createTopic", null);
_ts_decorate14([
  (0, import_server7.Permissions)([
    PERMISSION_WRITE
  ]),
  (0, import_common3.Post)("topics/:id/posts"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_common3.Body)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof PostInput === "undefined" ? Object : PostInput
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "reply", null);
_ts_decorate14([
  (0, import_common3.Patch)("topics/:id"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_common3.Body)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof TopicUpdateInput === "undefined" ? Object : TopicUpdateInput
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "updateTopic", null);
_ts_decorate14([
  (0, import_common3.Delete)("topics/:id"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "removeTopic", null);
_ts_decorate14([
  (0, import_common3.Patch)("posts/:id"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_common3.Body)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof PostInput === "undefined" ? Object : PostInput
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "editPost", null);
_ts_decorate14([
  (0, import_common3.Delete)("posts/:id"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "removePost", null);
_ts_decorate14([
  (0, import_common3.Post)("posts/:id/reactions"),
  _ts_param3(0, (0, import_common3.Param)("id", import_common3.ParseIntPipe)),
  _ts_param3(1, (0, import_server7.CurrentUser)()),
  _ts_param3(2, (0, import_common3.Body)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    Number,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    typeof ReactionInput === "undefined" ? Object : ReactionInput
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "react", null);
_ts_decorate14([
  (0, import_common3.Post)("read-all"),
  _ts_param3(0, (0, import_server7.CurrentUser)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata14("design:returntype", void 0)
], ForumController.prototype, "readAll", null);
_ts_decorate14([
  (0, import_server7.Permissions)([
    PERMISSION_WRITE
  ]),
  (0, import_common3.Post)("upload"),
  (0, import_common3.UseInterceptors)((0, import_platform_express.FileInterceptor)("file")),
  _ts_param3(0, (0, import_server7.CurrentUser)()),
  _ts_param3(1, (0, import_server7.IpAddress)()),
  _ts_param3(2, (0, import_common3.UploadedFile)()),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof UserRecord === "undefined" ? Object : UserRecord,
    String,
    Object
  ]),
  _ts_metadata14("design:returntype", Promise)
], ForumController.prototype, "upload", null);
ForumController = _ts_decorate14([
  (0, import_common3.Controller)("mod/forum"),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof ForumService === "undefined" ? Object : ForumService
  ])
], ForumController);

// server-src/forum.module.ts
function _ts_decorate15(decorators, target, key, desc) {
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
__name(_ts_decorate15, "_ts_decorate");
var _ForumModule = class _ForumModule {
};
__name(_ForumModule, "ForumModule");
var ForumModule = _ForumModule;
ForumModule = _ts_decorate15([
  (0, import_common4.Module)({
    imports: [
      import_typeorm9.TypeOrmModule.forFeature([
        ForumNode,
        ForumTopic,
        ForumPost,
        ForumReaction,
        ForumRead,
        ForumWatermark
      ])
    ],
    controllers: [
      ForumAdminController,
      ForumController
    ],
    providers: [
      ForumService
    ]
  })
], ForumModule);

// locales/ru.json
var ru_default = {
  "mod.forum.admin_content": "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",
  "mod.forum.admin_counters": "{topics} \u0442\u0435\u043C, {posts} \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
  "mod.forum.admin_description": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  "mod.forum.admin_empty": "\u0420\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "mod.forum.admin_hidden": "\u0421\u043A\u0440\u044B\u0442 \u043E\u0442 \u0432\u0441\u0435\u0445, \u043A\u0440\u043E\u043C\u0435 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432",
  "mod.forum.admin_icon": "\u0418\u043A\u043E\u043D\u043A\u0430",
  "mod.forum.admin_locked": "\u0417\u0430\u043A\u0440\u044B\u0442 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0442\u0435\u043C",
  "mod.forum.admin_moderator_roles": "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
  "mod.forum.admin_moderator_roles_hint": "\u0420\u043E\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0434\u0435\u0440\u0438\u0440\u0443\u044E\u0442 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0434\u0435\u043B \u0438 \u0432\u0441\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435.",
  "mod.forum.admin_node_edit": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
  "mod.forum.admin_node_new": "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B",
  "mod.forum.admin_nodes": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0444\u043E\u0440\u0443\u043C\u0430",
  "mod.forum.admin_parent": "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B",
  "mod.forum.admin_permission_hint": "\u041F\u0443\u0441\u0442\u043E \u2014 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u0441\u0435\u043C, \u0443 \u043A\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u043E\u0431\u0449\u0435\u0435 \u043F\u0440\u0430\u0432\u043E \u0444\u043E\u0440\u0443\u043C\u0430.",
  "mod.forum.admin_position": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A",
  "mod.forum.admin_read_permission": "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0447\u0442\u0435\u043D\u0438\u0435",
  "mod.forum.admin_removed": "\u0420\u0430\u0437\u0434\u0435\u043B \u0443\u0434\u0430\u043B\u0451\u043D",
  "mod.forum.admin_saved": "\u0420\u0430\u0437\u0434\u0435\u043B \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D",
  "mod.forum.admin_slug": "\u0410\u0434\u0440\u0435\u0441",
  "mod.forum.admin_slug_hint": "\u041B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u0434\u0435\u0444\u0438\u0441: \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0440\u0430\u0437\u0434\u0435\u043B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
  "mod.forum.admin_state": "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",
  "mod.forum.admin_tag_hidden": "\u0421\u043A\u0440\u044B\u0442",
  "mod.forum.admin_tag_locked": "\u0417\u0430\u043A\u0440\u044B\u0442",
  "mod.forum.admin_tag_open": "\u041E\u0442\u043A\u0440\u044B\u0442",
  "mod.forum.admin_title": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
  "mod.forum.admin_write_hint": "\u0427\u0442\u043E\u0431\u044B \u0438\u0433\u0440\u043E\u043A\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u044B \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C, \u0432\u044B\u0434\u0430\u0439\u0442\u0435 \u043D\u0443\u0436\u043D\u043E\u0439 \u0440\u043E\u043B\u0438 \u043F\u0440\u0430\u0432\u043E \xAB\u041F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435\xBB \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \xAB\u0420\u043E\u043B\u0438\xBB.",
  "mod.forum.admin_write_permission": "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C",
  "mod.forum.audit_class": "\u0424\u043E\u0440\u0443\u043C",
  "mod.forum.audit_post_delete": "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0447\u0443\u0436\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  "mod.forum.audit_post_edit": "\u041F\u0440\u0430\u0432\u043A\u0430 \u0447\u0443\u0436\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  "mod.forum.audit_topic_close": "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0442\u0435\u043C\u044B",
  "mod.forum.audit_topic_delete": "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0447\u0443\u0436\u043E\u0439 \u0442\u0435\u043C\u044B",
  "mod.forum.authors": "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",
  "mod.forum.by_author": "\u041E\u0442 {author}",
  "mod.forum.cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
  "mod.forum.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u043C\u0443",
  "mod.forum.closed": "\u0422\u0435\u043C\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0430",
  "mod.forum.config_nav_order": "\u041C\u0435\u0441\u0442\u043E \u0432 \u043C\u0435\u043D\u044E",
  "mod.forum.config_nav_order_hint": "\u0427\u0435\u043C \u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0438\u0441\u043B\u043E, \u0442\u0435\u043C \u043B\u0435\u0432\u0435\u0435 \u043F\u0443\u043D\u043A\u0442 \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430.",
  "mod.forum.config_player_close": "\u0418\u0433\u0440\u043E\u043A \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0442\u0435\u043C\u044B",
  "mod.forum.config_player_close_hint": "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435, \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u044B \u0432\u043F\u0440\u0430\u0432\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B. \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0432\u043E\u044E \u0442\u0435\u043C\u0443 \u0430\u0432\u0442\u043E\u0440 \u043C\u043E\u0436\u0435\u0442, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u043B \u0435\u0451 \u0441\u0430\u043C.",
  "mod.forum.config_subtitle": "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C",
  "mod.forum.config_subtitle_hint": "\u041A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0434 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u043E\u0440\u0443\u043C\u0430.",
  "mod.forum.config_title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0444\u043E\u0440\u0443\u043C\u0430",
  "mod.forum.config_title_hint": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0444\u043E\u0440\u0443\u043C\u0430 \u0438 \u0432 \u043C\u0435\u043D\u044E \u0441\u0430\u0439\u0442\u0430.",
  "mod.forum.confirm": "\u0422\u043E\u0447\u043D\u043E?",
  "mod.forum.delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  "mod.forum.deleted_post": "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043E",
  "mod.forum.deleted_topic": "\u0422\u0435\u043C\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430",
  "mod.forum.edit": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
  "mod.forum.edited": "\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E {date}",
  "mod.forum.latest": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0442\u0435\u043C\u044B",
  "mod.forum.leader_posts": "{count} \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
  "mod.forum.leaders": "\u041B\u0438\u0434\u0435\u0440\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430",
  "mod.forum.locked": "\u0420\u0430\u0437\u0434\u0435\u043B \u0437\u0430\u043A\u0440\u044B\u0442 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0442\u0435\u043C",
  "mod.forum.login_to_write": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435",
  "mod.forum.mark_all_read": "\u0412\u0441\u0451 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E",
  "mod.forum.move": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438",
  "mod.forum.move_to": "\u041A\u0443\u0434\u0430 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438",
  "mod.forum.new_topic": "\u041D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430",
  "mod.forum.no_discussions": "\u041D\u0435\u0442 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0439",
  "mod.forum.no_sections": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u044B",
  "mod.forum.no_topics": "\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0442\u0435\u043C",
  "mod.forum.no_write_access": "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043F\u0440\u0430\u0432\u0430 \u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435",
  "mod.forum.notify_category": "\u0424\u043E\u0440\u0443\u043C",
  "mod.forum.notify_category_hint": "\u041E\u0442\u0432\u0435\u0442\u044B \u0432 \u0432\u0430\u0448\u0438\u0445 \u0442\u0435\u043C\u0430\u0445 \u0438 \u043D\u0430 \u0432\u0430\u0448\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F.",
  "mod.forum.notify_reply": "\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435",
  "mod.forum.notify_reply_body": "{author} \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u0432 \u0442\u0435\u043C\u0435 \xAB{topic}\xBB",
  "mod.forum.page_of": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 {page} \u0438\u0437 {total}",
  "mod.forum.pin": "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
  "mod.forum.pinned": "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E",
  "mod.forum.posts": "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  "mod.forum.publish": "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
  "mod.forum.react": "\u0420\u0435\u0430\u043A\u0446\u0438\u044F",
  "mod.forum.reaction_dislike": "\u041D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F",
  "mod.forum.reaction_fire": "\u041E\u0433\u043E\u043D\u044C",
  "mod.forum.reaction_heart": "\u0421\u0435\u0440\u0434\u0446\u0435",
  "mod.forum.reaction_laugh": "\u0421\u043C\u0435\u0448\u043D\u043E",
  "mod.forum.reaction_like": "\u041D\u0440\u0430\u0432\u0438\u0442\u0441\u044F",
  "mod.forum.reaction_party": "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A",
  "mod.forum.reaction_sad": "\u0413\u0440\u0443\u0441\u0442\u043D\u043E",
  "mod.forum.reaction_wow": "\u041E\u0433\u043E",
  "mod.forum.reopen": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u043C\u0443",
  "mod.forum.replies": "\u041E\u0442\u0432\u0435\u0442\u044B",
  "mod.forum.reply": "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",
  "mod.forum.reply_placeholder": "\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442",
  "mod.forum.reply_to": "\u0432 \u043E\u0442\u0432\u0435\u0442 {author}",
  "mod.forum.save": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  "mod.forum.search": "\u041F\u043E\u0438\u0441\u043A",
  "mod.forum.search_empty": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C",
  "mod.forum.search_hint": "\u041C\u0438\u043D\u0438\u043C\u0443\u043C {count} \u0441\u0438\u043C\u0432\u043E\u043B\u0430",
  "mod.forum.search_placeholder": "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?",
  "mod.forum.search_posts": "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  "mod.forum.search_topics": "\u0422\u0435\u043C\u044B",
  "mod.forum.send": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
  "mod.forum.subnodes": "\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u044B",
  "mod.forum.title": "\u0424\u043E\u0440\u0443\u043C",
  "mod.forum.topic_content": "\u041F\u0435\u0440\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
  "mod.forum.topic_title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0442\u0435\u043C\u044B",
  "mod.forum.topics": "\u0422\u0435\u043C\u044B",
  "mod.forum.unpin": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
  "mod.forum.unread": "\u041D\u043E\u0432\u043E\u0435",
  "mod.forum.views": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B",
  "perm.group.mod.forum": "\u0424\u043E\u0440\u0443\u043C",
  "perm.mod.forum.edit_posts": "\u041F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0443\u0436\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  "perm.mod.forum.edit_posts.hint": "\u0411\u0435\u0437 \u043F\u0440\u0430\u0432\u0430 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u043E\u0436\u0435\u0442 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0443\u0436\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u043D\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C \u0435\u0433\u043E.",
  "perm.mod.forum.logs": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0436\u0443\u0440\u043D\u0430\u043B \u0444\u043E\u0440\u0443\u043C\u0430",
  "perm.mod.forum.logs.hint": "\u0420\u0430\u0437\u0434\u0435\u043B \xAB\u0424\u043E\u0440\u0443\u043C\xBB \u0432 \u0436\u0443\u0440\u043D\u0430\u043B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439: \u043F\u0440\u0430\u0432\u043A\u0438 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0447\u0443\u0436\u0438\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0438 \u0442\u0435\u043C.",
  "perm.mod.forum.manage": "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0444\u043E\u0440\u0443\u043C\u043E\u043C",
  "perm.mod.forum.manage.hint": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0444\u043E\u0440\u0443\u043C\u0430 \u0438 \u0432\u0441\u0451, \u0447\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440.",
  "perm.mod.forum.moderate": "\u041C\u043E\u0434\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u043E\u0440\u0443\u043C",
  "perm.mod.forum.moderate.hint": "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u0442\u044C, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C, \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0438 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435.",
  "perm.mod.forum.read": "\u0427\u0438\u0442\u0430\u0442\u044C \u0444\u043E\u0440\u0443\u043C",
  "perm.mod.forum.read.hint": "\u0411\u0435\u0437 \u043F\u0440\u0430\u0432\u0430 \u0444\u043E\u0440\u0443\u043C \u0437\u0430\u043A\u0440\u044B\u0442 \u0446\u0435\u043B\u0438\u043A\u043E\u043C. \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0432\u043E\u0451 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0447\u0442\u0435\u043D\u0438\u0435.",
  "perm.mod.forum.write": "\u041F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435",
  "perm.mod.forum.write.hint": "\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u044B \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u0432 \u043D\u0438\u0445."
};

// locales/en.json
var en_default = {
  "mod.forum.admin_content": "Contents",
  "mod.forum.admin_counters": "{topics} topics, {posts} posts",
  "mod.forum.admin_description": "Description",
  "mod.forum.admin_empty": "No sections yet",
  "mod.forum.admin_hidden": "Hidden from everyone but moderators",
  "mod.forum.admin_icon": "Icon",
  "mod.forum.admin_locked": "Closed for new topics",
  "mod.forum.admin_moderator_roles": "Section moderators",
  "mod.forum.admin_moderator_roles_hint": "Roles that moderate this section and everything nested in it.",
  "mod.forum.admin_node_edit": "Edit section",
  "mod.forum.admin_node_new": "New section",
  "mod.forum.admin_nodes": "Forum sections",
  "mod.forum.admin_parent": "Parent section",
  "mod.forum.admin_permission_hint": "Empty means anyone holding the general forum permission.",
  "mod.forum.admin_position": "Order",
  "mod.forum.admin_read_permission": "Read permission",
  "mod.forum.admin_removed": "Section removed",
  "mod.forum.admin_saved": "Section saved",
  "mod.forum.admin_slug": "Address",
  "mod.forum.admin_slug_hint": "Latin letters, digits and dashes: the section opens at this address.",
  "mod.forum.admin_state": "State",
  "mod.forum.admin_tag_hidden": "Hidden",
  "mod.forum.admin_tag_locked": "Closed",
  "mod.forum.admin_tag_open": "Open",
  "mod.forum.admin_title": "Title",
  "mod.forum.admin_write_hint": "To let players start topics and reply, grant the \xABPost on the forum\xBB permission to a role on the \xABRoles\xBB page.",
  "mod.forum.admin_write_permission": "Write permission",
  "mod.forum.audit_class": "Forum",
  "mod.forum.audit_post_delete": "Deleted someone else's post",
  "mod.forum.audit_post_edit": "Edited someone else's post",
  "mod.forum.audit_topic_close": "Closed or reopened a topic",
  "mod.forum.audit_topic_delete": "Deleted someone else's topic",
  "mod.forum.authors": "Members",
  "mod.forum.by_author": "By {author}",
  "mod.forum.cancel": "Cancel",
  "mod.forum.close": "Close topic",
  "mod.forum.closed": "Topic closed",
  "mod.forum.config_nav_order": "Menu position",
  "mod.forum.config_nav_order_hint": "The lower the number, the further left the item sits in the header.",
  "mod.forum.config_player_close": "Players may close their own topics",
  "mod.forum.config_player_close_hint": "Turn off to leave closing to moderators. An author can reopen a topic only if they closed it themselves.",
  "mod.forum.config_subtitle": "Subheading",
  "mod.forum.config_subtitle_hint": "A short line under the forum name.",
  "mod.forum.config_title": "Forum heading",
  "mod.forum.config_title_hint": "Shown on the forum page header and in the site menu.",
  "mod.forum.confirm": "Sure?",
  "mod.forum.delete": "Delete",
  "mod.forum.deleted_post": "Post deleted",
  "mod.forum.deleted_topic": "Topic deleted",
  "mod.forum.edit": "Edit",
  "mod.forum.edited": "edited {date}",
  "mod.forum.latest": "Latest topics",
  "mod.forum.leader_posts": "{count} posts",
  "mod.forum.leaders": "Community leaders",
  "mod.forum.locked": "Section is closed for new topics",
  "mod.forum.login_to_write": "Sign in to post on the forum",
  "mod.forum.mark_all_read": "Mark all read",
  "mod.forum.move": "Move",
  "mod.forum.move_to": "Move to",
  "mod.forum.new_topic": "New topic",
  "mod.forum.no_discussions": "No discussions",
  "mod.forum.no_sections": "No sections created yet",
  "mod.forum.no_topics": "No topics here yet",
  "mod.forum.no_write_access": "You may not post in this section",
  "mod.forum.notify_category": "Forum",
  "mod.forum.notify_category_hint": "Replies in your topics and to your posts.",
  "mod.forum.notify_reply": "New forum reply",
  "mod.forum.notify_reply_body": "{author} replied in \xAB{topic}\xBB",
  "mod.forum.page_of": "Page {page} of {total}",
  "mod.forum.pin": "Pin",
  "mod.forum.pinned": "Pinned",
  "mod.forum.posts": "Posts",
  "mod.forum.publish": "Publish",
  "mod.forum.react": "React",
  "mod.forum.reaction_dislike": "Dislike",
  "mod.forum.reaction_fire": "Fire",
  "mod.forum.reaction_heart": "Heart",
  "mod.forum.reaction_laugh": "Funny",
  "mod.forum.reaction_like": "Like",
  "mod.forum.reaction_party": "Party",
  "mod.forum.reaction_sad": "Sad",
  "mod.forum.reaction_wow": "Wow",
  "mod.forum.reopen": "Reopen topic",
  "mod.forum.replies": "Replies",
  "mod.forum.reply": "Reply",
  "mod.forum.reply_placeholder": "Your reply",
  "mod.forum.reply_to": "replying to {author}",
  "mod.forum.save": "Save",
  "mod.forum.search": "Search",
  "mod.forum.search_empty": "Nothing found",
  "mod.forum.search_hint": "At least {count} characters",
  "mod.forum.search_placeholder": "What are we looking for?",
  "mod.forum.search_posts": "Posts",
  "mod.forum.search_topics": "Topics",
  "mod.forum.send": "Send",
  "mod.forum.subnodes": "Subsections",
  "mod.forum.title": "Forum",
  "mod.forum.topic_content": "First post",
  "mod.forum.topic_title": "Topic title",
  "mod.forum.topics": "Topics",
  "mod.forum.unpin": "Unpin",
  "mod.forum.unread": "New",
  "mod.forum.views": "Views",
  "perm.group.mod.forum": "Forum",
  "perm.mod.forum.edit_posts": "Edit other people's posts",
  "perm.mod.forum.edit_posts.hint": "Without it a moderator can delete someone else's post but not rewrite it.",
  "perm.mod.forum.logs": "View the forum log",
  "perm.mod.forum.logs.hint": "The \xABForum\xBB section of the action log: edits and deletions of other people's posts and topics.",
  "perm.mod.forum.manage": "Manage the forum",
  "perm.mod.forum.manage.hint": "Forum sections plus everything a moderator can do.",
  "perm.mod.forum.moderate": "Moderate the forum",
  "perm.mod.forum.moderate.hint": "Pin, close, move and delete in any section.",
  "perm.mod.forum.read": "Read the forum",
  "perm.mod.forum.read.hint": "Without it the whole forum is closed. Individual sections can require their own read permission.",
  "perm.mod.forum.write": "Post on the forum",
  "perm.mod.forum.write.hint": "Create topics and reply to them."
};

// server-src/index.ts
var index_default = (0, import_server8.defineModule)({
  id: "forum",
  entities: [
    ForumNode,
    ForumTopic,
    ForumPost,
    ForumReaction,
    ForumRead,
    ForumWatermark
  ],
  nestModules: [
    ForumModule
  ],
  permissions: [
    {
      key: PERMISSION_READ,
      granted: true
    },
    {
      key: PERMISSION_WRITE,
      granted: true
    },
    {
      key: PERMISSION_MODERATE,
      danger: true
    },
    {
      key: PERMISSION_EDIT_POSTS,
      danger: true
    },
    {
      key: PERMISSION_MANAGE,
      danger: true
    },
    {
      key: PERMISSION_LOGS,
      danger: true
    }
  ],
  auditClasses: [
    {
      key: AUDIT_CLASS,
      labelKey: "mod.forum.audit_class",
      permission: PERMISSION_LOGS
    }
  ],
  auditActions: [
    {
      key: AUDIT_POST_EDIT,
      class: AUDIT_CLASS,
      labelKey: "mod.forum.audit_post_edit"
    },
    {
      key: AUDIT_POST_DELETE,
      class: AUDIT_CLASS,
      labelKey: "mod.forum.audit_post_delete"
    },
    {
      key: AUDIT_TOPIC_CLOSE,
      class: AUDIT_CLASS,
      labelKey: "mod.forum.audit_topic_close"
    },
    {
      key: AUDIT_TOPIC_DELETE,
      class: AUDIT_CLASS,
      labelKey: "mod.forum.audit_topic_delete"
    }
  ],
  config: [
    {
      key: "title",
      type: "string",
      default: "\u0424\u043E\u0440\u0443\u043C",
      public: true,
      label: "mod.forum.config_title",
      hint: "mod.forum.config_title_hint"
    },
    {
      key: "subtitle",
      type: "string",
      default: "\u041E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F, \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0447\u0430\u0442",
      public: true,
      label: "mod.forum.config_subtitle",
      hint: "mod.forum.config_subtitle_hint"
    },
    {
      key: SETTING_PLAYER_CLOSE,
      type: "boolean",
      default: true,
      label: "mod.forum.config_player_close",
      hint: "mod.forum.config_player_close_hint"
    },
    {
      key: "nav_order",
      type: "number",
      default: 20,
      min: 0,
      max: 1e3,
      public: true,
      label: "mod.forum.config_nav_order",
      hint: "mod.forum.config_nav_order_hint"
    }
  ],
  locales: {
    ru: ru_default,
    en: en_default
  },
  setup: /* @__PURE__ */ __name((context) => {
    context.core().notifications.registerCategory({
      id: CATEGORY,
      labelKey: "mod.forum.notify_category",
      hintKey: "mod.forum.notify_category_hint",
      icon: "bx bx-conversation"
    }, context.id);
    context.logger.log("\u0424\u043E\u0440\u0443\u043C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D");
  }, "setup")
});
//# sourceMappingURL=index.js.map