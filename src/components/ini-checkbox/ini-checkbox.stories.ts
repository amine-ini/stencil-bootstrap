import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-checkbox';

export default {
    title: 'Core/ini-checkbox',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        children: 'Do you want to book a room?'
    },
};
