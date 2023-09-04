import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-card';

export default {
    title: 'Core/ini-card',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        headerTitle: 'The header card title',
        children: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum esse est ipsa minus modi necessitatibus non praesentium quasi quod.</p>
        <ini-button>Button 1</ini-button> <ini-button variant="secondary">Button 2</ini-button>`
    },
};
