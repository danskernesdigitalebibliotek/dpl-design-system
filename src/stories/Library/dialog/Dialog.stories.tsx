import { ComponentMeta, ComponentStory } from "@storybook/react";

import DialogPlayGround from "./DialogPlayGround";

export default {
  title: "Library / Dialog",
  component: DialogPlayGround,
} as ComponentMeta<typeof DialogPlayGround>;

const Template: ComponentStory<typeof DialogPlayGround> = () => (
  <DialogPlayGround />
);

export const Default = Template.bind({});
