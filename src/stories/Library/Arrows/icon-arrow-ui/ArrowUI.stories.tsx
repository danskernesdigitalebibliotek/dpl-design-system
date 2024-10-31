import { Meta, StoryFn } from "@storybook/react";
import { IconArrow as ArrowComp } from "./ArrowUI";

export default {
  title: "Library / Arrows / Arrow UI",
  component: ArrowComp,
  argTypes: {
    direction: {
      control: { type: "select" },
    },
    hover: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
    },
  },
  args: {
    direction: "right",
    hover: true,
    size: "large",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A3146",
    },
    layout: "centered",
  },
} as Meta<typeof ArrowComp>;

const Template: StoryFn<typeof ArrowComp> = (props) => (
  <ArrowComp {...props}>
    <div className="internal-arrow-box">
      To animate the arrow on hover, we have to embed the svg inline
    </div>
  </ArrowComp>
);

export const ArrowUI = Template.bind({});
