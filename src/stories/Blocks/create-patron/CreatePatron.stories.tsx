import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import CreatePatron, { CreatePatronProps } from "./CreatePatron";

export default {
  title: "Blocks / Create Patron",
  component: CreatePatron,
  decorators: [withDesign],
  argTypes: {
    headline: {
      name: "Title",
      defaultValue: "Register as patron",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=14631%3A36424&mode=design&t=kNDJGSba8OVIdnRx-1",
    },
  },
};

const Template: ComponentStory<typeof CreatePatron> = (
  args: CreatePatronProps
) => <CreatePatron {...args} />;

export const Default = Template.bind({});
