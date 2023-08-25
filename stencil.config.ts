import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-remove',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'docs-readme',
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
