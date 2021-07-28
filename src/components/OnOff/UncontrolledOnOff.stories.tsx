import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'Uncontrolled/UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {},
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => {
    return  <UncontrolledOnOff {...args}/>;
}

export const OnSelected = Template.bind({});
OnSelected.args = {
    onOrOff: on => {}
};
