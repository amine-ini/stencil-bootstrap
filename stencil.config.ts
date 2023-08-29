import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import prefixer from 'postcss-prefixer';
import { postcss } from '@stencil-community/postcss';
import PrefixWrap from 'postcss-prefixwrap';

export const config: Config = {
  namespace: 'stencil-bootstrap',
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
      plugins: [
        prefixer({prefix: 'ini-'}),
        PrefixWrap(".hydrated:not(html)")
      ]
    })
  ]
};

// https://www.postcss.parts/ <-- all postcss plugins
