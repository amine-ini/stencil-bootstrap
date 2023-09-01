import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-tooltip';

export default {
    title: 'Core/ini-tooltip',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Primary = {
    args: {
        children: "You can hover me to display the tooltip component",
        titleContent: "Hello i'm tooltip"
    },
};
