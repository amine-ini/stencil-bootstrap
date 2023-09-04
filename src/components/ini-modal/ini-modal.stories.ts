import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-modal';

export default {
    title: 'Core/ini-modal',
    component: tagName,
    ...getRenderComponent('ini-modal', 350, 10, '<ini-button onclick="this.nextElementSibling.open=true">Open modal</ini-button>')
};

export const Overview = {
    args: {
        headerTitle: 'Title of beautiful Modal',
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eveniet.',
        closeLabel: 'Close',
        submitLabel: 'Save'
    },
};
