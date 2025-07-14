import { StoryFn } from "@storybook/react-webpack5";

import {
  AdvancedSearch as AdvancedSearchComp,
  AdvancedSearchProps,
} from "./AdvancedSearch";

export default {
  title: "Blocks / Advanced Search",
  component: AdvancedSearchComp,
  argTypes: {
    inputPlaceholder: {
      name: "Input placeholder",
      control: { type: "text" },
    },
    inputAmount: {
      name: "Amount of input rows",
      control: { type: "number" },
    },
    cqlPreviewText: {
      name: "CQL preview text",
      control: { type: "text" },
    },
    isCqlSearch: {
      name: "Is CQL search?",
      control: { type: "boolean" },
    },
  },
  args: {
    inputPlaceholder: "Søgeterm",
    inputAmount: 2,
    cqlPreviewText:
      "title = harry potter AND subtitle = and the philosophers stone",
    isCqlSearch: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=9759%3A31313&mode=design&t=G77riF8Vp9iyZ7pP-1",
    },
  },
};

const Template: StoryFn<typeof AdvancedSearchComp> = (
  args: AdvancedSearchProps,
) => <AdvancedSearchComp {...args} />;

export const AdvancedSearch = Template.bind({});

export const CqlSearch = Template.bind({});
CqlSearch.args = {
  isCqlSearch: true,
};
