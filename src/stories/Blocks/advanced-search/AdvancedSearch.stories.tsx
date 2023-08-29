import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import {
  AdvancedSearch as AdvancedSearchComp,
  AdvancedSearchProps,
} from "./AdvancedSearch";

export default {
  title: "Blocks / Advanced Search",
  component: AdvancedSearchComp,
  decorators: [withDesign],
  argTypes: {
    inputPlaceholder: {
      name: "Input placeholder",
      defaultValue: "Søgeterm",
      control: { type: "text" },
    },
    inputAmount: {
      name: "Amount of input rows",
      defaultValue: 2,
      control: { type: "number" },
    },
    cqlPreviewText: {
      name: "CQL preview text",
      defaultValue:
        "title = harry potter AND subtitle = and the philosophers stone",
      control: { type: "text" },
    },
    isCqlSearch: {
      name: "Is CQL search?",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=9759%3A31313&mode=design&t=G77riF8Vp9iyZ7pP-1",
    },
  },
};

const Template: ComponentStory<typeof AdvancedSearchComp> = (
  args: AdvancedSearchProps
) => <AdvancedSearchComp {...args} />;

export const AdvancedSearch = Template.bind({});

export const CqlSearch = Template.bind({});
CqlSearch.args = {
  isCqlSearch: true,
};
