import "../www/build/stencil-bootstrap.css";
import "../www/build/stencil-bootstrap.esm";

import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs/docs.json';

if (docJson) setStencilDocJson(docJson);


/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {hideNoControlsWarning: true},
    },
};

export default preview;
