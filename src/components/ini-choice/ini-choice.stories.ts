import {getRenderComponent} from "../../utils/utils";

const tagName = 'ini-choice';

export default {
    component: tagName,
    ...getRenderComponent(tagName),
};

export const Overview = {
    args: {
        children: 'Do you want to book a room?'
    },
};
