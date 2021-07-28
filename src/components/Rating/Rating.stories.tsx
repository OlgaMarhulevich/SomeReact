import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
    argTypes: {},
} as ComponentMeta<typeof Rating>;

/*export const EmptyRating = () => <Rating value={0} onClick={() => {}}/>*/ /*not controlled*/

const Template: ComponentStory<typeof Rating> = (args) => {
    return  <Rating {...args}/>;
}

export const EmptyStars = Template.bind({});
EmptyStars.args = {
    value: 0,
    onClick: () => {}
};

const Template2: ComponentStory<typeof Rating> = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return  <Rating value={rating} onClick={setRating}/>;
};
export const ChangingRating = Template2.bind({});


