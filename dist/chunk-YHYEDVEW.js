"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/core.ts
function htmlTransformer(code, options) {
  if (options == null ? void 0 : options.testing)
    return code;
  const attrs = (options == null ? void 0 : options.attrs) || ["data-testid", "data-cy"];
  const regexp = new RegExp(`(${attrs.join("|")})(=")[^"]*(")`, "gm");
  return code.replace(regexp, "");
}
function vueTransformer(code, options) {
  if (options == null ? void 0 : options.testing)
    return code;
  const attrs = (options == null ? void 0 : options.attrs) || ["data-testid", "data-cy"];
  const regexp = [
    new RegExp(`{s.(${attrs.join("|")})":s+.*[^"][^}]"s?},`, "gm"),
    new RegExp(`{s.(${attrs.join("|")})":s+.*[^'][^}]'s?},`, "gm"),
    new RegExp(`:(${attrs.join("|")})="[^"]*"`, "gm"),
    new RegExp(`:(${attrs.join("|")})='[^']*'`, "gm"),
    new RegExp(`"(${attrs.join("|")})":\\s+".*[^"]",?`, "gm"),
    new RegExp(`'(${attrs.join("|")})':\\s+'.*[^']',?`, "gm")
  ];
  for (const regex of regexp)
    code = code.replace(regex, "");
  return code;
}




exports.htmlTransformer = htmlTransformer; exports.vueTransformer = vueTransformer;
