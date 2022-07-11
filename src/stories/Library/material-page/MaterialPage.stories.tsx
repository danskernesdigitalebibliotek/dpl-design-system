import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MaterialPage from "./MaterialPage";

export default {
  title: "Library / Material Page",
  component: MaterialPage,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=416%3A12503",
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
    ctaText: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof MaterialPage>;

const Template: ComponentStory<typeof MaterialPage> = (args) => {
  return <MaterialPage {...args} />;
};

export const Item = Template.bind({});
Item.args = {
  title: "Audrey Hepburn",
  author: "James Joyce (2013)",
  periodikum: false,
  ctaText: "Vi har 8 eksemplarer og 21 står i kø",
  description:
    "Stormandssønnen Arn får hos cisterciensermunkene i Sverige og Danmark den bedste uddannelse, der findes i middelalderens Europa. Men hans lærere aner, at han ikke er bestemt til at være klosterbroder og vil gøre bedre fyldest som Kristi strids... ",
};
