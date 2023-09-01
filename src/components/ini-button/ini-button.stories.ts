import {storiesMeta} from "../../utils/utils";

export default {
    title: 'Core/ini-button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'danger', 'success', 'info', 'warning'],
            control: { type: 'select' },
            description: 'Choose the variant of the button'
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
            description: 'Choose the size of the button'
        },
        disabled: {
            description: 'Disable state of button'
        }
    },
    ...storiesMeta({tag: 'ini-button', docDescription: 'The control button.'})
};

export const Primary = {
    args: {
        variant: "primary",
        size: "medium",
        outline: false,
        disabled: false,
        children: 'Button 🙂',
    },
};
