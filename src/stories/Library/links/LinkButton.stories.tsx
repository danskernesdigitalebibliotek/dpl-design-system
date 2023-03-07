import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { LinkButton } from "./LinkButton";

export default {
  title: "Library / Links / button link",
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
        type: "select",
        options: ["none", "default", "external-link"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["outline", "filled"],
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "https://www.google.dk",
  text: "external link",
  buttonType: "external-link",
  variant: "filled",
  size: "medium",
};
