import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Event from "./EventPage";

export default {
  title: "Blocks / Event page",
  component: Event,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Fernisering Modern Dans",
      type: "string",
    },
    date: {
      defaultValue: "06 Dec - 12 Jan 2022",
      type: "string",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39846&mode=dev",
    },
  },
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const Default = Template.bind({});
