import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar as ProgressBarComp } from "./progressBar";

export default {
  title: "Library / Progress bar",
  component: ProgressBarComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
    layout: "fullscreen",
  },
  argTypes: {
    amount: {
      defaultValue: 1,
    },
    fullAmount: {
      defaultValue: 5,
    },
    title: {
      defaultValue: "Ebøger",
    },
    outOf: {
      defaultValue: "ud af",
    },
  },
} as ComponentMeta<typeof ProgressBarComp>;

const Template: ComponentStory<typeof ProgressBarComp> = (args) => (
  <ProgressBarComp {...args} />
);

export const ProgressBar = Template.bind({});
