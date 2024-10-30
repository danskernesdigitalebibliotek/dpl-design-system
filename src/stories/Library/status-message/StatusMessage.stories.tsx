import { Meta, StoryFn } from "@storybook/react";

import { StatusMessage } from "./StatusMessage";

export default {
  title: "Library / Status Message",
  component: StatusMessage,

  argTypes: {},
  parameters: {},
} as Meta<typeof StatusMessage>;

const Template: StoryFn<typeof StatusMessage> = (args) => (
  <StatusMessage {...args} />
);

export const ShortStatus = Template.bind({});
ShortStatus.args = {
  message: "Handling gennemført.",
};
export const LongStatus = Template.bind({});
LongStatus.args = {
  message:
    "Handling gennemført. Du kan nu consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Prøv igen senere.",
};
