import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import IconTextLink, { IconTextLinkProps } from "./IconTextLink";

export default {
  title: "Library / Links / Icon Text Link",
  component: IconTextLink,
  decorators: [withDesign],
  argTypes: {
    text: {
      name: "Text",
      defaultValue: "Read in English",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/c40knshyvc1lVmv24qmv9X/DDF---brugeroprettelse-side?type=design&node-id=1%3A2847&mode=dev&t=eTEUUIn7FqzU2urM-1",
    },
    layout: "centered",
  },
};

const Template: ComponentStory<typeof IconTextLink> = (
  args: IconTextLinkProps
) => <IconTextLink {...args} />;

export const Default = Template.bind({});
