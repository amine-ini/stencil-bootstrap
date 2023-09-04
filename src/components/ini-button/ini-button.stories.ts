import {getRenderComponent} from "../../utils/utils";

export default {
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
