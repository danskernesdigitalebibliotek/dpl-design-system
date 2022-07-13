import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import IconButton from "./IconButton";

export default {
  title: "Library / Buttons / Button icon",
  component: IconButton,
  decorators: [withDesign],
  argTypes: {
    src: {
      defaultValue: "icons/collection/Menu.svg",
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (props) => (
  <IconButton {...props} />
);
export const IconButtonExample = Template.bind({});
