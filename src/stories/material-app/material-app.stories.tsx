import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MaterialApp from "./material-app";

export default {
  title: "Components / Material App",
  component: MaterialApp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=416%3A12503",
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
    },
    author: {
      control: { type: "text" },
    },
    periodikum: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof MaterialApp>;

const Template: ComponentStory<typeof MaterialApp> = (args) => {
  return <MaterialApp {...args} />;
};

export const Item = Template.bind({});
Item.args = {
  title: "Audrey Hepburn",
  author: "James Joyce (2013)",
  periodikum: false,
};
