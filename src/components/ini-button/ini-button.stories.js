import {parseArgs} from "../../utils/utils";

export default {
    title: 'Core/IniButton',
    render: ({child, ...args}) => {
        return `<ini-button ${parseArgs(args)}>${child}</ini-button>`;
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'danger', 'success', 'info'],
            control: { type: 'select' },
        }
    },
};

export const Primary = {
    args: {
        variant: "primary",
        disabled: false,
        child: 'Button 🙂',
    },
};
