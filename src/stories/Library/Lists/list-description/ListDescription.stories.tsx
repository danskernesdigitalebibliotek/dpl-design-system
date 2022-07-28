import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListDescription from "./ListDescription";
import fakeData from "./ListDescriptionFakeData";

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
      defaultValue: fakeData,
    },
  },
} as ComponentMeta<typeof ListDescription>;

const Template: ComponentStory<typeof ListDescription> = (args) => {
  return <ListDescription {...args} />;
};

export const Item = Template.bind({});
