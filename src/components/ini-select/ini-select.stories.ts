import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-select';

export default {
    title: 'Core/ini-select',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Primary = {
    args: {
        placeholder: 'Select an option',
        children: `<option>🇫🇷 France</option>
<option>🇪🇸 Espagne</option>
<option>🇫🇮 Finlande</option>
<option>🇮🇹 Italie</option>`
    },
};
