import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import SubmitButton from "./SubmitButton";

export default {
  title: "Library / Forms / Submit Button",
  component: SubmitButton,
  decorators: [withDesign],
  argTypes: {
    buttonText: {
      defaultValue: "Save changes",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66174",
    },
    layout: "padded",
  },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <div className="dpl-form">
    <SubmitButton {...args} />
  </div>
);

export const Default = Template.bind({});
