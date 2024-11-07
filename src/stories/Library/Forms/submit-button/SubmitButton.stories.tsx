import { StoryFn, Meta } from "@storybook/react";

import SubmitButton from "./SubmitButton";

export default {
  title: "Library / Forms / Submit Button",
  component: SubmitButton,
  argTypes: {
    buttonText: {
      control: "text",
    },
  },
  args: {
    buttonText: "Save changes",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66174",
    },
    layout: "padded",
  },
} as Meta<typeof SubmitButton>;

const Template: StoryFn<typeof SubmitButton> = (args) => (
  <div className="dpl-form">
    <SubmitButton {...args} />
  </div>
);

export const Default = Template.bind({});
