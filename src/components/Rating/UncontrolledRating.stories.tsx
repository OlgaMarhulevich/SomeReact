import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'Uncontrolled/UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {},
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => {
    return  <UncontrolledRating {...args}/>;
}

export const Rating = Template.bind({});
Rating.args = {
    defaultValue: 3
};


