import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonExpand, { ButtonExpandProps } from "./ButtonExpand";

export default {
  title: "Library / Buttons / Button Expand",
  component: ButtonExpand,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showMore: {
      control: {
        type: "boolean",
      },
      title: {
        control: {
          type: "text",
        },
      },
    },
  },
} as ComponentMeta<typeof ButtonExpand>;

const Template: ComponentStory<typeof ButtonExpand> = (
  args: ButtonExpandProps
) => <ButtonExpand {...args} />;

export const Default = Template.bind({});
Default.args = {
  showMore: false,
};

export const Expand = Template.bind({});
Expand.args = {
  showMore: true,
};
