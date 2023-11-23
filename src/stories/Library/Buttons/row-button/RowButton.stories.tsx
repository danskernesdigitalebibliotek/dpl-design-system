import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import RowButton from "./RowButton";

export default {
  title: "Library / Buttons / RowButton",
  component: RowButton,
  decorators: [withDesign],
  argTypes: {
    label: {
      defaultValue: "Netmedier",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7880%3A59070&mode=dev",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof RowButton>;

const Template: ComponentStory<typeof RowButton> = (args) => (
  <RowButton {...args} />
);

export const Default = Template.bind({});
