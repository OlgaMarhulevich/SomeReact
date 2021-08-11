import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    return <Select {...args}/>;
}

export const SelectChanging = Template.bind({});
SelectChanging.args = {
    value: 'none',
    onChange: () => {
        action('value changing')

    },
    items: [
        {title: 'olga', value: 1},
        {title: 'anna', value: 2},
        {title: 'john', value: 3},
        {title: 'nick', value: 4}
    ]
};



