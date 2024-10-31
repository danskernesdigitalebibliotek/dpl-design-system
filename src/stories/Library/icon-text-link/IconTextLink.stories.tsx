import { StoryFn } from "@storybook/react";

import IconTextLink, { IconTextLinkProps } from "./IconTextLink";

export default {
  title: "Library / Links / Icon Text Link",
  component: IconTextLink,
  argTypes: {
    text: {
      name: "Text",
      control: { type: "text" },
    },
    icon: {
      name: "Icon",
      control: { type: "text" },
    },
  },
  args: {
    text: "Read in English",
    icon: "england",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/c40knshyvc1lVmv24qmv9X/DDF---brugeroprettelse-side?type=design&node-id=1%3A2847&mode=dev&t=eTEUUIn7FqzU2urM-1",
    },
    layout: "centered",
  },
};

const Template: StoryFn<typeof IconTextLink> = (args: IconTextLinkProps) => (
  <IconTextLink {...args} />
);

export const Default = Template.bind({});
