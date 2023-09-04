import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-input';

export default {
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Overview = {
    args: {
        suffixIcon: 'fa-solid fa-home',
        label: 'We need you informations',
        placeholder: 'This an input placeholder',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
};
