import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { LinkButton } from "./LinkButton";

export default {
  title: "Library / Links / Linkbutton",
  component: LinkButton,
  decorators: [withDesign],
  argTypes: {
    href: {
      control: {
        type: "text",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    buttonType: {
      control: {
        type: "radio",
      },
    },
    variant: {
      control: {
        type: "radio",
      },
    },
    size: {
      control: {
        type: "radio",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1400%3A5720&t=AFapWF57SlCwQ8ME-4",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const External = Template.bind({});
External.args = {
  href: "https://www.google.dk",
  text: "external link",
  buttonType: "external-link",
  size: "medium",
};

export const ExternalFilled = Template.bind({});
ExternalFilled.args = {
  href: "https://www.google.dk",
  text: "external link",
  buttonType: "external-link",
  variant: "filled",
  size: "medium",
};
