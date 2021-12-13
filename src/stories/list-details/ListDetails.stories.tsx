import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListDetails } from "./ListDetails";

export default {
  title: "Components / List - Details",
  component: ListDetails,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ListDetails>;

const Template: ComponentStory<typeof ListDetails> = (args) => (
  <ListDetails {...args} />
);

export const Item1 = Template.bind({});
Item1.args = {
  title: "Afleveres",
  date: "31.11.21",
};
