import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListDescription from "./ListDescription";

export default {
  title: "Library / Lists / Description",
  component: ListDescription,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=427%3A16644",
    },
  },
  argTypes: {
    data: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof ListDescription>;

const Template: ComponentStory<typeof ListDescription> = (args) => {
  return <ListDescription {...args} />;
};

export const Item = Template.bind({});
Item.args = {
  data: {
    Type: { value: "Bog", type: "standard" },
    Sprog: { value: "Dansk", type: "standard" },
    Bidragsydere: { value: "Karsten Sand Iversen", type: "link" },
    Originaltitel: { value: "Ulysses (1922)", type: "standard" },
    ISBN: { value: "9788763814584", type: "standard" },
    Udgave: { value: "Udgave, 2. oplag (2015)", type: "standard" },
    Omfang: { value: "795 sider", type: "standard" },
    Forlag: { value: "Rosinante", type: "standard" },
    Målgruppe: { value: "Voksenmateriale", type: "standard" },
  },
};
