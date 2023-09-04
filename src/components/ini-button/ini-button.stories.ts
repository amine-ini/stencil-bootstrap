import {getRenderComponent} from "../../utils/utils";

export default {
    title: 'Core/ini-button',
    component: 'ini-button',
    ...getRenderComponent('ini-button')
};

export const Overview = {
    args: {
        variant: "primary",
        size: "medium",
        outline: false,
        disabled: false,
        children: 'Button 🙂',
    },
};
