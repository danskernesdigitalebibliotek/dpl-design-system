import { StoryFn, Meta } from "@storybook/react";

import { ButtonShare } from "./button-share";

export default {
  title: "Library / Buttons / Button Share",
  component: ButtonShare,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ewyxJIi7OGXT5ekgDgPK46/KK-bib-deling?node-id=2-2&node-type=frame&t=08x3dd2K8R0fQTaP-0",
    },
    layout: "centered",
  },
  argTypes: {
    href: {
      control: "text",
    },
    textFacebook: {
      control: "text",
    },
    textCopy: {
      control: "text",
    },
  },
  args: {
    href: "https://www.facebook.com",
    textFacebook: "Del på Facebook",
    textCopy: "Kopier link",
  },
} as Meta<typeof ButtonShare>;

const Template: StoryFn<typeof ButtonShare> = (args) => (
  <ButtonShare {...args} />
);

export const share = Template.bind({});
