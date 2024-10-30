import { Meta, StoryFn } from "@storybook/react";

import { ErrorMessage } from "./ErrorMessage";

export default {
  title: "Library / Error Message",
  component: ErrorMessage,

  argTypes: {},
  parameters: {},
} as Meta<typeof ErrorMessage>;

const Template: StoryFn<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const ShortError = Template.bind({});
ShortError.args = {
  message: "Noget gik galt. Prøv igen senere.",
};
export const LongError = Template.bind({});
LongError.args = {
  message:
    "Noget gik galt. Årsagen kunne være consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Prøv igen senere.",
};
