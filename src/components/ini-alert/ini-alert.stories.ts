import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-alert';

export default {
    title: 'Core/ini-alert',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Primary = {
    args: {
        headerTitle: 'Hello team 🤓',
        children: 'Bienvenue, sur le Storybook des composants StencilJS en Bootstrap.',
        dismissible: true
    },
};
