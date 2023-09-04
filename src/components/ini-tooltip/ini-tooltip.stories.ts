import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-tooltip';

export default {
    title: 'Core/ini-tooltip',
    component: tagName,
    ...getRenderComponent(tagName, 0, 85)
};

export const Overview = {
    args: {
        children: "You can hover me to display the tooltip component",
        titleContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus molestiae natus nulla possimus provident."
    },
};
