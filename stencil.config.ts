import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import prefixer from 'postcss-prefixer';
import { postcss } from '@stencil-community/postcss';

export const config: Config = {
  namespace: 'test-remove',
  outputTargets: [
    {
      type: 'www'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/global.scss'],

    }),
    postcss({
      plugins: [prefixer({prefix: 'ini-'})]
    })
  ]
};
