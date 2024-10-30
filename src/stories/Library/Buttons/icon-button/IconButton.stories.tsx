import { StoryFn, Meta } from "@storybook/react";

import IconButton from "./IconButton";

export default {
  title: "Library / Buttons / Button icon",
  component: IconButton,

  argTypes: {
    src: {
      defaultValue: "icons/collection/Menu.svg",
      control: "text",
    },
    altText: {
      defaultValue: "Denne knap sorterer listen efter dato",
      control: "text",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A30620",
    },
    layout: "centered",
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (props) => (
  <IconButton {...props} />
);
export const IconButtonExample = Template.bind({});
