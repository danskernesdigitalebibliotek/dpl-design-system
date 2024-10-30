import { StoryFn, Meta } from "@storybook/react";

import Textarea from "./Textarea";

export default {
  title: "Library / Forms / Textarea",
  component: Textarea,

  argTypes: {
    id: {
      defaultValue: "id",
    },
    name: {
      defaultValue: "name",
    },
    label: {
      defaultValue: "Besked",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66174",
    },
    layout: "padded",
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => (
  <div className="dpl-form">
    <Textarea {...args} />
  </div>
);

export const Default = Template.bind({});
