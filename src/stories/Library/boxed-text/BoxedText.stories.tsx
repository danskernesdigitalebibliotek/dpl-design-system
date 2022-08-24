import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { BoxedText, BoxedTextProps } from "./BoxedText";

export default {
  title: "Library / Boxed text",
  component: BoxedText,
  decorators: [withDesign],
  argTypes: {
    text: {
      name: "Text string",
      defaultValue: "I am a boxed line of text!",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4709%3A24976",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof BoxedText>;

const Template: ComponentStory<typeof BoxedText> = (args: BoxedTextProps) => (
  <BoxedText {...args} />
);

export const Default = Template.bind({});
