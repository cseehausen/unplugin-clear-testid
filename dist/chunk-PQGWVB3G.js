"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkYHYEDVEWjs = require('./chunk-YHYEDVEW.js');

// src/index.ts
var _unplugin = require('unplugin');
var src_default = _unplugin.createUnplugin.call(void 0, (options) => ({
  name: "unplugin-clear-testid",
  transformInclude(id) {
    return /(js|jsx|ts|tsx|vue)$/.test(id);
  },
  transform(code) {
    code = _chunkYHYEDVEWjs.vueTransformer.call(void 0, code, options);
    code = _chunkYHYEDVEWjs.htmlTransformer.call(void 0, code, options);
    return code;
  }
}));



exports.src_default = src_default;
