import { ComponentMeta, ComponentStory } from "@storybook/react";
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
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof PatronPage>;

const Template: ComponentStory<typeof PatronPage> = (args) => {
  return <PatronPage {...args} />;
};

export const Default = Template.bind({});

export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
