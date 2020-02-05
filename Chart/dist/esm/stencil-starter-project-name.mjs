import { p as patchBrowser, b as bootstrapLazy } from './core-6582c7eb.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"barData":[32]}]]]], options);
});
