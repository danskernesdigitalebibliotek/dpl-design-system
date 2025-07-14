import { Meta, StoryFn } from "@storybook/react-webpack5";
import ListDescription from "./ListDescription";
import fakeData from "./ListDescriptionFakeData";

export default {
  title: "Library / Lists / Description",
  component: ListDescription,
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
  args: {
    data: fakeData,
  },
} as Meta<typeof ListDescription>;

const Template: StoryFn<typeof ListDescription> = (args) => {
  return <ListDescription {...args} />;
};

export const Item = Template.bind({});
