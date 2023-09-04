import {getRenderComponent} from "../../utils/utils";

export default {
    component: 'ini-date-picker',
    ...getRenderComponent('ini-date-picker', 300)
};

export const Overview = {
    args: {
        dateFormat: 'dd/mm/yyyy',
        label: 'Your birthday',
        placeholder: 'Select a date',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis.'
    },
};
