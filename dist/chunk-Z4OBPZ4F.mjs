import {
  htmlTransformer,
  vueTransformer
} from "./chunk-OEOV5ABZ.mjs";

// src/index.ts
import { createUnplugin } from "unplugin";
var src_default = createUnplugin((options) => ({
  name: "unplugin-clear-testid",
  transformInclude(id) {
    return /(js|jsx|ts|tsx|vue)$/.test(id);
  },
  transform(code) {
    code = vueTransformer(code, options);
    code = htmlTransformer(code, options);
    return code;
  }
}));

export {
  src_default
};
