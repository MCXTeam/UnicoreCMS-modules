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
var import_server7 = require("unicore-api/server");

// server-src/entities/field.entity.ts
var import_typeorm2 = require("typeorm");
var import_server2 = require("unicore-api/server");

// server-src/entities/form.entity.ts
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
var _Form = class _Form {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "slug");
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "icon");
    __publicField(this, "enabled");
    __publicField(this, "in_nav");
    __publicField(this, "nav_order");
    __publicField(this, "auth_only");
    __publicField(this, "permission");
    __publicField(this, "once");
    __publicField(this, "cooldown_hours");
    __publicField(this, "max_total");
    __publicField(this, "open_from");
    __publicField(this, "open_to");
    __publicField(this, "closed_text");
    __publicField(this, "success_text");
    __publicField(this, "submit_label");
    __publicField(this, "notify_webhooks");
    __publicField(this, "notify_author");
    __publicField(this, "fields");
    __publicField(this, "created_at");
    __publicField(this, "updated_at");
  }
};
__name(_Form, "Form");
var Form = _Form;
_ts_decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata("design:type", Number)
], Form.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "slug",
    length: 48,
    unique: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "slug", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "title",
    length: 120
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "title", void 0);
_ts_decorate([
  (0, import_typeorm.Column)("text", {
    name: "description",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "description", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "icon",
    length: 64,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "icon", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "enabled",
    default: true
  }),
  _ts_metadata("design:type", Boolean)
], Form.prototype, "enabled", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "in_nav",
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], Form.prototype, "in_nav", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "nav_order",
    default: 100
  }),
  _ts_metadata("design:type", Number)
], Form.prototype, "nav_order", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "auth_only",
    default: true
  }),
  _ts_metadata("design:type", Boolean)
], Form.prototype, "auth_only", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "permission",
    length: 64,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "permission", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "once",
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], Form.prototype, "once", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "cooldown_hours",
    default: 0
  }),
  _ts_metadata("design:type", Number)
], Form.prototype, "cooldown_hours", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "max_total",
    default: 0
  }),
  _ts_metadata("design:type", Number)
], Form.prototype, "max_total", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "open_from",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Form.prototype, "open_from", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "open_to",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Form.prototype, "open_to", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "closed_text",
    length: 255,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "closed_text", void 0);
_ts_decorate([
  (0, import_typeorm.Column)("text", {
    name: "success_text",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "success_text", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "submit_label",
    length: 64,
    nullable: true
  }),
  _ts_metadata("design:type", String)
], Form.prototype, "submit_label", void 0);
_ts_decorate([
  (0, import_typeorm.Column)("simple-array", {
    name: "notify_webhooks",
    nullable: true
  }),
  _ts_metadata("design:type", Array)
], Form.prototype, "notify_webhooks", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    name: "notify_author",
    default: true
  }),
  _ts_metadata("design:type", Boolean)
], Form.prototype, "notify_author", void 0);
_ts_decorate([
  (0, import_typeorm.OneToMany)(() => FormField, (field) => field.form, {
    cascade: true
  }),
  _ts_metadata("design:type", Array)
], Form.prototype, "fields", void 0);
_ts_decorate([
  (0, import_typeorm.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Form.prototype, "created_at", void 0);
_ts_decorate([
  (0, import_typeorm.UpdateDateColumn)({
    name: "updated_at"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Form.prototype, "updated_at", void 0);
Form = _ts_decorate([
  (0, import_server.Translatable)("mod.forms.form", [
    "title",
    "description",
    "success_text",
    "submit_label",
    "closed_text"
  ], {
    read: [
      "mod.forms.read"
    ],
    write: [
      "mod.forms.write"
    ]
  }),
  (0, import_typeorm.Entity)({
    name: "mod_forms_forms"
  })
], Form);

// server-src/entities/field.entity.ts
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
var _FormField = class _FormField {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "form");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "label");
    __publicField(this, "hint");
    __publicField(this, "placeholder");
    __publicField(this, "required");
    __publicField(this, "half");
    __publicField(this, "position");
    __publicField(this, "options");
    __publicField(this, "settings");
    __publicField(this, "visible_if");
  }
};
__name(_FormField, "FormField");
var FormField = _FormField;
_ts_decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata2("design:type", Number)
], FormField.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm2.ManyToOne)(() => Form, (form) => form.fields, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({
    name: "form_id"
  }),
  _ts_metadata2("design:type", typeof Form === "undefined" ? Object : Form)
], FormField.prototype, "form", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "field_key",
    length: 48
  }),
  _ts_metadata2("design:type", String)
], FormField.prototype, "key", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "type",
    length: 24
  }),
  _ts_metadata2("design:type", String)
], FormField.prototype, "type", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "label",
    length: 160
  }),
  _ts_metadata2("design:type", String)
], FormField.prototype, "label", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "hint",
    length: 255,
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], FormField.prototype, "hint", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "placeholder",
    length: 120,
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], FormField.prototype, "placeholder", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "required",
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], FormField.prototype, "required", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "half",
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], FormField.prototype, "half", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    name: "position",
    default: 0
  }),
  _ts_metadata2("design:type", Number)
], FormField.prototype, "position", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)("simple-json", {
    name: "options",
    nullable: true
  }),
  _ts_metadata2("design:type", Array)
], FormField.prototype, "options", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)("simple-json", {
    name: "settings",
    nullable: true
  }),
  _ts_metadata2("design:type", typeof FieldSettings === "undefined" ? Object : FieldSettings)
], FormField.prototype, "settings", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)("simple-json", {
    name: "visible_if",
    nullable: true
  }),
  _ts_metadata2("design:type", typeof FieldCondition === "undefined" ? Object : FieldCondition)
], FormField.prototype, "visible_if", void 0);
FormField = _ts_decorate2([
  (0, import_server2.Translatable)("mod.forms.field", [
    "label",
    "hint",
    "placeholder",
    "options.*.label"
  ], {
    read: [
      "mod.forms.read"
    ],
    write: [
      "mod.forms.write"
    ]
  }),
  (0, import_typeorm2.Entity)({
    name: "mod_forms_fields"
  })
], FormField);

// server-src/entities/submission.entity.ts
var import_typeorm3 = require("typeorm");

// shared/constants.ts
var FIELD_TYPES = [
  {
    type: "text",
    label: "mod.forms.type_text",
    icon: "pi pi-pencil",
    input: true,
    options: false,
    multi: false,
    settings: [
      "min_length",
      "max_length",
      "pattern"
    ]
  },
  {
    type: "textarea",
    label: "mod.forms.type_textarea",
    icon: "pi pi-align-left",
    input: true,
    options: false,
    multi: false,
    settings: [
      "min_length",
      "max_length",
      "rows"
    ]
  },
  {
    type: "number",
    label: "mod.forms.type_number",
    icon: "pi pi-hashtag",
    input: true,
    options: false,
    multi: false,
    settings: [
      "min",
      "max",
      "step"
    ]
  },
  {
    type: "email",
    label: "mod.forms.type_email",
    icon: "pi pi-envelope",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "url",
    label: "mod.forms.type_url",
    icon: "pi pi-link",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "select",
    label: "mod.forms.type_select",
    icon: "pi pi-chevron-down",
    input: true,
    options: true,
    multi: false,
    settings: []
  },
  {
    type: "multiselect",
    label: "mod.forms.type_multiselect",
    icon: "pi pi-list",
    input: true,
    options: true,
    multi: true,
    settings: [
      "min",
      "max"
    ]
  },
  {
    type: "radio",
    label: "mod.forms.type_radio",
    icon: "pi pi-circle",
    input: true,
    options: true,
    multi: false,
    settings: []
  },
  {
    type: "checkboxes",
    label: "mod.forms.type_checkboxes",
    icon: "pi pi-check-square",
    input: true,
    options: true,
    multi: true,
    settings: [
      "min",
      "max"
    ]
  },
  {
    type: "checkbox",
    label: "mod.forms.type_checkbox",
    icon: "pi pi-check",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "switch",
    label: "mod.forms.type_switch",
    icon: "pi pi-power-off",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "date",
    label: "mod.forms.type_date",
    icon: "pi pi-calendar",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "slider",
    label: "mod.forms.type_slider",
    icon: "pi pi-sliders-h",
    input: true,
    options: false,
    multi: false,
    settings: [
      "min",
      "max",
      "step"
    ]
  },
  {
    type: "rating",
    label: "mod.forms.type_rating",
    icon: "pi pi-star",
    input: true,
    options: false,
    multi: false,
    settings: [
      "stars"
    ]
  },
  {
    type: "server",
    label: "mod.forms.type_server",
    icon: "pi pi-server",
    input: true,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "file",
    label: "mod.forms.type_file",
    icon: "pi pi-paperclip",
    input: true,
    options: false,
    multi: false,
    settings: [
      "accept",
      "max_size"
    ]
  },
  {
    type: "heading",
    label: "mod.forms.type_heading",
    icon: "pi pi-bookmark",
    input: false,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "paragraph",
    label: "mod.forms.type_paragraph",
    icon: "pi pi-comment",
    input: false,
    options: false,
    multi: false,
    settings: []
  },
  {
    type: "divider",
    label: "mod.forms.type_divider",
    icon: "pi pi-minus",
    input: false,
    options: false,
    multi: false,
    settings: []
  }
];
var fieldType = /* @__PURE__ */ __name((type) => FIELD_TYPES.find((item) => item.type === type) || FIELD_TYPES[0], "fieldType");
var LEGACY_NEW_STATUS = "new";
var DEFAULT_SUBMISSION_STATUS = "review";
var SUBMISSION_STATUSES = [
  {
    value: "review",
    label: "mod.forms.status_review",
    severity: "warn",
    icon: "pi pi-eye"
  },
  {
    value: "accepted",
    label: "mod.forms.status_accepted",
    severity: "success",
    icon: "pi pi-check"
  },
  {
    value: "rejected",
    label: "mod.forms.status_rejected",
    severity: "danger",
    icon: "pi pi-times"
  }
];
var RESERVED_SLUGS = [
  "nav",
  "my",
  "manage"
];
var GUEST_NAME = "__username";
var GUEST_EMAIL = "__email";
var FIELD_KEY_PATTERN = /^[a-z][a-z0-9_]{0,47}$/;
var FORM_SLUG_PATTERN = /^[a-z0-9][a-z0-9-]{1,47}$/;
var DEFAULT_MAX_SIZE_MB = 8;
var UPLOADS_PER_HOUR = 10;
var OPTION_LABEL_LIMIT = 120;
var isEmptyAnswer = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) return true;
  if (Array.isArray(value)) return !value.length;
  if (typeof value === "string") return !value.trim();
  if (typeof value === "boolean") return !value;
  return false;
}, "isEmptyAnswer");
var conditionMet = /* @__PURE__ */ __name((condition, answers) => {
  if (!condition || !condition.field) return true;
  const value = answers[condition.field];
  const expected = condition.value ?? "";
  switch (condition.op) {
    case "filled":
      return !isEmptyAnswer(value);
    case "empty":
      return isEmptyAnswer(value);
    case "ne":
      return String(value ?? "") !== expected;
    case "contains":
      return Array.isArray(value) ? value.map(String).includes(expected) : String(value ?? "").includes(expected);
    case "gt":
      return Number(value) > Number(expected);
    case "lt":
      return Number(value) < Number(expected);
    default:
      return String(value ?? "") === expected;
  }
}, "conditionMet");
var visibleFields = /* @__PURE__ */ __name((fields, answers) => fields.filter((field) => conditionMet(field.visible_if, answers)), "visibleFields");
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var answerError = /* @__PURE__ */ __name((field, value) => {
  const info = fieldType(field.type);
  if (!info.input) return null;
  const settings = field.settings || {};
  const empty = isEmptyAnswer(value);
  if (field.required && empty) return "mod.forms.error_required";
  if (empty) return null;
  if (info.options) {
    const allowed = (field.options || []).map((option) => option.value);
    const picked = Array.isArray(value) ? value.map(String) : [
      String(value)
    ];
    if (picked.some((item) => !allowed.includes(item))) return "mod.forms.error_option";
  }
  if (info.multi) {
    const count = Array.isArray(value) ? value.length : 0;
    if (settings.min && count < settings.min) return "mod.forms.error_pick_min";
    if (settings.max && count > settings.max) return "mod.forms.error_pick_max";
  }
  if (field.type === "email" && !EMAIL_PATTERN.test(String(value))) return "mod.forms.error_email";
  if (field.type === "url" && !/^https?:\/\/\S+$/i.test(String(value))) return "mod.forms.error_url";
  if ([
    "text",
    "textarea"
  ].includes(field.type)) {
    const text = String(value);
    if (settings.min_length && text.length < settings.min_length) return "mod.forms.error_min_length";
    if (settings.max_length && text.length > settings.max_length) return "mod.forms.error_max_length";
    if (settings.pattern) {
      try {
        if (!new RegExp(settings.pattern).test(text)) return "mod.forms.error_pattern";
      } catch {
        return null;
      }
    }
  }
  if ([
    "number",
    "slider",
    "rating"
  ].includes(field.type)) {
    const number = Number(value);
    if (Number.isNaN(number)) return "mod.forms.error_number";
    if (settings.min !== void 0 && settings.min !== null && number < settings.min) return "mod.forms.error_min";
    if (settings.max !== void 0 && settings.max !== null && number > settings.max) return "mod.forms.error_max";
  }
  return null;
}, "answerError");

// server-src/entities/submission.entity.ts
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
var _FormSubmission = class _FormSubmission {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "form");
    __publicField(this, "user_uuid");
    __publicField(this, "username");
    __publicField(this, "email");
    __publicField(this, "ip");
    __publicField(this, "answers");
    __publicField(this, "status");
    __publicField(this, "comment");
    __publicField(this, "reviewer_uuid");
    __publicField(this, "reviewed_at");
    __publicField(this, "created_at");
  }
};
__name(_FormSubmission, "FormSubmission");
var FormSubmission = _FormSubmission;
_ts_decorate3([
  (0, import_typeorm3.PrimaryGeneratedColumn)({
    name: "id"
  }),
  _ts_metadata3("design:type", Number)
], FormSubmission.prototype, "id", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => Form, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "form_id"
  }),
  _ts_metadata3("design:type", typeof Form === "undefined" ? Object : Form)
], FormSubmission.prototype, "form", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "user_uuid",
    length: 36,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "user_uuid", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "username",
    length: 32,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "username", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "email",
    length: 120,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "email", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "ip",
    length: 45,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "ip", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)("simple-json", {
    name: "answers"
  }),
  _ts_metadata3("design:type", Array)
], FormSubmission.prototype, "answers", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "status",
    length: 16,
    default: DEFAULT_SUBMISSION_STATUS
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "status", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)("text", {
    name: "comment",
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "comment", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "reviewer_uuid",
    length: 36,
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], FormSubmission.prototype, "reviewer_uuid", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    name: "reviewed_at",
    type: "datetime",
    nullable: true
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], FormSubmission.prototype, "reviewed_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.CreateDateColumn)({
    name: "created_at"
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], FormSubmission.prototype, "created_at", void 0);
FormSubmission = _ts_decorate3([
  (0, import_typeorm3.Entity)({
    name: "mod_forms_submissions"
  })
], FormSubmission);

// server-src/forms.module.ts
var import_common5 = require("@nestjs/common");
var import_typeorm6 = require("@nestjs/typeorm");

// server-src/forms-admin.controller.ts
var import_common2 = require("@nestjs/common");
var import_server4 = require("unicore-api/server");

// shared/presets.ts
var FORM_PRESETS = [
  {
    id: "staff",
    name: "mod.forms.preset_staff",
    summary: "mod.forms.preset_staff_summary",
    icon: "bx bx-user-plus",
    admin_icon: "pi pi-user-plus",
    slug: "staff",
    title: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443",
    description: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0435\u0431\u0435 \u2014 \u0437\u0430\u044F\u0432\u043A\u0443 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435.",
    submit_label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
    success_text: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430. \u041E\u0442\u0432\u0435\u0442 \u043F\u0440\u0438\u0434\u0451\u0442 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438\xBB.",
    auth_only: true,
    once: false,
    cooldown_hours: 720,
    fields: [
      {
        key: "age",
        type: "number",
        label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
        required: true,
        half: true,
        settings: {
          min: 12,
          max: 80
        }
      },
      {
        key: "timezone",
        type: "text",
        label: "\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441",
        placeholder: "\u041C\u0421\u041A+2",
        half: true,
        settings: {
          max_length: 32
        }
      },
      {
        key: "server",
        type: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        hint: "\u0421\u0435\u0440\u0432\u0435\u0440, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043C\u043E\u0433\u0430\u0442\u044C.",
        required: true,
        half: true
      },
      {
        key: "role",
        type: "select",
        label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
        required: true,
        half: true,
        options: [
          {
            value: "helper",
            label: "\u0425\u0435\u043B\u043F\u0435\u0440"
          },
          {
            value: "moder",
            label: "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440"
          },
          {
            value: "builder",
            label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C"
          },
          {
            value: "dev",
            label: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A"
          }
        ]
      },
      {
        key: "hours",
        type: "slider",
        label: "\u0427\u0430\u0441\u043E\u0432 \u0432 \u0438\u0433\u0440\u0435 \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E",
        required: true,
        settings: {
          min: 1,
          max: 40,
          step: 1
        }
      },
      {
        key: "contact",
        type: "text",
        label: "Discord",
        hint: "\u041D\u0438\u043A \u0432 Discord \u2014 \u043F\u043E \u043D\u0435\u043C\u0443 \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F.",
        required: true,
        half: true,
        settings: {
          max_length: 64
        }
      },
      {
        key: "experience",
        type: "textarea",
        label: "\u041E\u043F\u044B\u0442",
        hint: "\u0413\u0434\u0435 \u0438 \u043A\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0440\u0430\u043D\u044C\u0448\u0435, \u0435\u0441\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438.",
        settings: {
          max_length: 1500,
          rows: 4
        }
      },
      {
        key: "about",
        type: "textarea",
        label: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B",
        hint: "\u0427\u0435\u043C \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u0435.",
        required: true,
        settings: {
          min_length: 80,
          max_length: 2e3,
          rows: 5
        }
      },
      {
        key: "rules",
        type: "checkbox",
        label: "\u042F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
        required: true
      }
    ]
  },
  {
    id: "feedback",
    name: "mod.forms.preset_feedback",
    summary: "mod.forms.preset_feedback_summary",
    icon: "bx bx-message-dots",
    admin_icon: "pi pi-comments",
    slug: "feedback",
    title: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C",
    description: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043E \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u0438 \u0447\u0435\u0433\u043E \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442.",
    submit_label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    success_text: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E.",
    auth_only: false,
    once: false,
    cooldown_hours: 1,
    fields: [
      {
        key: "topic",
        type: "select",
        label: "\u0422\u0435\u043C\u0430",
        required: true,
        options: [
          {
            value: "idea",
            label: "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
          },
          {
            value: "problem",
            label: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430"
          },
          {
            value: "payment",
            label: "\u041E\u043F\u043B\u0430\u0442\u0430"
          },
          {
            value: "other",
            label: "\u0414\u0440\u0443\u0433\u043E\u0435"
          }
        ]
      },
      {
        key: "message",
        type: "textarea",
        label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
        required: true,
        settings: {
          min_length: 20,
          max_length: 3e3,
          rows: 6
        }
      },
      {
        key: "rating",
        type: "rating",
        label: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
        settings: {
          stars: 5
        }
      }
    ]
  },
  {
    id: "bug",
    name: "mod.forms.preset_bug",
    summary: "mod.forms.preset_bug_summary",
    icon: "bx bx-bug",
    admin_icon: "pi pi-wrench",
    slug: "bug",
    title: "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u0431\u0430\u0433\u0435",
    description: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u043B\u043E\u043C\u043A\u0443 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.",
    submit_label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0431\u0430\u0433",
    success_text: "\u0411\u0430\u0433 \u0437\u0430\u043F\u0438\u0441\u0430\u043D. \u0415\u0441\u043B\u0438 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u044F\u0442\u0441\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438, \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F.",
    auth_only: true,
    once: false,
    cooldown_hours: 0,
    fields: [
      {
        key: "server",
        type: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        required: true,
        half: true
      },
      {
        key: "severity",
        type: "select",
        label: "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0448\u0430\u0435\u0442",
        required: true,
        half: true,
        options: [
          {
            value: "low",
            label: "\u041C\u0435\u043B\u043E\u0447\u044C"
          },
          {
            value: "medium",
            label: "\u041C\u0435\u0448\u0430\u0435\u0442 \u0438\u0433\u0440\u0430\u0442\u044C"
          },
          {
            value: "high",
            label: "\u0418\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E"
          }
        ]
      },
      {
        key: "what",
        type: "textarea",
        label: "\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E",
        required: true,
        settings: {
          min_length: 20,
          max_length: 2e3,
          rows: 4
        }
      },
      {
        key: "steps",
        type: "textarea",
        label: "\u041A\u0430\u043A \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
        hint: "\u041F\u043E \u0448\u0430\u0433\u0430\u043C: \u0447\u0442\u043E \u043D\u0430\u0436\u0430\u043B\u0438, \u043A\u0443\u0434\u0430 \u043F\u0440\u0438\u0448\u043B\u0438, \u0447\u0442\u043E \u0443\u0432\u0438\u0434\u0435\u043B\u0438.",
        required: true,
        settings: {
          max_length: 2e3,
          rows: 4
        }
      },
      {
        key: "screenshot",
        type: "file",
        label: "\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442",
        settings: {
          accept: "image/*",
          max_size: 8
        }
      }
    ]
  },
  {
    id: "complaint",
    name: "mod.forms.preset_complaint",
    summary: "mod.forms.preset_complaint_summary",
    icon: "bx bx-shield-x",
    admin_icon: "pi pi-flag",
    slug: "complaint",
    title: "\u0416\u0430\u043B\u043E\u0431\u0430 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0430",
    description: "\u0411\u0435\u0437 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0436\u0430\u043B\u043E\u0431\u0443 \u043D\u0435 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u044F\u0442 \u2014 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C.",
    submit_label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0436\u0430\u043B\u043E\u0431\u0443",
    success_text: "\u0416\u0430\u043B\u043E\u0431\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430, \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0434\u0451\u0442 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438\xBB.",
    auth_only: true,
    once: false,
    cooldown_hours: 0,
    fields: [
      {
        key: "nickname",
        type: "text",
        label: "\u041D\u0438\u043A \u043D\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u044F",
        required: true,
        half: true,
        settings: {
          max_length: 32
        }
      },
      {
        key: "server",
        type: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        required: true,
        half: true
      },
      {
        key: "rule",
        type: "select",
        label: "\u0427\u0442\u043E \u043D\u0430\u0440\u0443\u0448\u0438\u043B",
        required: true,
        options: [
          {
            value: "cheats",
            label: "\u0427\u0438\u0442\u044B"
          },
          {
            value: "grief",
            label: "\u0413\u0440\u0438\u0444\u0435\u0440\u0441\u0442\u0432\u043E"
          },
          {
            value: "chat",
            label: "\u041E\u0441\u043A\u043E\u0440\u0431\u043B\u0435\u043D\u0438\u044F \u0432 \u0447\u0430\u0442\u0435"
          },
          {
            value: "scam",
            label: "\u041E\u0431\u043C\u0430\u043D \u043F\u0440\u0438 \u043E\u0431\u043C\u0435\u043D\u0435"
          },
          {
            value: "other",
            label: "\u0414\u0440\u0443\u0433\u043E\u0435"
          }
        ]
      },
      {
        key: "when",
        type: "date",
        label: "\u041A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u0431\u044B\u043B\u043E",
        required: true,
        half: true
      },
      {
        key: "proof_link",
        type: "url",
        label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C",
        hint: "YouTube, Google \u0414\u0438\u0441\u043A \u2014 \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E, \u043B\u0438\u0448\u044C \u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043B\u043E\u0441\u044C.",
        half: true
      },
      {
        key: "proof_file",
        type: "file",
        label: "\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442",
        settings: {
          accept: "image/*",
          max_size: 8
        }
      },
      {
        key: "details",
        type: "textarea",
        label: "\u0427\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C",
        required: true,
        settings: {
          min_length: 30,
          max_length: 2e3,
          rows: 4
        }
      }
    ]
  },
  {
    id: "unban",
    name: "mod.forms.preset_unban",
    summary: "mod.forms.preset_unban_summary",
    icon: "bx bx-lock-open",
    admin_icon: "pi pi-unlock",
    slug: "unban",
    title: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0440\u0430\u0437\u0431\u0430\u043D",
    description: "\u041E\u0434\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0430. \u041F\u043E\u043A\u0430 \u0435\u0451 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u044E\u0442, \u043D\u043E\u0432\u0443\u044E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F.",
    submit_label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
    success_text: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438, \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0434\u0451\u0442 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438\xBB.",
    auth_only: true,
    once: true,
    cooldown_hours: 0,
    fields: [
      {
        key: "nickname",
        type: "text",
        label: "\u041D\u0438\u043A \u0432 \u0438\u0433\u0440\u0435",
        required: true,
        half: true,
        settings: {
          max_length: 32
        }
      },
      {
        key: "server",
        type: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        required: true,
        half: true
      },
      {
        key: "reason",
        type: "textarea",
        label: "\u0417\u0430 \u0447\u0442\u043E \u0437\u0430\u0431\u0430\u043D\u0438\u043B\u0438",
        required: true,
        settings: {
          max_length: 1e3,
          rows: 3
        }
      },
      {
        key: "guilty",
        type: "switch",
        label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0431\u0430\u043D\u043E\u043C"
      },
      {
        key: "why",
        type: "textarea",
        label: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u0440\u0430\u0437\u0431\u0430\u043D\u0438\u0442\u044C",
        required: true,
        settings: {
          min_length: 50,
          max_length: 2e3,
          rows: 5
        }
      },
      {
        key: "rules",
        type: "checkbox",
        label: "\u041E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430",
        required: true
      }
    ]
  }
];
var presetById = /* @__PURE__ */ __name((id) => FORM_PRESETS.find((item) => item.id === id), "presetById");

// server-src/dto/form.input.ts
var import_class_transformer2 = require("class-transformer");
var import_class_validator2 = require("class-validator");

// server-src/dto/field.input.ts
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
var _FieldOptionInput = class _FieldOptionInput {
  constructor() {
    __publicField(this, "value");
    __publicField(this, "label");
  }
};
__name(_FieldOptionInput, "FieldOptionInput");
var FieldOptionInput = _FieldOptionInput;
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(OPTION_LABEL_LIMIT),
  _ts_metadata4("design:type", String)
], FieldOptionInput.prototype, "value", void 0);
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(OPTION_LABEL_LIMIT),
  _ts_metadata4("design:type", String)
], FieldOptionInput.prototype, "label", void 0);
var _FieldConditionInput = class _FieldConditionInput {
  constructor() {
    __publicField(this, "field");
    __publicField(this, "op");
    __publicField(this, "value");
  }
};
__name(_FieldConditionInput, "FieldConditionInput");
var FieldConditionInput = _FieldConditionInput;
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(48),
  _ts_metadata4("design:type", String)
], FieldConditionInput.prototype, "field", void 0);
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(16),
  _ts_metadata4("design:type", String)
], FieldConditionInput.prototype, "op", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(120),
  _ts_metadata4("design:type", String)
], FieldConditionInput.prototype, "value", void 0);
var _FieldInput = class _FieldInput {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "label");
    __publicField(this, "hint");
    __publicField(this, "placeholder");
    __publicField(this, "required");
    __publicField(this, "half");
    __publicField(this, "options");
    __publicField(this, "settings");
    __publicField(this, "visible_if");
  }
};
__name(_FieldInput, "FieldInput");
var FieldInput = _FieldInput;
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsInt)(),
  _ts_metadata4("design:type", Number)
], FieldInput.prototype, "id", void 0);
_ts_decorate4([
  (0, import_class_validator.Matches)(FIELD_KEY_PATTERN),
  _ts_metadata4("design:type", String)
], FieldInput.prototype, "key", void 0);
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(24),
  _ts_metadata4("design:type", String)
], FieldInput.prototype, "type", void 0);
_ts_decorate4([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(160),
  _ts_metadata4("design:type", String)
], FieldInput.prototype, "label", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(255),
  _ts_metadata4("design:type", String)
], FieldInput.prototype, "hint", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.MaxLength)(120),
  _ts_metadata4("design:type", String)
], FieldInput.prototype, "placeholder", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsBoolean)(),
  _ts_metadata4("design:type", Boolean)
], FieldInput.prototype, "required", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsBoolean)(),
  _ts_metadata4("design:type", Boolean)
], FieldInput.prototype, "half", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.ValidateNested)({
    each: true
  }),
  (0, import_class_transformer.Type)(() => FieldOptionInput),
  _ts_metadata4("design:type", Array)
], FieldInput.prototype, "options", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsObject)(),
  _ts_metadata4("design:type", typeof Record === "undefined" ? Object : Record)
], FieldInput.prototype, "settings", void 0);
_ts_decorate4([
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.ValidateNested)(),
  (0, import_class_transformer.Type)(() => FieldConditionInput),
  _ts_metadata4("design:type", typeof FieldConditionInput === "undefined" ? Object : FieldConditionInput)
], FieldInput.prototype, "visible_if", void 0);

// server-src/dto/form.input.ts
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
var HOURS_MAX = 8760;
var TOTAL_MAX = 1e6;
var _FormInput = class _FormInput {
  constructor() {
    __publicField(this, "slug");
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "icon");
    __publicField(this, "enabled");
    __publicField(this, "in_nav");
    __publicField(this, "nav_order");
    __publicField(this, "auth_only");
    __publicField(this, "permission");
    __publicField(this, "once");
    __publicField(this, "cooldown_hours");
    __publicField(this, "max_total");
    __publicField(this, "open_from");
    __publicField(this, "open_to");
    __publicField(this, "closed_text");
    __publicField(this, "success_text");
    __publicField(this, "submit_label");
    __publicField(this, "notify_webhooks");
    __publicField(this, "notify_author");
    __publicField(this, "fields");
  }
};
__name(_FormInput, "FormInput");
var FormInput = _FormInput;
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.Matches)(FORM_SLUG_PATTERN),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "slug", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(120),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "title", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(2e3),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "description", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(64),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "icon", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata5("design:type", Boolean)
], FormInput.prototype, "enabled", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata5("design:type", Boolean)
], FormInput.prototype, "in_nav", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsInt)(),
  (0, import_class_validator2.Min)(0),
  (0, import_class_validator2.Max)(999),
  _ts_metadata5("design:type", Number)
], FormInput.prototype, "nav_order", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata5("design:type", Boolean)
], FormInput.prototype, "auth_only", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(64),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "permission", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata5("design:type", Boolean)
], FormInput.prototype, "once", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsInt)(),
  (0, import_class_validator2.Min)(0),
  (0, import_class_validator2.Max)(HOURS_MAX),
  _ts_metadata5("design:type", Number)
], FormInput.prototype, "cooldown_hours", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsInt)(),
  (0, import_class_validator2.Min)(0),
  (0, import_class_validator2.Max)(TOTAL_MAX),
  _ts_metadata5("design:type", Number)
], FormInput.prototype, "max_total", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsDate)(),
  (0, import_class_transformer2.Type)(() => Date),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], FormInput.prototype, "open_from", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsDate)(),
  (0, import_class_transformer2.Type)(() => Date),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], FormInput.prototype, "open_to", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(255),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "closed_text", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(2e3),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "success_text", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(64),
  _ts_metadata5("design:type", String)
], FormInput.prototype, "submit_label", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsArray)(),
  (0, import_class_validator2.IsString)({
    each: true
  }),
  _ts_metadata5("design:type", Array)
], FormInput.prototype, "notify_webhooks", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata5("design:type", Boolean)
], FormInput.prototype, "notify_author", void 0);
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsArray)(),
  (0, import_class_validator2.ValidateNested)({
    each: true
  }),
  (0, import_class_transformer2.Type)(() => FieldInput),
  _ts_metadata5("design:type", Array)
], FormInput.prototype, "fields", void 0);
var _FormCreateInput = class _FormCreateInput extends FormInput {
  constructor() {
    super(...arguments);
    __publicField(this, "preset");
  }
};
__name(_FormCreateInput, "FormCreateInput");
var FormCreateInput = _FormCreateInput;
_ts_decorate5([
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.MaxLength)(32),
  _ts_metadata5("design:type", String)
], FormCreateInput.prototype, "preset", void 0);

// server-src/dto/submit.input.ts
var import_class_validator3 = require("class-validator");
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
var _SubmitInput = class _SubmitInput {
  constructor() {
    __publicField(this, "answers");
    __publicField(this, "username");
    __publicField(this, "email");
  }
};
__name(_SubmitInput, "SubmitInput");
var SubmitInput = _SubmitInput;
_ts_decorate6([
  (0, import_class_validator3.IsObject)(),
  _ts_metadata6("design:type", typeof Record === "undefined" ? Object : Record)
], SubmitInput.prototype, "answers", void 0);
_ts_decorate6([
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.MaxLength)(32),
  _ts_metadata6("design:type", String)
], SubmitInput.prototype, "username", void 0);
_ts_decorate6([
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.MaxLength)(120),
  _ts_metadata6("design:type", String)
], SubmitInput.prototype, "email", void 0);
var _ReviewInput = class _ReviewInput {
  constructor() {
    __publicField(this, "status");
    __publicField(this, "comment");
  }
};
__name(_ReviewInput, "ReviewInput");
var ReviewInput = _ReviewInput;
_ts_decorate6([
  (0, import_class_validator3.IsIn)(SUBMISSION_STATUSES.map((item) => item.value)),
  _ts_metadata6("design:type", String)
], ReviewInput.prototype, "status", void 0);
_ts_decorate6([
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.MaxLength)(2e3),
  _ts_metadata6("design:type", String)
], ReviewInput.prototype, "comment", void 0);

// server-src/forms.service.ts
var import_common = require("@nestjs/common");
var import_typeorm4 = require("@nestjs/typeorm");
var import_typeorm5 = require("typeorm");
var import_server3 = require("unicore-api/server");
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
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var HOUR = 60 * 60 * 1e3;
var EMAIL_PATTERN2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var DAY = 24 * HOUR;
var INBOX_PAGE = 25;
var _FormsService = class _FormsService {
  constructor(forms, fields, submissions) {
    __publicField(this, "forms");
    __publicField(this, "fields");
    __publicField(this, "submissions");
    this.forms = forms;
    this.fields = fields;
    this.submissions = submissions;
  }
  async list() {
    const forms = await this.forms.find({
      order: {
        nav_order: "ASC",
        id: "ASC"
      }
    });
    if (!forms.length) return [];
    const counts = await this.submissions.createQueryBuilder("s").leftJoin("s.form", "form").select("form.id", "form").addSelect("COUNT(s.id)", "total").addSelect(`SUM(CASE WHEN s.status IN ('${LEGACY_NEW_STATUS}', '${DEFAULT_SUBMISSION_STATUS}') THEN 1 ELSE 0 END)`, "fresh").groupBy("form.id").getRawMany();
    const byId = new Map(counts.map((row) => [
      Number(row.form),
      {
        total: Number(row.total),
        fresh: Number(row.fresh)
      }
    ]));
    return forms.map((form) => ({
      ...form,
      total: byId.get(form.id)?.total || 0,
      fresh: byId.get(form.id)?.fresh || 0
    }));
  }
  async one(id) {
    const form = await this.forms.findOne({
      where: {
        id
      },
      relations: [
        "fields"
      ]
    });
    if (!form) throw new import_common.NotFoundException();
    form.fields = this.sorted(form.fields);
    return form;
  }
  async create(input) {
    const preset = input.preset ? presetById(input.preset) : null;
    const source = preset ? {
      slug: input.slug || preset.slug,
      title: input.title || preset.title,
      description: preset.description,
      icon: input.icon || preset.icon,
      submit_label: preset.submit_label,
      success_text: preset.success_text,
      auth_only: preset.auth_only,
      once: preset.once,
      cooldown_hours: preset.cooldown_hours,
      fields: preset.fields
    } : input;
    if (!source.title) throw new import_common.BadRequestException("\u0424\u043E\u0440\u043C\u0435 \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    const form = this.forms.create({
      slug: await this.freeSlug(source.slug || "form"),
      title: source.title,
      description: source.description || null,
      icon: source.icon || null,
      enabled: false,
      submit_label: source.submit_label || null,
      success_text: source.success_text || null,
      auth_only: source.auth_only ?? true,
      once: source.once ?? false,
      cooldown_hours: source.cooldown_hours ?? 0
    });
    await this.forms.save(form);
    if (source.fields?.length) await this.syncFields(form, source.fields);
    return this.one(form.id);
  }
  async update(id, input) {
    const form = await this.one(id);
    if (input.slug && input.slug !== form.slug) form.slug = await this.freeSlug(input.slug, form.id);
    for (const key of [
      "title",
      "description",
      "icon",
      "enabled",
      "in_nav",
      "nav_order",
      "auth_only",
      "permission",
      "once",
      "cooldown_hours",
      "max_total",
      "open_from",
      "open_to",
      "closed_text",
      "success_text",
      "submit_label",
      "notify_webhooks",
      "notify_author"
    ]) if (input[key] !== void 0) form[key] = input[key];
    await this.forms.save(form);
    if (input.fields) await this.syncFields(form, input.fields);
    return this.one(id);
  }
  async remove(id) {
    const form = await this.one(id);
    await this.fields.remove(form.fields);
    await this.forms.remove(form);
  }
  async navList() {
    return this.forms.find({
      where: {
        enabled: true
      },
      select: {
        id: true,
        slug: true,
        title: true,
        icon: true,
        nav_order: true,
        in_nav: true
      },
      order: {
        nav_order: "ASC",
        id: "ASC"
      }
    });
  }
  async catalog() {
    return this.forms.find({
      where: {
        enabled: true
      },
      order: {
        nav_order: "ASC",
        id: "ASC"
      }
    });
  }
  async open(slug, user, ip) {
    const form = await this.forms.findOne({
      where: {
        slug
      },
      relations: [
        "fields"
      ]
    });
    if (!form || !form.enabled) throw new import_common.NotFoundException();
    form.fields = this.sorted(form.fields);
    const availability = await this.availability(form, user, ip);
    const servers = form.fields.some((field) => field.type === "server") ? await (0, import_server3.core)().servers.all() : [];
    return {
      form,
      availability,
      servers,
      authorized: Boolean(user)
    };
  }
  async submit(slug, input, user, ip) {
    const form = await this.forms.findOne({
      where: {
        slug
      },
      relations: [
        "fields"
      ]
    });
    if (!form || !form.enabled) throw new import_common.NotFoundException();
    form.fields = this.sorted(form.fields);
    const availability = await this.availability(form, user, ip);
    if (!availability.open) throw new import_common.ForbiddenException(availability.reason);
    const answers = this.normalize(form.fields, input.answers || {});
    const shown = visibleFields(form.fields, answers);
    const servers = await this.serverNames(shown, answers);
    const errors = {};
    for (const field of shown) {
      const error = answerError(field, answers[field.key] ?? null);
      const unknownServer = field.type === "server" && !isEmptyAnswer(answers[field.key]) && !servers.has(String(answers[field.key]));
      if (error || unknownServer) errors[field.key] = error || "mod.forms.error_option";
    }
    const guestName = String(input.username || "").trim();
    const guestEmail = String(input.email || "").trim();
    if (!user) {
      if (!guestName) errors[GUEST_NAME] = "mod.forms.error_required";
      if (form.notify_author && !guestEmail) errors[GUEST_EMAIL] = "mod.forms.error_required";
      if (guestEmail && !EMAIL_PATTERN2.test(guestEmail)) errors[GUEST_EMAIL] = "mod.forms.error_email";
    }
    if (Object.keys(errors).length) throw new import_common.BadRequestException({
      errors
    });
    const submission = this.submissions.create({
      form,
      user_uuid: user?.uuid || null,
      username: user?.username || guestName || null,
      email: user?.email || guestEmail || this.emailFromAnswers(shown, answers),
      ip,
      answers: this.snapshot(shown, answers, servers),
      status: DEFAULT_SUBMISSION_STATUS
    });
    await this.submissions.save(submission);
    await this.announce(form, submission);
    return submission;
  }
  async mine(uuid) {
    return this.submissions.find({
      where: {
        user_uuid: uuid
      },
      order: {
        created_at: "DESC"
      }
    });
  }
  async inbox(query) {
    const where = {};
    if (query.form) where.form = {
      id: query.form
    };
    if (query.status) where.status = query.status === DEFAULT_SUBMISSION_STATUS ? (0, import_typeorm5.In)([
      LEGACY_NEW_STATUS,
      DEFAULT_SUBMISSION_STATUS
    ]) : query.status;
    const [items, total] = await this.submissions.findAndCount({
      where,
      order: {
        created_at: "DESC"
      },
      skip: ((query.page || 1) - 1) * INBOX_PAGE,
      take: INBOX_PAGE
    });
    return {
      items,
      total
    };
  }
  async review(id, input, reviewer) {
    const submission = await this.submissions.findOne({
      where: {
        id
      }
    });
    if (!submission) throw new import_common.NotFoundException();
    const changed = submission.status !== input.status;
    submission.status = input.status;
    submission.comment = input.comment || null;
    submission.reviewer_uuid = reviewer?.uuid || null;
    submission.reviewed_at = /* @__PURE__ */ new Date();
    await this.submissions.save(submission);
    if (changed && submission.form?.notify_author) await this.notifyAuthor(submission);
    return submission;
  }
  async removeSubmission(id) {
    await this.submissions.delete({
      id
    });
  }
  async cleanup(days) {
    if (!days) return 0;
    const result = await this.submissions.delete({
      status: (0, import_typeorm5.In)([
        "rejected",
        "accepted"
      ]),
      reviewed_at: (0, import_typeorm5.LessThan)(new Date(Date.now() - days * DAY))
    });
    return result.affected || 0;
  }
  async maxFileSize(slug, user, ip) {
    const form = await this.forms.findOne({
      where: {
        slug
      },
      relations: [
        "fields"
      ]
    });
    if (!form || !form.enabled) throw new import_common.NotFoundException();
    const availability = await this.availability(form, user, ip);
    if (!availability.open) throw new import_common.ForbiddenException(availability.reason);
    const files = form.fields.filter((field) => field.type === "file");
    if (!files.length) throw new import_common.ForbiddenException("\u0412 \u0444\u043E\u0440\u043C\u0435 \u043D\u0435\u0442 \u043F\u043E\u043B\u0435\u0439 \u0434\u043B\u044F \u0444\u0430\u0439\u043B\u043E\u0432");
    return files.reduce((limit, field) => Math.max(limit, Number(field.settings?.max_size) || DEFAULT_MAX_SIZE_MB), 0);
  }
  async availability(form, user, ip) {
    if (!form.enabled) return {
      open: false,
      reason: "disabled"
    };
    if (form.auth_only && !user) return {
      open: false,
      reason: "auth"
    };
    if (form.permission && (!user || !await (0, import_server3.core)().users.can(user.uuid, form.permission))) return {
      open: false,
      reason: "permission"
    };
    const now = /* @__PURE__ */ new Date();
    if (form.open_from && now < new Date(form.open_from)) return {
      open: false,
      reason: "window",
      until: form.open_from
    };
    if (form.open_to && now > new Date(form.open_to)) return {
      open: false,
      reason: "window"
    };
    if (form.max_total) {
      const total = await this.submissions.count({
        where: {
          form: {
            id: form.id
          }
        }
      });
      if (total >= form.max_total) return {
        open: false,
        reason: "limit"
      };
    }
    const author = user ? {
      user_uuid: user.uuid
    } : {
      user_uuid: (0, import_typeorm5.IsNull)(),
      ip
    };
    if (form.once) {
      const already = await this.submissions.count({
        where: {
          form: {
            id: form.id
          },
          ...author
        }
      });
      if (already) return {
        open: false,
        reason: "once"
      };
    }
    if (form.cooldown_hours) {
      const last = await this.submissions.findOne({
        where: {
          form: {
            id: form.id
          },
          ...author
        },
        order: {
          created_at: "DESC"
        }
      });
      if (last) {
        const until = new Date(new Date(last.created_at).getTime() + form.cooldown_hours * HOUR);
        if (until > now) return {
          open: false,
          reason: "cooldown",
          until
        };
      }
    }
    return {
      open: true
    };
  }
  normalize(fields, raw) {
    const answers = {};
    const prefix = (0, import_server3.core)().storage.url("");
    for (const field of fields) {
      const info = fieldType(field.type);
      if (!info.input) continue;
      const value = raw[field.key];
      if (value === void 0 || value === null) {
        answers[field.key] = info.multi ? [] : null;
        continue;
      }
      if (info.multi) {
        answers[field.key] = (Array.isArray(value) ? value : [
          value
        ]).map((item) => String(item)).slice(0, 50);
        continue;
      }
      if ([
        "checkbox",
        "switch"
      ].includes(field.type)) {
        answers[field.key] = Boolean(value);
        continue;
      }
      if ([
        "number",
        "slider",
        "rating"
      ].includes(field.type)) {
        answers[field.key] = Number(value);
        continue;
      }
      if (field.type === "file") {
        const url = String(value);
        answers[field.key] = url.startsWith(prefix) ? url : null;
        continue;
      }
      answers[field.key] = String(value).slice(0, 4e3);
    }
    return answers;
  }
  async serverNames(fields, answers) {
    if (!fields.some((field) => field.type === "server" && !isEmptyAnswer(answers[field.key]))) return /* @__PURE__ */ new Map();
    const servers = await (0, import_server3.core)().servers.all();
    return new Map(servers.map((server) => [
      String(server.id),
      server.name
    ]));
  }
  snapshot(fields, answers, servers) {
    return fields.filter((field) => fieldType(field.type).input).filter((field) => !isEmptyAnswer(answers[field.key])).map((field) => ({
      key: field.key,
      type: field.type,
      label: field.label,
      value: this.readable(field, answers[field.key], servers)
    }));
  }
  readable(field, value, servers) {
    if (field.type === "server") return servers.get(String(value)) || value;
    if (!fieldType(field.type).options) return value;
    const labels = new Map((field.options || []).map((option) => [
      option.value,
      option.label
    ]));
    if (Array.isArray(value)) return value.map((item) => labels.get(String(item)) || item);
    return labels.get(String(value)) || value;
  }
  emailFromAnswers(fields, answers) {
    const field = fields.find((item) => item.type === "email");
    return field && !isEmptyAnswer(answers[field.key]) ? String(answers[field.key]) : null;
  }
  sorted(fields = []) {
    return fields.slice().sort((left, right) => left.position - right.position || left.id - right.id);
  }
  async syncFields(form, list) {
    const existing = await this.fields.find({
      where: {
        form: {
          id: form.id
        }
      }
    });
    const keep = new Set(list.map((item) => item.id).filter(Boolean));
    const dropped = existing.filter((field) => !keep.has(field.id));
    const keys = /* @__PURE__ */ new Set();
    for (const item of list) {
      if (keys.has(item.key)) throw new import_common.BadRequestException(`\u041F\u043E\u043B\u0435 \xAB${item.key}\xBB \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044F \u0434\u0432\u0430\u0436\u0434\u044B`);
      keys.add(item.key);
    }
    if (dropped.length) await this.fields.remove(dropped);
    const rows = list.map((item, index) => {
      const target = existing.find((field) => field.id === item.id) || this.fields.create({
        form
      });
      const info = fieldType(item.type);
      target.form = form;
      target.key = item.key;
      target.type = info.type;
      target.label = item.label;
      target.hint = item.hint || null;
      target.placeholder = item.placeholder || null;
      target.required = Boolean(item.required) && info.input;
      target.half = Boolean(item.half);
      target.position = index;
      target.options = info.options ? item.options || [] : null;
      target.settings = item.settings || null;
      target.visible_if = item.visible_if?.field ? item.visible_if : null;
      return target;
    });
    await this.fields.save(rows);
  }
  async freeSlug(slug, keepId) {
    const cleaned = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    const base = !cleaned || RESERVED_SLUGS.includes(cleaned) ? `${cleaned || "form"}-1` : cleaned;
    let candidate = base;
    let index = 2;
    while (true) {
      const taken = await this.forms.findOne({
        where: keepId ? {
          slug: candidate,
          id: (0, import_typeorm5.Not)(keepId)
        } : {
          slug: candidate
        }
      });
      if (!taken) return candidate;
      candidate = `${base}-${index}`;
      index += 1;
    }
  }
  async announce(form, submission) {
    const logger = (0, import_server3.core)().logger("forms");
    logger.log(`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116${submission.id} \u043F\u043E \u0444\u043E\u0440\u043C\u0435 \xAB${form.title}\xBB \u043E\u0442 ${submission.username || submission.ip}`);
    if (!form.notify_webhooks?.length) return;
    const lines = submission.answers.map((answer) => `${answer.label}: ${this.plain(answer.value)}`);
    const post = {
      title: form.title,
      description: [
        `\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442 ${submission.username || "\u0433\u043E\u0441\u0442\u044F"}`,
        "",
        ...lines
      ].join("\n")
    };
    for (const id of form.notify_webhooks) await (0, import_server3.core)().webhooks.sendTo(Number(id), post).then((status) => logger.log(`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116${submission.id} \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0432\u0435\u0431\u0445\u0443\u043A ${id} (HTTP ${status})`)).catch((error) => logger.error(`\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u0435\u0431\u0445\u0443\u043A ${id} \u043D\u0435 \u0443\u0448\u043B\u043E`, error));
  }
  async notifyAuthor(submission) {
    const logger = (0, import_server3.core)().logger("forms");
    try {
      const code = await (0, import_server3.core)().locales.defaultCode();
      const messages = await (0, import_server3.core)().locales.messages(code);
      const status = messages[`mod.forms.status_${submission.status}`] || submission.status;
      const subject = `${submission.form.title} \u2014 ${status}`;
      const comment = submission.comment ? `<p>${submission.comment}</p>` : "";
      const html = `<p>${messages["mod.forms.mail_intro"] || "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u0437\u0430\u044F\u0432\u043A\u0435"}: <b>${status}</b>.</p>${comment}`;
      if (submission.user_uuid) await (0, import_server3.core)().mail.sendToUser(submission.user_uuid, subject, html);
      else if (submission.email) await (0, import_server3.core)().mail.send(submission.email, subject, html);
    } catch (error) {
      logger.error(`\u041F\u0438\u0441\u044C\u043C\u043E \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0435 \u2116${submission.id} \u043D\u0435 \u0443\u0448\u043B\u043E`, error);
    }
  }
  plain(value) {
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "boolean") return value ? "\u0434\u0430" : "\u043D\u0435\u0442";
    return String(value ?? "");
  }
};
__name(_FormsService, "FormsService");
var FormsService = _FormsService;
FormsService = _ts_decorate7([
  (0, import_common.Injectable)(),
  _ts_param(0, (0, import_typeorm4.InjectRepository)(Form)),
  _ts_param(1, (0, import_typeorm4.InjectRepository)(FormField)),
  _ts_param(2, (0, import_typeorm4.InjectRepository)(FormSubmission)),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository,
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository,
    typeof import_typeorm5.Repository === "undefined" ? Object : import_typeorm5.Repository
  ])
], FormsService);

// server-src/forms-admin.controller.ts
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
function _ts_param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param2, "_ts_param");
var _FormsAdminController = class _FormsAdminController {
  constructor(forms) {
    __publicField(this, "forms");
    this.forms = forms;
  }
  presets() {
    return FORM_PRESETS.map(({ fields, ...preset }) => ({
      ...preset,
      fields: fields.length
    }));
  }
  webhooks() {
    return (0, import_server4.core)().webhooks.list();
  }
  submissions(form, status, page) {
    return this.forms.inbox({
      form: form ? Number(form) : void 0,
      status: status || void 0,
      page: page ? Number(page) : 1
    });
  }
  review(id, input, user) {
    return this.forms.review(id, input, user);
  }
  removeSubmission(id) {
    return this.forms.removeSubmission(id);
  }
  list() {
    return this.forms.list();
  }
  create(input) {
    return this.forms.create(input);
  }
  one(id) {
    return this.forms.one(id);
  }
  update(id, input) {
    return this.forms.update(id, input);
  }
  remove(id) {
    return this.forms.remove(id);
  }
};
__name(_FormsAdminController, "FormsAdminController");
var FormsAdminController = _FormsAdminController;
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.read"
  ]),
  (0, import_common2.Get)("presets"),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", []),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "presets", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.read"
  ]),
  (0, import_common2.Get)("webhooks"),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", []),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "webhooks", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.read"
  ]),
  (0, import_common2.Get)("submissions"),
  _ts_param2(0, (0, import_common2.Query)("form")),
  _ts_param2(1, (0, import_common2.Query)("status")),
  _ts_param2(2, (0, import_common2.Query)("page")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String,
    String,
    String
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "submissions", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.review"
  ]),
  (0, import_common2.Patch)("submissions/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_param2(2, (0, import_server4.CurrentUser)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    Number,
    typeof ReviewInput === "undefined" ? Object : ReviewInput,
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "review", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.review"
  ]),
  (0, import_common2.Delete)("submissions/:id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    Number
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "removeSubmission", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.read"
  ]),
  (0, import_common2.Get)(),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", []),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "list", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.write"
  ]),
  (0, import_common2.Post)(),
  _ts_param2(0, (0, import_common2.Body)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof FormCreateInput === "undefined" ? Object : FormCreateInput
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "create", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.read"
  ]),
  (0, import_common2.Get)(":id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    Number
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "one", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.write"
  ]),
  (0, import_common2.Patch)(":id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_param2(1, (0, import_common2.Body)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    Number,
    typeof FormInput === "undefined" ? Object : FormInput
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "update", null);
_ts_decorate8([
  (0, import_server4.Permissions)([
    "mod.forms.write"
  ]),
  (0, import_common2.Delete)(":id"),
  _ts_param2(0, (0, import_common2.Param)("id", import_common2.ParseIntPipe)),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    Number
  ]),
  _ts_metadata8("design:returntype", void 0)
], FormsAdminController.prototype, "remove", null);
FormsAdminController = _ts_decorate8([
  (0, import_common2.Controller)("mod/forms/manage"),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof FormsService === "undefined" ? Object : FormsService
  ])
], FormsAdminController);

// server-src/forms.controller.ts
var import_common3 = require("@nestjs/common");
var import_platform_express = require("@nestjs/platform-express");
var import_server5 = require("unicore-api/server");
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
function _ts_param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param3, "_ts_param");
var MEGABYTE = 1024 * 1024;
var HOUR_SECONDS = 60 * 60;
var _FormsController = class _FormsController {
  constructor(forms) {
    __publicField(this, "forms");
    this.forms = forms;
  }
  catalog() {
    return this.forms.catalog();
  }
  nav() {
    return this.forms.navList();
  }
  mine(user) {
    return this.forms.mine(user.uuid);
  }
  open(slug, user, ip) {
    return this.forms.open(slug, user || null, ip);
  }
  async upload(slug, user, ip, file) {
    if (!file) throw new import_common3.BadRequestException("\u0424\u0430\u0439\u043B \u043D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B");
    const limit = await this.forms.maxFileSize(slug, user || null, ip);
    await this.throttle(ip);
    if (file.size > limit * MEGABYTE) throw new import_common3.BadRequestException(`\u0424\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 ${limit} \u041C\u0411`);
    const name = await (0, import_server5.core)().storage.save(file.originalname, file.buffer);
    return {
      url: (0, import_server5.core)().storage.url(name)
    };
  }
  submit(slug, input, user, ip) {
    return this.forms.submit(slug, input, user || null, ip);
  }
  async throttle(ip) {
    const key = `mod.forms.upload.${ip}`;
    const used = await (0, import_server5.core)().cache.get(key) || 0;
    if (used >= UPLOADS_PER_HOUR) throw new import_common3.BadRequestException("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u043E\u0432 \u0437\u0430 \u0447\u0430\u0441, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435");
    await (0, import_server5.core)().cache.set(key, used + 1, HOUR_SECONDS);
  }
};
__name(_FormsController, "FormsController");
var FormsController = _FormsController;
_ts_decorate9([
  (0, import_server5.Public)(),
  (0, import_common3.Get)(),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", []),
  _ts_metadata9("design:returntype", void 0)
], FormsController.prototype, "catalog", null);
_ts_decorate9([
  (0, import_server5.Public)(),
  (0, import_common3.Get)("nav"),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", []),
  _ts_metadata9("design:returntype", void 0)
], FormsController.prototype, "nav", null);
_ts_decorate9([
  (0, import_common3.Get)("my"),
  _ts_param3(0, (0, import_server5.CurrentUser)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof UserRecord === "undefined" ? Object : UserRecord
  ]),
  _ts_metadata9("design:returntype", void 0)
], FormsController.prototype, "mine", null);
_ts_decorate9([
  (0, import_server5.Public)(),
  (0, import_common3.Get)(":slug"),
  _ts_param3(0, (0, import_common3.Param)("slug")),
  _ts_param3(1, (0, import_server5.CurrentUser)()),
  _ts_param3(2, (0, import_server5.IpAddress)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    String,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    String
  ]),
  _ts_metadata9("design:returntype", void 0)
], FormsController.prototype, "open", null);
_ts_decorate9([
  (0, import_server5.Public)(),
  (0, import_common3.Post)(":slug/upload"),
  (0, import_common3.UseInterceptors)((0, import_platform_express.FileInterceptor)("file")),
  _ts_param3(0, (0, import_common3.Param)("slug")),
  _ts_param3(1, (0, import_server5.CurrentUser)()),
  _ts_param3(2, (0, import_server5.IpAddress)()),
  _ts_param3(3, (0, import_common3.UploadedFile)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    String,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    String,
    Object
  ]),
  _ts_metadata9("design:returntype", Promise)
], FormsController.prototype, "upload", null);
_ts_decorate9([
  (0, import_server5.Public)(),
  (0, import_common3.Post)(":slug"),
  _ts_param3(0, (0, import_common3.Param)("slug")),
  _ts_param3(1, (0, import_common3.Body)()),
  _ts_param3(2, (0, import_server5.CurrentUser)()),
  _ts_param3(3, (0, import_server5.IpAddress)()),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    String,
    typeof SubmitInput === "undefined" ? Object : SubmitInput,
    typeof UserRecord === "undefined" ? Object : UserRecord,
    String
  ]),
  _ts_metadata9("design:returntype", void 0)
], FormsController.prototype, "submit", null);
FormsController = _ts_decorate9([
  (0, import_common3.Controller)("mod/forms"),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof FormsService === "undefined" ? Object : FormsService
  ])
], FormsController);

// server-src/forms.tasks.ts
var import_common4 = require("@nestjs/common");
var import_server6 = require("unicore-api/server");
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
var _FormsTasks = class _FormsTasks {
  constructor(forms) {
    __publicField(this, "forms");
    this.forms = forms;
  }
  async cleanup() {
    const days = await (0, import_server6.core)().config.getNumber("mod_forms_keep_days", 0);
    const removed = await this.forms.cleanup(days);
    if (removed) (0, import_server6.core)().logger("forms").log(`\u0423\u0434\u0430\u043B\u0435\u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A: ${removed}`);
  }
};
__name(_FormsTasks, "FormsTasks");
var FormsTasks = _FormsTasks;
_ts_decorate10([
  (0, import_server6.SafeCron)("0 4 * * *", "\u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A"),
  _ts_metadata10("design:type", Function),
  _ts_metadata10("design:paramtypes", []),
  _ts_metadata10("design:returntype", Promise)
], FormsTasks.prototype, "cleanup", null);
FormsTasks = _ts_decorate10([
  (0, import_common4.Injectable)(),
  _ts_metadata10("design:type", Function),
  _ts_metadata10("design:paramtypes", [
    typeof FormsService === "undefined" ? Object : FormsService
  ])
], FormsTasks);

// server-src/forms.module.ts
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
var _FormsModule = class _FormsModule {
};
__name(_FormsModule, "FormsModule");
var FormsModule = _FormsModule;
FormsModule = _ts_decorate11([
  (0, import_common5.Module)({
    imports: [
      import_typeorm6.TypeOrmModule.forFeature([
        Form,
        FormField,
        FormSubmission
      ])
    ],
    controllers: [
      FormsAdminController,
      FormsController
    ],
    providers: [
      FormsService,
      FormsTasks
    ]
  })
], FormsModule);

// locales/ru.json
var ru_default = {
  "mod.forms.attach": "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B",
  "mod.forms.attach_hint": "\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 {size} \u041C\u0411.",
  "mod.forms.attached": "\u0424\u0430\u0439\u043B",
  "mod.forms.auth_only": "\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445",
  "mod.forms.auth_only_hint": "\u0413\u043E\u0441\u0442\u044C \u0443\u0432\u0438\u0434\u0438\u0442 \u0444\u043E\u0440\u043C\u0443, \u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0435 \u0441\u043C\u043E\u0436\u0435\u0442.",
  "mod.forms.author": "\u0418\u0433\u0440\u043E\u043A",
  "mod.forms.catalog_empty": "\u0424\u043E\u0440\u043C \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "mod.forms.choose": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435",
  "mod.forms.choose_server": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440",
  "mod.forms.closed_auth": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0432\u0445\u043E\u0434\u0430",
  "mod.forms.closed_cooldown": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C {date}",
  "mod.forms.closed_disabled": "\u041F\u0440\u0438\u0451\u043C \u0437\u0430\u044F\u0432\u043E\u043A \u0437\u0430\u043A\u0440\u044B\u0442",
  "mod.forms.closed_limit": "\u0411\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C",
  "mod.forms.closed_once": "\u0412\u044B \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 \u043F\u043E \u044D\u0442\u043E\u0439 \u0444\u043E\u0440\u043C\u0435",
  "mod.forms.closed_permission": "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u044D\u0442\u043E\u0439 \u0444\u043E\u0440\u043C\u0435",
  "mod.forms.closed_text": "\u0422\u0435\u043A\u0441\u0442, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u0438\u0451\u043C \u0437\u0430\u043A\u0440\u044B\u0442",
  "mod.forms.closed_text_hint": "\u0417\u0430\u043C\u0435\u043D\u0438\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435.",
  "mod.forms.closed_window": "\u041F\u0440\u0438\u0451\u043C \u0437\u0430\u044F\u0432\u043E\u043A \u0437\u0430\u043A\u0440\u044B\u0442",
  "mod.forms.closed_window_from": "\u041F\u0440\u0438\u0451\u043C \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F {date}",
  "mod.forms.condition": "\u041A\u043E\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",
  "mod.forms.condition_always": "\u0412\u0441\u0435\u0433\u0434\u0430",
  "mod.forms.condition_field": "\u041F\u043E\u043B\u0435",
  "mod.forms.condition_hint": "\u041F\u043E\u043B\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u0435 \u043F\u043E\u043B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434 \u0443\u0441\u043B\u043E\u0432\u0438\u0435.",
  "mod.forms.condition_op": "\u0423\u0441\u043B\u043E\u0432\u0438\u0435",
  "mod.forms.condition_value": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
  "mod.forms.config_index_subtitle": "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0444\u043E\u0440\u043C",
  "mod.forms.config_index_subtitle_hint": "\u0421\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043D\u0443\u0436\u043D\u0430.",
  "mod.forms.config_index_title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0444\u043E\u0440\u043C",
  "mod.forms.config_index_title_hint": "\u0412\u0438\u0434\u0435\u043D \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 /mod/forms \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0432\u0441\u0435\u0445 \u0444\u043E\u0440\u043C.",
  "mod.forms.config_keep_days": "\u0425\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438, \u0434\u043D\u0435\u0439",
  "mod.forms.config_keep_days_hint": "\u041F\u0440\u0438\u043D\u044F\u0442\u044B\u0435 \u0438 \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0441\u0442\u0430\u0440\u0448\u0435 \u044D\u0442\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0447\u044C\u044E. \u041D\u043E\u043B\u044C \u2014 \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0441\u0451.",
  "mod.forms.cooldown": "\u041F\u043E\u0432\u0442\u043E\u0440 \u0447\u0435\u0440\u0435\u0437, \u0447\u0430\u0441\u043E\u0432",
  "mod.forms.cooldown_hint": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0436\u0434\u0430\u0442\u044C \u0434\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0437\u0430\u044F\u0432\u043A\u0438. \u041D\u043E\u043B\u044C \u2014 \u0431\u0435\u0437 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F.",
  "mod.forms.create": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443",
  "mod.forms.enabled": "\u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0430",
  "mod.forms.error_email": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B",
  "mod.forms.error_key": "\u041B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0431\u0443\u043A\u0432\u044B",
  "mod.forms.error_key_taken": "\u0422\u0430\u043A\u043E\u0439 \u043A\u043B\u044E\u0447 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0435",
  "mod.forms.error_max": "\u0427\u0438\u0441\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0433\u043E",
  "mod.forms.error_max_length": "\u041E\u0442\u0432\u0435\u0442 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u2014 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u0435",
  "mod.forms.error_min": "\u0427\u0438\u0441\u043B\u043E \u043C\u0435\u043D\u044C\u0448\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0433\u043E",
  "mod.forms.error_min_length": "\u041E\u0442\u0432\u0435\u0442 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
  "mod.forms.error_number": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E",
  "mod.forms.error_option": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430",
  "mod.forms.error_pattern": "\u041E\u0442\u0432\u0435\u0442 \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434 \u0448\u0430\u0431\u043B\u043E\u043D",
  "mod.forms.error_pick_max": "\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u0438\u0448\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B",
  "mod.forms.error_pick_min": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
  "mod.forms.error_required": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435",
  "mod.forms.error_send": "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0435 \u0443\u0448\u043B\u0430 \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",
  "mod.forms.error_url": "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 http:// \u0438\u043B\u0438 https://",
  "mod.forms.field_add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435",
  "mod.forms.field_edit": "\u041F\u043E\u043B\u0435",
  "mod.forms.field_half": "\u041F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u044B",
  "mod.forms.field_hint": "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430",
  "mod.forms.field_hint_hint": "\u041F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0437\u043D\u0430\u0447\u043A\u0435 \xAB?\xBB \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E.",
  "mod.forms.field_key": "\u041A\u043B\u044E\u0447",
  "mod.forms.field_key_hint": "\u041C\u0430\u0448\u0438\u043D\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044F: \u043F\u043E \u043D\u0435\u043C\u0443 \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u0432 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u0432 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435. \u041B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435.",
  "mod.forms.field_label": "\u041F\u043E\u0434\u043F\u0438\u0441\u044C",
  "mod.forms.field_marks": "\u041F\u0440\u0438\u0437\u043D\u0430\u043A\u0438",
  "mod.forms.field_placeholder": "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0432 \u043F\u043E\u043B\u0435",
  "mod.forms.field_required": "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435",
  "mod.forms.field_text": "\u0422\u0435\u043A\u0441\u0442",
  "mod.forms.field_type": "\u0422\u0438\u043F",
  "mod.forms.fields_empty": "\u0412 \u0444\u043E\u0440\u043C\u0435 \u043D\u0435\u0442 \u043F\u043E\u043B\u0435\u0439",
  "mod.forms.fields_empty_hint": "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u043F\u043E\u043B\u0435, \u0438\u043D\u0430\u0447\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0447\u0435\u0433\u043E.",
  "mod.forms.fields_hint": "\u041F\u043E\u043B\u044F \u0438\u0434\u0443\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432 \u044D\u0442\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u2014 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C.",
  "mod.forms.filter_form": "\u0412\u0441\u0435 \u0444\u043E\u0440\u043C\u044B",
  "mod.forms.filter_status": "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u044B",
  "mod.forms.form": "\u0424\u043E\u0440\u043C\u0430",
  "mod.forms.guest": "\u0413\u043E\u0441\u0442\u044C",
  "mod.forms.guest_email": "\u041F\u043E\u0447\u0442\u0430 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430",
  "mod.forms.guest_email_hint": "\u041E\u0442\u0432\u0435\u0442 \u043F\u0440\u0438\u0434\u0451\u0442 \u043D\u0430 \u043D\u0435\u0451 \u2014 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0430 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0433\u043E\u0441\u0442\u0435\u043C \u043D\u0435\u0442.",
  "mod.forms.guest_name": "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
  "mod.forms.guest_name_hint": "\u0418\u043C\u044F \u0438\u043B\u0438 \u043D\u0438\u043A \u2014 \u043F\u043E \u043D\u0435\u043C\u0443 \u0432\u0430\u0441 \u0443\u0437\u043D\u0430\u044E\u0442 \u0432 \u043E\u0442\u0432\u0435\u0442\u0435.",
  "mod.forms.guest_title": "\u041A\u0430\u043A \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
  "mod.forms.icon": "\u0418\u043A\u043E\u043D\u043A\u0430",
  "mod.forms.icon_hint": "\u041A\u043B\u0430\u0441\u0441 boxicons, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 bx bx-edit-alt. \u0418\u043A\u043E\u043D\u043A\u0430 \u0432\u0438\u0434\u043D\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
  "mod.forms.in_nav": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E \u0441\u0430\u0439\u0442\u0430",
  "mod.forms.in_nav_hint": "\u041F\u0443\u043D\u043A\u0442 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. \u041F\u043E\u043A\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0444\u043E\u0440\u043C\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043F\u0440\u044F\u043C\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435.",
  "mod.forms.in_nav_short": "\u0412 \u043C\u0435\u043D\u044E",
  "mod.forms.inbox": "\u0417\u0430\u044F\u0432\u043A\u0438",
  "mod.forms.inbox_empty": "\u0417\u0430\u044F\u0432\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "mod.forms.inbox_empty_hint": "\u041A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0443 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442, \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.",
  "mod.forms.inbox_nothing_found": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C",
  "mod.forms.inbox_nothing_found_hint": "\u0421\u043D\u0438\u043C\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044E \u0444\u043E\u0440\u043C\u0443.",
  "mod.forms.list_empty": "\u0424\u043E\u0440\u043C \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "mod.forms.list_empty_hint": "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438\u0437 \u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438\u043B\u0438 \u0441 \u043D\u0443\u043B\u044F \u2014 \u043E\u043D\u0430 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0441\u0432\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
  "mod.forms.mail_intro": "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u0437\u0430\u044F\u0432\u043A\u0435",
  "mod.forms.mark_condition": "\u0423\u0441\u043B\u043E\u0432\u0438\u0435",
  "mod.forms.mark_half": "\u041F\u043E\u043B\u043E\u0432\u0438\u043D\u0430",
  "mod.forms.mark_required": "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435",
  "mod.forms.max_total": "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
  "mod.forms.max_total_hint": "\u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0431\u0435\u0440\u0451\u0442\u0441\u044F, \u043F\u0440\u0438\u0451\u043C \u0437\u0430\u043A\u0440\u043E\u0435\u0442\u0441\u044F. \u041D\u043E\u043B\u044C \u2014 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F.",
  "mod.forms.menu_builder": "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
  "mod.forms.my_empty": "\u0417\u0430\u044F\u0432\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "mod.forms.my_empty_link": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u043E\u0440\u043C\u044B",
  "mod.forms.my_title": "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438",
  "mod.forms.nav_order": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u043C\u0435\u043D\u044E",
  "mod.forms.no": "\u041D\u0435\u0442",
  "mod.forms.notify_author": "\u041F\u0438\u0441\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0443 \u043E \u0440\u0435\u0448\u0435\u043D\u0438\u0438",
  "mod.forms.notify_author_hint": "\u041F\u0438\u0441\u044C\u043C\u043E \u0443\u0439\u0434\u0451\u0442, \u043A\u043E\u0433\u0434\u0430 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044F\u0432\u043A\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F.",
  "mod.forms.notify_empty": "\u041A\u0430\u043D\u0430\u043B\u043E\u0432 \u043D\u0435\u0442 \u2014 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0432\u0435\u0431\u0445\u0443\u043A \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB\u0412\u0435\u0431\u0445\u0443\u043A\u0438\xBB.",
  "mod.forms.notify_none": "\u041D\u0438\u043A\u0443\u0434\u0430",
  "mod.forms.notify_webhooks": "\u0412\u0435\u0431\u0445\u0443\u043A\u0438 \u0434\u043B\u044F \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",
  "mod.forms.notify_webhooks_hint": "\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u0435\u0431\u0445\u0443\u043A\u0438 \u0438\u0437 \u043F\u0430\u043D\u0435\u043B\u0438: \u0437\u0430\u044F\u0432\u043A\u0430 \u0443\u0439\u0434\u0451\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435.",
  "mod.forms.off": "\u0417\u0430\u043A\u0440\u044B\u0442\u0430",
  "mod.forms.on": "\u041E\u0442\u043A\u0440\u044B\u0442\u0430",
  "mod.forms.once": "\u041E\u0434\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430",
  "mod.forms.once_hint": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u043B\u044C\u0437\u044F \u2014 \u043D\u0438 \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441, \u043D\u0438 \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u0434.",
  "mod.forms.op_contains": "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
  "mod.forms.op_empty": "\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
  "mod.forms.op_eq": "\u0420\u0430\u0432\u043D\u043E",
  "mod.forms.op_filled": "\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
  "mod.forms.op_gt": "\u0411\u043E\u043B\u044C\u0448\u0435",
  "mod.forms.op_lt": "\u041C\u0435\u043D\u044C\u0448\u0435",
  "mod.forms.op_ne": "\u041D\u0435 \u0440\u0430\u0432\u043D\u043E",
  "mod.forms.open_from": "\u041F\u0440\u0438\u0451\u043C \u0441",
  "mod.forms.open_site": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",
  "mod.forms.open_site_hint": "\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D: \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 BASEURL \u0432 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u043A\u0438.",
  "mod.forms.open_to": "\u041F\u0440\u0438\u0451\u043C \u043F\u043E",
  "mod.forms.option_add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442",
  "mod.forms.option_label": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
  "mod.forms.option_value": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
  "mod.forms.options_empty": "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0432\u0430\u0440\u0438\u0430\u043D\u0442",
  "mod.forms.permission": "\u041F\u0440\u0430\u0432\u043E",
  "mod.forms.permission_hint": "\u0415\u0441\u043B\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043E, \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441\u043C\u043E\u0436\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E\u0442, \u0443 \u043A\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u044D\u0442\u043E \u043F\u0440\u0430\u0432\u043E.",
  "mod.forms.preset_blank": "\u041F\u0443\u0441\u0442\u0430\u044F \u0444\u043E\u0440\u043C\u0430",
  "mod.forms.preset_blank_summary": "\u041D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044F \u2014 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0435 \u0441\u0430\u043C\u0438.",
  "mod.forms.preset_bug": "\u0411\u0430\u0433-\u0440\u0435\u043F\u043E\u0440\u0442",
  "mod.forms.preset_bug_summary": "\u0421\u0435\u0440\u0432\u0435\u0440, \u0448\u0430\u0433\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F \u0438 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442.",
  "mod.forms.preset_complaint": "\u0416\u0430\u043B\u043E\u0431\u0430 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0430",
  "mod.forms.preset_complaint_summary": "\u041D\u0438\u043A \u043D\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u044F, \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435.",
  "mod.forms.preset_feedback": "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C",
  "mod.forms.preset_feedback_summary": "\u0422\u0435\u043C\u0430, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u0447\u0442\u0430 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",
  "mod.forms.preset_staff": "\u0417\u0430\u044F\u0432\u043A\u0430 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443",
  "mod.forms.preset_staff_summary": "\u0412\u043E\u0437\u0440\u0430\u0441\u0442, \u0441\u0435\u0440\u0432\u0435\u0440, \u043E\u043F\u044B\u0442 \u0438 \u0432\u0440\u0435\u043C\u044F \u0432 \u0438\u0433\u0440\u0435.",
  "mod.forms.preset_unban": "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0440\u0430\u0437\u0431\u0430\u043D",
  "mod.forms.preset_unban_summary": "\u041E\u0434\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0430, \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435\u043C \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438.",
  "mod.forms.received": "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0430",
  "mod.forms.remove_confirm": "\u0424\u043E\u0440\u043C\u0430 \xAB{name}\xBB \u0438 \u0432\u0441\u0435 \u0435\u0451 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0440\u043E\u043F\u0430\u0434\u0443\u0442.",
  "mod.forms.removed": "\u0424\u043E\u0440\u043C\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430",
  "mod.forms.review_comment": "\u041E\u0442\u0432\u0435\u0442 \u0430\u0432\u0442\u043E\u0440\u0443",
  "mod.forms.review_comment_hint": "\u0410\u0432\u0442\u043E\u0440 \u0443\u0432\u0438\u0434\u0438\u0442 \u0435\u0433\u043E \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435.",
  "mod.forms.review_saved": "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430",
  "mod.forms.sent": "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",
  "mod.forms.setting_accept": "\u0422\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432",
  "mod.forms.setting_accept_hint": "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 image/* \u0438\u043B\u0438 .png,.jpg.",
  "mod.forms.setting_max": "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C",
  "mod.forms.setting_max_hint": "\u0411\u043E\u043B\u044C\u0448\u0435 \u044D\u0442\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0442\u0432\u0435\u0442 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043C.",
  "mod.forms.setting_max_length": "\u041D\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435",
  "mod.forms.setting_max_length_hint": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C.",
  "mod.forms.setting_max_size": "\u0420\u0430\u0437\u043C\u0435\u0440, \u041C\u0411",
  "mod.forms.setting_max_size_hint": "\u0424\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043C.",
  "mod.forms.setting_min": "\u041C\u0438\u043D\u0438\u043C\u0443\u043C",
  "mod.forms.setting_min_hint": "\u041C\u0435\u043D\u044C\u0448\u0435 \u044D\u0442\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0442\u0432\u0435\u0442 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043C.",
  "mod.forms.setting_min_length": "\u041D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435",
  "mod.forms.setting_min_length_hint": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C.",
  "mod.forms.setting_pattern": "\u0428\u0430\u0431\u043B\u043E\u043D",
  "mod.forms.setting_pattern_hint": "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442.",
  "mod.forms.setting_rows": "\u0412\u044B\u0441\u043E\u0442\u0430",
  "mod.forms.setting_rows_hint": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A \u0432\u0438\u0434\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438.",
  "mod.forms.setting_stars": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0432\u0451\u0437\u0434",
  "mod.forms.setting_stars_hint": "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430.",
  "mod.forms.setting_step": "\u0428\u0430\u0433",
  "mod.forms.setting_step_hint": "\u041D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0437\u0430 \u043E\u0434\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u0435.",
  "mod.forms.sign_in": "\u0412\u043E\u0439\u0442\u0438",
  "mod.forms.slug": "\u0410\u0434\u0440\u0435\u0441",
  "mod.forms.slug_hint": "\u0427\u0430\u0441\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 /mod/forms/. \u041B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u0434\u0435\u0444\u0438\u0441.",
  "mod.forms.state": "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",
  "mod.forms.status_accepted": "\u041F\u0440\u0438\u043D\u044F\u0442\u0430",
  "mod.forms.status_new": "\u041D\u043E\u0432\u0430\u044F",
  "mod.forms.status_rejected": "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430",
  "mod.forms.status_review": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438",
  "mod.forms.submissions": "\u0417\u0430\u044F\u0432\u043E\u043A",
  "mod.forms.submit": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
  "mod.forms.submit_label": "\u041D\u0430\u0434\u043F\u0438\u0441\u044C \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0435",
  "mod.forms.success_text": "\u0422\u0435\u043A\u0441\u0442 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438",
  "mod.forms.success_text_hint": "\u0427\u0442\u043E \u0443\u0432\u0438\u0434\u0438\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0443\u0439\u0434\u0451\u0442.",
  "mod.forms.tab_access": "\u0414\u043E\u0441\u0442\u0443\u043F",
  "mod.forms.tab_fields": "\u041F\u043E\u043B\u044F",
  "mod.forms.tab_notify": "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
  "mod.forms.tab_options": "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B",
  "mod.forms.tab_rules": "\u041F\u0440\u0430\u0432\u0438\u043B\u0430",
  "mod.forms.tab_translations": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B",
  "mod.forms.title": "\u0424\u043E\u0440\u043C\u044B",
  "mod.forms.title_placeholder": "\u0417\u0430\u044F\u0432\u043A\u0430 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443",
  "mod.forms.type_checkbox": "\u0413\u0430\u043B\u043E\u0447\u043A\u0430",
  "mod.forms.type_checkboxes": "\u0413\u0430\u043B\u043E\u0447\u043A\u0438",
  "mod.forms.type_date": "\u0414\u0430\u0442\u0430",
  "mod.forms.type_divider": "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C",
  "mod.forms.type_email": "\u041F\u043E\u0447\u0442\u0430",
  "mod.forms.type_file": "\u0424\u0430\u0439\u043B",
  "mod.forms.type_heading": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
  "mod.forms.type_multiselect": "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430",
  "mod.forms.type_number": "\u0427\u0438\u0441\u043B\u043E",
  "mod.forms.type_paragraph": "\u0410\u0431\u0437\u0430\u0446",
  "mod.forms.type_radio": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0438",
  "mod.forms.type_rating": "\u041E\u0446\u0435\u043D\u043A\u0430",
  "mod.forms.type_select": "\u0421\u043F\u0438\u0441\u043E\u043A",
  "mod.forms.type_server": "\u0421\u0435\u0440\u0432\u0435\u0440",
  "mod.forms.type_slider": "\u0428\u043A\u0430\u043B\u0430",
  "mod.forms.type_switch": "\u0414\u0430 \u0438\u043B\u0438 \u043D\u0435\u0442",
  "mod.forms.type_text": "\u0421\u0442\u0440\u043E\u043A\u0430",
  "mod.forms.type_textarea": "\u0422\u0435\u043A\u0441\u0442",
  "mod.forms.type_url": "\u0421\u0441\u044B\u043B\u043A\u0430",
  "mod.forms.yes": "\u0414\u0430",
  "perm.group.mod.forms": "\u0424\u043E\u0440\u043C\u044B",
  "perm.mod.forms.read": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
  "perm.mod.forms.read.hint": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0443 \u0444\u043E\u0440\u043C \u0438 \u0437\u0430\u044F\u0432\u043A\u0430\u043C.",
  "perm.mod.forms.review": "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
  "perm.mod.forms.review.hint": "\u0421\u043C\u0435\u043D\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0438 \u043E\u0442\u0432\u0435\u0442 \u0430\u0432\u0442\u043E\u0440\u0443 \u0437\u0430\u044F\u0432\u043A\u0438.",
  "perm.mod.forms.write": "\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u044B",
  "perm.mod.forms.write.hint": "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C, \u043F\u043E\u043B\u044F, \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u0438\u0451\u043C\u0430."
};

// locales/en.json
var en_default = {
  "mod.forms.attach": "Attach a file",
  "mod.forms.attach_hint": "No larger than {size} MB.",
  "mod.forms.attached": "File",
  "mod.forms.auth_only": "Signed-in players only",
  "mod.forms.auth_only_hint": "A guest sees the form but cannot send it.",
  "mod.forms.author": "Player",
  "mod.forms.catalog_empty": "No forms yet",
  "mod.forms.choose": "Choose",
  "mod.forms.choose_server": "Choose a server",
  "mod.forms.closed_auth": "Sign in to send this form",
  "mod.forms.closed_cooldown": "The next submission is possible on {date}",
  "mod.forms.closed_disabled": "The form is closed",
  "mod.forms.closed_limit": "No more submissions are accepted",
  "mod.forms.closed_once": "You have already sent this form",
  "mod.forms.closed_permission": "You do not have access to this form",
  "mod.forms.closed_text": "Text when the form is closed",
  "mod.forms.closed_text_hint": "Replaces the default explanation.",
  "mod.forms.closed_window": "The form is closed",
  "mod.forms.closed_window_from": "The form opens on {date}",
  "mod.forms.condition": "When to show",
  "mod.forms.condition_always": "Always",
  "mod.forms.condition_field": "Field",
  "mod.forms.condition_hint": "The field appears only when the answer to another field matches the condition.",
  "mod.forms.condition_op": "Condition",
  "mod.forms.condition_value": "Value",
  "mod.forms.config_index_subtitle": "Forms page subheading",
  "mod.forms.config_index_subtitle_hint": "The line under the heading. Leave empty if it is not needed.",
  "mod.forms.config_index_title": "Forms page heading",
  "mod.forms.config_index_title_hint": "Shown on /mod/forms, the page that lists every form.",
  "mod.forms.config_keep_days": "Keep reviewed submissions, days",
  "mod.forms.config_keep_days_hint": "Accepted and rejected submissions older than this are removed overnight. Zero keeps everything.",
  "mod.forms.cooldown": "Repeat after, hours",
  "mod.forms.cooldown_hint": "How long to wait before the next submission. Zero means no waiting.",
  "mod.forms.create": "New form",
  "mod.forms.enabled": "Form is open",
  "mod.forms.error_email": "Check the email address",
  "mod.forms.error_key": "Latin letters, digits and underscores, starting with a letter",
  "mod.forms.error_key_taken": "This key is already used in the form",
  "mod.forms.error_max": "The number is above the allowed one",
  "mod.forms.error_max_length": "The answer is too long \u2014 shorten it",
  "mod.forms.error_min": "The number is below the allowed one",
  "mod.forms.error_min_length": "The answer is too short \u2014 add more detail",
  "mod.forms.error_number": "Enter a number",
  "mod.forms.error_option": "Pick an option from the list",
  "mod.forms.error_pattern": "The answer does not match the pattern",
  "mod.forms.error_pick_max": "Remove the extra options",
  "mod.forms.error_pick_min": "Pick more options",
  "mod.forms.error_required": "Fill in the field",
  "mod.forms.error_send": "The submission did not go through \u2014 try again",
  "mod.forms.error_url": "The link must start with http:// or https://",
  "mod.forms.field_add": "Add field",
  "mod.forms.field_edit": "Field",
  "mod.forms.field_half": "Half width",
  "mod.forms.field_hint": "Hint",
  "mod.forms.field_hint_hint": "Shows up in the \xAB?\xBB icon next to the label.",
  "mod.forms.field_key": "Key",
  "mod.forms.field_key_hint": "Machine name of the field: answers and notifications use it. Latin letters, digits and underscores.",
  "mod.forms.field_label": "Label",
  "mod.forms.field_marks": "Marks",
  "mod.forms.field_placeholder": "Placeholder",
  "mod.forms.field_required": "Required",
  "mod.forms.field_text": "Text",
  "mod.forms.field_type": "Type",
  "mod.forms.fields_empty": "The form has no fields",
  "mod.forms.fields_empty_hint": "Add at least one field, otherwise there is nothing to submit.",
  "mod.forms.fields_hint": "Fields appear on the site in this order \u2014 drag to change it.",
  "mod.forms.filter_form": "All forms",
  "mod.forms.filter_status": "All statuses",
  "mod.forms.form": "Form",
  "mod.forms.guest": "Guest",
  "mod.forms.guest_email": "Email for the reply",
  "mod.forms.guest_email_hint": "The reply goes here \u2014 there is no other way to reach a guest.",
  "mod.forms.guest_name": "How to address you",
  "mod.forms.guest_name_hint": "A name or a nickname \u2014 the reply will use it.",
  "mod.forms.guest_title": "How to reach you",
  "mod.forms.icon": "Icon",
  "mod.forms.icon_hint": "A boxicons class, for example bx bx-edit-alt. The icon is shown on the site.",
  "mod.forms.in_nav": "Show in the site menu",
  "mod.forms.in_nav_hint": "Adds an item to the site header. While it is off, the form opens by direct link only.",
  "mod.forms.in_nav_short": "In menu",
  "mod.forms.inbox": "Submissions",
  "mod.forms.inbox_empty": "No submissions yet",
  "mod.forms.inbox_empty_hint": "As soon as someone fills the form, it shows up here.",
  "mod.forms.inbox_nothing_found": "Nothing found",
  "mod.forms.inbox_nothing_found_hint": "Clear the filters or pick another form.",
  "mod.forms.list_empty": "No forms yet",
  "mod.forms.list_empty_hint": "Start from a preset or from scratch \u2014 the form gets its own address right away.",
  "mod.forms.mail_intro": "The decision on your submission",
  "mod.forms.mark_condition": "Condition",
  "mod.forms.mark_half": "Half",
  "mod.forms.mark_required": "Required",
  "mod.forms.max_total": "Submissions in total",
  "mod.forms.max_total_hint": "Once this many arrive, the form closes. Zero means no limit.",
  "mod.forms.menu_builder": "Builder",
  "mod.forms.my_empty": "No submissions yet",
  "mod.forms.my_empty_link": "Browse the forms",
  "mod.forms.my_title": "My submissions",
  "mod.forms.nav_order": "Menu order",
  "mod.forms.no": "No",
  "mod.forms.notify_author": "Email the author about the decision",
  "mod.forms.notify_author_hint": "The email goes out when the submission status changes.",
  "mod.forms.notify_empty": "No channels \u2014 add a webhook in the \xABWebhooks\xBB section.",
  "mod.forms.notify_none": "Nowhere",
  "mod.forms.notify_webhooks": "Notification webhooks",
  "mod.forms.notify_webhooks_hint": "Specific webhooks from the panel: submissions go only to the selected ones.",
  "mod.forms.off": "Closed",
  "mod.forms.on": "Open",
  "mod.forms.once": "One submission per person",
  "mod.forms.once_hint": "Sending it again will not be possible \u2014 not in an hour, not in a year.",
  "mod.forms.op_contains": "Contains",
  "mod.forms.op_empty": "Empty",
  "mod.forms.op_eq": "Equals",
  "mod.forms.op_filled": "Filled",
  "mod.forms.op_gt": "Greater than",
  "mod.forms.op_lt": "Less than",
  "mod.forms.op_ne": "Not equal",
  "mod.forms.open_from": "Open from",
  "mod.forms.open_site": "Open on the site",
  "mod.forms.open_site_hint": "The site URL is not set: add BASEURL to the admin environment.",
  "mod.forms.open_to": "Open until",
  "mod.forms.option_add": "Add option",
  "mod.forms.option_label": "Label",
  "mod.forms.option_value": "Value",
  "mod.forms.options_empty": "Add at least one option",
  "mod.forms.permission": "Permission",
  "mod.forms.permission_hint": "When set, only players with this permission can send the form.",
  "mod.forms.preset_blank": "Blank form",
  "mod.forms.preset_blank_summary": "No fields \u2014 build it yourself.",
  "mod.forms.preset_bug": "Bug report",
  "mod.forms.preset_bug_summary": "Server, steps to reproduce and a screenshot.",
  "mod.forms.preset_complaint": "Player report",
  "mod.forms.preset_complaint_summary": "Offender name, proof and description.",
  "mod.forms.preset_feedback": "Feedback",
  "mod.forms.preset_feedback_summary": "Topic, message and an email to reply to.",
  "mod.forms.preset_staff": "Staff application",
  "mod.forms.preset_staff_summary": "Age, server, experience and hours in game.",
  "mod.forms.preset_unban": "Unban request",
  "mod.forms.preset_unban_summary": "One request per player, with a rules agreement.",
  "mod.forms.received": "Received",
  "mod.forms.remove_confirm": "The form \xAB{name}\xBB and all its submissions will be gone.",
  "mod.forms.removed": "Form deleted",
  "mod.forms.review_comment": "Reply to the author",
  "mod.forms.review_comment_hint": "The author sees it in the cabinet and in the email.",
  "mod.forms.review_saved": "Submission updated",
  "mod.forms.sent": "Submission sent",
  "mod.forms.setting_accept": "File types",
  "mod.forms.setting_accept_hint": "For example image/* or .png,.jpg.",
  "mod.forms.setting_max": "Maximum",
  "mod.forms.setting_max_hint": "Answers above this value are rejected.",
  "mod.forms.setting_max_length": "At most",
  "mod.forms.setting_max_length_hint": "Maximum number of characters.",
  "mod.forms.setting_max_size": "Size, MB",
  "mod.forms.setting_max_size_hint": "Larger files are rejected.",
  "mod.forms.setting_min": "Minimum",
  "mod.forms.setting_min_hint": "Answers below this value are rejected.",
  "mod.forms.setting_min_length": "At least",
  "mod.forms.setting_min_length_hint": "Minimum number of characters.",
  "mod.forms.setting_pattern": "Pattern",
  "mod.forms.setting_pattern_hint": "Regular expression the answer must match.",
  "mod.forms.setting_rows": "Height",
  "mod.forms.setting_rows_hint": "How many lines are visible without scrolling.",
  "mod.forms.setting_stars": "Stars",
  "mod.forms.setting_stars_hint": "The highest rating.",
  "mod.forms.setting_step": "Step",
  "mod.forms.setting_step_hint": "How much the value changes per click.",
  "mod.forms.sign_in": "Sign in",
  "mod.forms.slug": "Address",
  "mod.forms.slug_hint": "The part after /mod/forms/. Latin letters, digits and hyphens.",
  "mod.forms.state": "State",
  "mod.forms.status_accepted": "Accepted",
  "mod.forms.status_new": "New",
  "mod.forms.status_rejected": "Rejected",
  "mod.forms.status_review": "In review",
  "mod.forms.submissions": "Submissions",
  "mod.forms.submit": "Send",
  "mod.forms.submit_label": "Button label",
  "mod.forms.success_text": "Text after sending",
  "mod.forms.success_text_hint": "What a person sees once the submission is sent.",
  "mod.forms.tab_access": "Access",
  "mod.forms.tab_fields": "Fields",
  "mod.forms.tab_notify": "Notifications",
  "mod.forms.tab_options": "Options",
  "mod.forms.tab_rules": "Rules",
  "mod.forms.tab_translations": "Translations",
  "mod.forms.title": "Forms",
  "mod.forms.title_placeholder": "Staff application",
  "mod.forms.type_checkbox": "Checkbox",
  "mod.forms.type_checkboxes": "Checkboxes",
  "mod.forms.type_date": "Date",
  "mod.forms.type_divider": "Divider",
  "mod.forms.type_email": "Email",
  "mod.forms.type_file": "File",
  "mod.forms.type_heading": "Heading",
  "mod.forms.type_multiselect": "Multiple choice",
  "mod.forms.type_number": "Number",
  "mod.forms.type_paragraph": "Paragraph",
  "mod.forms.type_radio": "Radio buttons",
  "mod.forms.type_rating": "Rating",
  "mod.forms.type_select": "Dropdown",
  "mod.forms.type_server": "Server",
  "mod.forms.type_slider": "Slider",
  "mod.forms.type_switch": "Yes or no",
  "mod.forms.type_text": "Line",
  "mod.forms.type_textarea": "Text",
  "mod.forms.type_url": "Link",
  "mod.forms.yes": "Yes",
  "perm.group.mod.forms": "Forms",
  "perm.mod.forms.read": "View submissions",
  "perm.mod.forms.read.hint": "Access to the form builder and submissions.",
  "perm.mod.forms.review": "Review submissions",
  "perm.mod.forms.review.hint": "Changing the status and answering the author.",
  "perm.mod.forms.write": "Build forms",
  "perm.mod.forms.write.hint": "Creating forms, fields, rules and intake settings."
};

// server-src/index.ts
var index_default = (0, import_server7.defineModule)({
  id: "forms",
  entities: [
    Form,
    FormField,
    FormSubmission
  ],
  nestModules: [
    FormsModule
  ],
  permissions: [
    "mod.forms.read",
    "mod.forms.write",
    "mod.forms.review"
  ],
  config: [
    {
      key: "index_title",
      type: "string",
      default: "\u0424\u043E\u0440\u043C\u044B",
      public: true,
      label: "mod.forms.config_index_title",
      hint: "mod.forms.config_index_title_hint"
    },
    {
      key: "index_subtitle",
      type: "string",
      default: "\u0417\u0430\u044F\u0432\u043A\u0438, \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0438 \u0432\u0441\u0451, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",
      public: true,
      label: "mod.forms.config_index_subtitle",
      hint: "mod.forms.config_index_subtitle_hint"
    },
    {
      key: "keep_days",
      type: "number",
      default: 0,
      min: 0,
      max: 3650,
      label: "mod.forms.config_keep_days",
      hint: "mod.forms.config_keep_days_hint"
    }
  ],
  locales: {
    ru: ru_default,
    en: en_default
  }
});
//# sourceMappingURL=index.js.map