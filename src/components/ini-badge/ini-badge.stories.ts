import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-badge';

export default {
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        children: 'Storybook',
        variant: 'primary'
    },
};
