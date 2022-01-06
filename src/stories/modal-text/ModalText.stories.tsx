import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalText } from "./ModalText";

export default {
  title: "Components / Modal - Text",
  component: ModalText,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ModalText>;

const Template: ComponentStory<typeof ModalText> = (args) => (
  <ModalText {...args} />
);

export const Search = Template.bind({});
Search.args = {
  showModal: true,
};
