import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {},
} as ComponentMeta<typeof Accordion>;

const callbackAction = action('item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => {
    return <Accordion {...args}/>;
}

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClickCallback: callbackAction,
    items: [{title: 'olga', value: 1}, {title: 'anna', value: 2}],
    onClick: callbackAction
};

const Template2: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion onClick={() => alert('some callback')}
                      items={[{title: 'olga', value: 1}, {title: 'anna', value: 2}]}
                      titleValue={'Users'} collapsed={collapsed}
                      onClickCallback={() => setCollapsed(!collapsed)}/>;
};
export const ChangingAccordion = Template2.bind({});
