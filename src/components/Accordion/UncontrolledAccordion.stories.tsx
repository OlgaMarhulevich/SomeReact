import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';

export default {
    title: 'Uncontrolled/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {},
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => {
    return  <UncontrolledAccordion {...args}/>;
}

export const CollapsedUncontrolledAccordion = Template.bind({});
CollapsedUncontrolledAccordion.args = {
    titleValue: 'Menu'
};

