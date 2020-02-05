import { a as patchEsm, b as bootstrapLazy } from './core-6582c7eb.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component",{"barData":[32]}]]]], options);
  });
};

export { defineCustomElements };
