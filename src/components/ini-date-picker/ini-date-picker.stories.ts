import {getRenderComponent} from "../../utils/utils";

export default {
    title: 'Core/ini-date-picker',
    component: 'ini-date-picker',
    ...getRenderComponent('ini-date-picker')
};

export const Primary = {
    args: {
        dateFormat: 'dd/mm/yyyy',
        label: 'Your birthday',
        placeholder: 'Select a date',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis.'
    },
};
