import { StoryFn } from "@storybook/react";

import RegistrationPage, { RegistrationPageProps } from "./RegistrationPage";

export default {
  title: "Blocks / Registration Page",
  component: RegistrationPage,

  argTypes: {
    headline: {
      name: "Headline",
      defaultValue: "User registration",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/c40knshyvc1lVmv24qmv9X/DDF---brugeroprettelse-side?type=design&node-id=1%3A2847&mode=dev&t=eTEUUIn7FqzU2urM-1",
    },
  },
};

const Template: StoryFn<typeof RegistrationPage> = (
  args: RegistrationPageProps,
) => <RegistrationPage {...args} />;

export const Default = Template.bind({});
export const OnlyOneSection = Template.bind({});
OnlyOneSection.args = {
  singleSection: true,
};
