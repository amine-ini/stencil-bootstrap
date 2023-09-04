import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-alert';

export default {
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        headerTitle: 'Hello team 🤓',
        children: 'Welcome to the Storybook of StencilJS components in Bootstrap. You can explore each component and play with it 🕹.',
        dismissible: true
    },
};
