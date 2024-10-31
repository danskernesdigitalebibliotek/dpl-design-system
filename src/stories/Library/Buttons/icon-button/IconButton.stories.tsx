import { StoryFn, Meta } from "@storybook/react";
import IconButton from "./IconButton";

export default {
  title: "Library / Buttons / Button icon",
  component: IconButton,
  argTypes: {
    src: {
      control: "text",
    },
    altText: {
      control: "text",
    },
  },
  args: {
    src: "icons/collection/Menu.svg",
    altText: "Denne knap sorterer listen efter dato",
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
