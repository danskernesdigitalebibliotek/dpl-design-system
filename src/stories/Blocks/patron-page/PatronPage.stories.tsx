import { Meta, StoryFn } from "@storybook/react";
import PatronPage from "./PatronPage";

export default {
  title: "Blocks / Patron Page",
  component: PatronPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?type=design&node-id=1239-66174&mode=design",
    },
    layout: "fullscreen",
  },
  argTypes: {
    skeletonVersion: {
      control: "boolean",
    },
  },
  args: {
    skeletonVersion: false,
  },
} as Meta<typeof PatronPage>;

const Template: StoryFn<typeof PatronPage> = (args) => {
  return <PatronPage {...args} />;
};

export const Default = Template.bind({});

export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
