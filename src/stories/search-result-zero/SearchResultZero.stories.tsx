import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultZero } from "./SearchResultZero";

export default {
  title: "Components / Search Result Zero",
  component: SearchResultZero,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=1498%3A17141",
    },
  },
  argTypes: {
    searchHelpTitle: {
      control: { type: "text" },
      defaultValue: "Prøv lorem ipsum... [hjælp til søgning]",
    },
    linkName: {
      control: { type: "text" },
      defaultValue: "bibliotekvagten.dk",
    },
  },
} as ComponentMeta<typeof SearchResultZero>;

const Template: ComponentStory<typeof SearchResultZero> = (args) => {
  return <SearchResultZero {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
