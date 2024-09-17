import { ComponentStory, ComponentMeta } from "@storybook/react";

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
} as ComponentMeta<typeof SearchFullText>;

const Template: ComponentStory<typeof SearchFullText> = () => (
  <SearchFullText />
);

export const Default = Template.bind({});
