import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ListButton } from "./ListButtons";

export default {
  title: "Library / List buttons",
  component: ListButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A30620",
    },
  },
  argTypes: {
    buttonLabel: {
      control: "text",
      defaultValue: "Forny alle",
    },
    header: {
      control: "text",
      defaultValue: "Forny lån",
    },
    number: {
      control: "text",
      defaultValue: "10",
    },
  },
} as ComponentMeta<typeof ListButton>;

const Template: ComponentStory<typeof ListButton> = (args) => (
  <ListButton {...args} />
);

export const ListButtonsExample = Template.bind({});
