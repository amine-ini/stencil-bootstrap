import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-dropdown';

export default {
    component: tagName,
    ...getRenderComponent(tagName, 180)
};

export const Overview = {
    args: {
        label: 'Select country',
        outline: true,
        children: `<span>🇫🇷 France</span>
<span>🇪🇸 Espagne</span>
<span>🇫🇮 Finlande</span>
<span>🇮🇹 Italie</span>`
    },
};
