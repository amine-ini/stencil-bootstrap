import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-badge';

export default {
    title: 'Core/ini-badge',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Primary = {
    args: {
        children: 'Storybook',
        variant: 'primary'
    },
};
