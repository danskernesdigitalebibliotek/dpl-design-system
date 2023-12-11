import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Medias } from "./Medias";

export default {
  title: "Library / Medias",
  component: Medias,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39100&mode=design&t=sPixP2kXWpSn7p74-4",
    },
  },
} as ComponentMeta<typeof Medias>;

const Template: ComponentStory<typeof Medias> = (args) => (
  <Medias {...args} />
);
