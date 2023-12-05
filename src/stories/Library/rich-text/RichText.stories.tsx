import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { RichText } from "./RichText";

export default {
  title: "Library / Rich Text",
  component: RichText,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7880-59101&mode=design&t=dMcJmvsouH6erxzA-4",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = () => <RichText />;

export const Default = Template.bind({});
