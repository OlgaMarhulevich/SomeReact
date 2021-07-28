import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {},
} as ComponentMeta<typeof OnOff>;


const Template: ComponentStory<typeof OnOff> = (args) => {
    return  <OnOff {...args}/>;
}

export const OnSelected = Template.bind({});
OnSelected.args = {
    on: true,
    setOn: action('on or off is clicked')
};

const Template2: ComponentStory<typeof OnOff> = () => {
    const [onOff, setOnOff] = useState<boolean>(false)
    return  <OnOff on={onOff} setOn={setOnOff}/>;
};
export const ChangingOnOff = Template2.bind({});
