import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Multiselect as MultiselectComp } from "./Multiselect";

export default {
  title: "Library / Dropdown / Multiselect",
  component: MultiselectComp,
  decorators: [withDesign],
  argTypes: {
    options: {
      defaultValue: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      control: {
        type: "array",
      },
    },
    isOpen: {
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=9759%3A31313&mode=design&t=TmGJu5BAOnJAi4UR-1",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof MultiselectComp>;

const Template: ComponentStory<typeof MultiselectComp> = (args) => (
  <div className="fake-box">
    <MultiselectComp {...args} />
  </div>
);

export const Multiselect = Template.bind({});
