import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-dropdown';

export default {
    title: 'Core/ini-dropdown',
    component: tagName,
    ...getRenderComponent(tagName)
};

export const Primary = {
    args: {
        label: 'Select country',
        outline: true,
        children: `<span>🇫🇷 France</span>
<span>🇪🇸 Espagne</span>
<span>🇫🇮 Finlande</span>
<span>🇮🇹 Italie</span>`
    },
};
