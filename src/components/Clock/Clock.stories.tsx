import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Components/Clock',
    component: Clock,
    argTypes: {},
} as ComponentMeta<typeof Clock>;

const Template2: ComponentStory<typeof Clock> = () => {
    return <Clock />;
};
export const ClockTest = Template2.bind({});