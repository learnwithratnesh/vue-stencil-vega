'use strict';

const core = require('./core-7bdbc180.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"barData":[32]}]]]], options);
});
