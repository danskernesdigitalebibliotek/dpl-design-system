import { StoryFn, Meta } from "@storybook/react-webpack5";

import Page from "./Page";

export default {
  title: "Blocks / Pages",
  component: Page,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39243&mode=dev",
    },
  },
  args: {
    tags: ["dans", "contemporary", "modern", "scenekunst", "digt", "3-8 årige"],
  },
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;
export const Default = Template.bind({});
