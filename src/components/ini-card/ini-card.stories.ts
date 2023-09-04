import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-card';

export default {
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        headerTitle: 'The header card title',
        children: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum esse est ipsa minus modi necessitatibus non praesentium quasi quod.</p>
        <ini-button size="small" outline>Button 1</ini-button> <ini-button size="small" outline variant="secondary">Button 2</ini-button>`
    },
};
