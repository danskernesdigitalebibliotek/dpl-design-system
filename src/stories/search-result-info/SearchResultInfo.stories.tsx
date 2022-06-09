import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultInfo } from "./SearchResultInfo";

export default {
  title: "Components / Search Result Info",
  component: SearchResultInfo,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=5060%3A24106",
    },
  },
  argTypes: {
    linkName: {
      control: { type: "text" },
      defaultValue: "bibliotekets hjemmeside",
    },
    linkTotalResults: {
      control: { type: "text" },
      defaultValue: "8",
    },
  },
} as ComponentMeta<typeof SearchResultInfo>;

const Template: ComponentStory<typeof SearchResultInfo> = (args) => {
  return <SearchResultInfo {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
