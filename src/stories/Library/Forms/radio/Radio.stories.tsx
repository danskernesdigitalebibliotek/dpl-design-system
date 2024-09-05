import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { RadioDrupal } from "./RadioDrupal";

export default {
  title: "Library / Forms / Radio",
  component: RadioDrupal,
  decorators: [withDesign],
  argTypes: {
    legend: {
      control: {
        type: "text",
        defaultValue: "This is a legend.",
      },
    },
    description: {
      control: {
        type: "text",
        defaultValue: "This is a description.",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof RadioDrupal>;

const Template: ComponentStory<typeof RadioDrupal> = (args) => (
  <RadioDrupal {...args} />
);

export const drupalRadio = Template.bind({});
drupalRadio.args = {
  legend: "Try this radio",
  description: "This is a description.",
};
