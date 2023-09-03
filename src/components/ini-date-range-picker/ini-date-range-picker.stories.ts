import {getRenderComponent} from "../../utils/utils";

export default {
    title: 'Core/ini-date-range-picker',
    component: 'ini-date-range-picker',
    ...getRenderComponent('ini-date-range-picker')
};

export const Primary = {
    args: {
        dateFormat: 'dd/mm/yyyy',
        label: 'When will you travel?',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis.',
        startPlaceholder: 'Go date',
        endPlaceholder: 'Return date',
    },
};
