import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import {postcss} from '@stencil-community/postcss';
import PrefixWrap from 'postcss-prefixwrap';
import prefixerClass from 'postcss-prefixer';
import prefixSelector from 'postcss-prefix-selector';

const iniPrefix = 'ini-';
const protectedRules = [
    'ts-' // for TomSelect => ini-select
]

export const config: Config = {
    namespace: 'stencil-bootstrap',
    globalStyle: 'src/global/reset.scss',
    outputTargets: [
        {
            type: 'www'
        },
        {
            type: 'docs-json',
            file: 'docs/docs.json'
        }
    ],
    plugins: [
        sass({
            injectGlobalPaths: ['src/global/global.scss']
        }),
        postcss({
            plugins: [
                prefixerClass({prefix: iniPrefix, ignore: [/ini-/]}),
                PrefixWrap("[data-webcomponent]", {ignoredSelectors: [':root']}),
                prefixSelector({
                    prefix: '',
                    transform: (_, selector) => {
                        if (protectedRules.some(v => selector.indexOf(v) > -1)) {
                            return selector.replaceAll(iniPrefix, "");
                        }
                        return selector;
                    }
                })
            ]
        }),
    ]
};

// https://www.postcss.parts/ <-- all postcss plugins
