import "../www/build/stencil-bootstrap.css";
import "../www/build/stencil-bootstrap.esm";

import {extractArgTypes, extractComponentDescription, setStencilDocJson} from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs/docs.json';

if (docJson) setStencilDocJson(docJson);


/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {hideNoControlsWarning: true},
        // docs: {
        //     extractArgTypes,
        //     extractComponentDescription,
        // },
    },
};

export default preview;
