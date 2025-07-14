import { StoryFn, Meta } from "@storybook/react-webpack5";

import PagefoldComp from "./Pagefold";

export default {
  title: "Library / Pagefold",
  component: PagefoldComp,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
    compProps: {
      control: {
        disable: true,
      },
    },
    type: {
      control: {
        type: "select",
      },
    },
    isInheriting: {
      control: {
        type: "boolean",
      },
    },
    isAContainer: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
      },
    },
  },
  args: {
    type: undefined,
    isInheriting: false,
    isAContainer: true,
    size: "medium",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A7941",
    },
    layout: "centered",
  },
} as Meta<typeof PagefoldComp>;

const Template: StoryFn<typeof PagefoldComp> = (args) => (
  <PagefoldComp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isInheriting: false,
};

export const Inherit = Template.bind({});
Inherit.args = {
  isInheriting: true,
};
