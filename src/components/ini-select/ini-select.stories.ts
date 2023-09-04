import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-select';

export default {
    title: 'Core/ini-select',
    component: tagName,
    ...getRenderComponent(tagName, 180)
};

export const Overview = {
    args: {
        placeholder: 'Select an option',
        children: `<option value="fr">🇫🇷 France</option>
<option value="es">🇪🇸 Espagne</option>
<option value="fl">🇫🇮 Finlande</option>
<option value="it">🇮🇹 Italie</option>`
    },
};
