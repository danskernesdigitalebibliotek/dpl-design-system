import { Meta, StoryFn } from "@storybook/react-webpack5";

import DialogPlayGround from "./DialogPlayGround";

export default {
  title: "Library / Dialog",
  component: DialogPlayGround,
} as Meta<typeof DialogPlayGround>;

const Template: StoryFn<typeof DialogPlayGround> = () => <DialogPlayGround />;

export const Default = Template.bind({});
