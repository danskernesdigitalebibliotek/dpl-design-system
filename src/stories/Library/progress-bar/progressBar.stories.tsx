import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar as ProgressBarComp } from "./progressBar";

export default {
  title: "Library / Progress bar",
  component: ProgressBarComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
    layout: "padded",
  },
  argTypes: {
    amount: { control: "number" },
    fullAmount: { control: "number" },
    title: { control: "text" },
    outOf: { control: "text" },
  },
  args: {
    amount: 1,
    fullAmount: 5,
    title: "Ebøger",
    outOf: "ud af",
  },
} as Meta<typeof ProgressBarComp>;

const Template: StoryFn<typeof ProgressBarComp> = (args) => (
  <ProgressBarComp {...args} />
);

export const ProgressBar = Template.bind({});
