import { Meta, StoryFn } from "@storybook/react-webpack5";
import { MaterialMainfestationItem } from "./MaterialMainfestationItem";

export default {
  title: "Blocks / Material Manifestation Item",
  component: MaterialMainfestationItem,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=427%3A16644",
    },
  },
  argTypes: {
    title: { control: { type: "text" } },
    author: { control: { type: "text" } },
    year: { control: { type: "text" } },
    detailsData: { control: { type: "object" } },
  },
  args: {
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
    detailsData: {
      Type: { value: ["Bog"], type: "standard" },
      Sprog: { value: ["Dansk"], type: "standard" },
      Bidragsydere: { value: ["Karsten Sand Iversen"], type: "link" },
      Originaltitel: { value: ["Ulysses (1922)"], type: "standard" },
      ISBN: { value: ["9788763814584"], type: "standard" },
      Udgave: { value: ["Udgave, 2. oplag (2015)"], type: "standard" },
      Omfang: { value: ["795 sider"], type: "standard" },
      Forlag: { value: ["Rosinante"], type: "standard" },
      Målgruppe: { value: ["Voksenmateriale"], type: "standard" },
    },
  },
} as Meta<typeof MaterialMainfestationItem>;

const Template: StoryFn<typeof MaterialMainfestationItem> = (args) => {
  return <MaterialMainfestationItem {...args} />;
};

export const Item = Template.bind({});
