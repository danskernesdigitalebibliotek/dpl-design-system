import { StoryFn, Meta } from "@storybook/react-webpack5";

import SearchFullText from "./SearchFullText";

export default {
  title: "Library / Search Full Text",
  component: SearchFullText,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=7477-41886&t=0ImS2cbKrXQEOurg-4",
    },
    layout: "fullscreen",
  },
} as Meta<typeof SearchFullText>;

const Template: StoryFn<typeof SearchFullText> = () => <SearchFullText />;

export const Default = Template.bind({});
