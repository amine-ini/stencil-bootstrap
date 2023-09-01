import {parseArgs} from "../../utils/utils";

const tagName = 'ini-modal';

export default {
    title: 'Core/ini-modal',
    component: tagName,
    render: ({children, ...args}) => `
    <ini-button onclick="this.nextElementSibling.open=true">Open modal</ini-button>
    <ini-modal ${parseArgs(args)}>${children}</ini-modal>`
};

export const Primary = {
    args: {
        headerTitle: 'Title of beautiful Modal',
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eveniet.',
        closeLabel: 'Close'
    },
};
