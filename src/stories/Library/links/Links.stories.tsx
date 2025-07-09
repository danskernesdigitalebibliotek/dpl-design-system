import { StoryFn, Meta } from "@storybook/react-webpack5";

import { Links as LinksComp } from "./Links";

export default {
  title: "Library / Links / Text link",
  component: LinksComp,
  argTypes: {
    href: { control: "text" },
    linkText: { control: "text" },
  },
  args: {
    href: "/",
    linkText: "Hello world",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
    layout: "centered",
  },
} as Meta<typeof LinksComp>;

const Template: StoryFn<typeof LinksComp> = (args) => <LinksComp {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "/",
  linkText: "Hello world",
};
