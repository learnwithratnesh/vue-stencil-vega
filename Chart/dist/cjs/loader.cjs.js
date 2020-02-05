'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7bdbc180.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"barData":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
