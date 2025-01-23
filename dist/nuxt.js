"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPQGWVB3Gjs = require('./chunk-PQGWVB3G.js');
require('./chunk-YHYEDVEW.js');

// src/nuxt.ts
function nuxt_default(options) {
  this.extendBuild((config) => {
    config.plugins = config.plugins || [];
    config.plugins.unshift(_chunkPQGWVB3Gjs.src_default.webpack(options));
  });
  this.nuxt.hook("vite:extend", async (vite) => {
    vite.config.plugins = vite.config.plugins || [];
    vite.config.plugins.push(_chunkPQGWVB3Gjs.src_default.vite(options));
  });
}


exports.default = nuxt_default;
