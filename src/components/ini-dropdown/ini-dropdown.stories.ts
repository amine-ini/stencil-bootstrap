import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-dropdown';

export default {
    component: tagName,
    ...getRenderComponent(tagName, 180)
};

export const Overview = {
    args: {
        label: 'Select an action',
        outline: true,
        children: `<button>Create new invoice</button>
<button>Duplicate</button>
<button>Delete</button>
<button>Mark as paid</button>`
    },
};
