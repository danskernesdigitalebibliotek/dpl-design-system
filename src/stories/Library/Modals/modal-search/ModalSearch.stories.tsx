import { Meta, StoryFn } from "@storybook/react";

import { ModalSearch } from "./ModalSearch";

export default {
  title: "Library / Modals / Search",
  component: ModalSearch,

  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A14335",
    },
  },
} as Meta<typeof ModalSearch>;

const Template: StoryFn<typeof ModalSearch> = (args) => (
  <ModalSearch {...args} />
);

export const Search = Template.bind({});
Search.args = {
  showModal: true,
};
