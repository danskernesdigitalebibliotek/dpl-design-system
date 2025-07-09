import { StoryFn } from "@storybook/react-webpack5";
import { PromoTitle } from "./PromoTitle";

type PromoTitleProps = typeof PromoTitle;

export default {
  title: "Library / PromoTitle",
  component: PromoTitle,
  argTypes: {
    libraryName: { control: "text" },
    text: { control: "text" },
    variant: { control: "radio", options: ["wide", "narrow"] },
  },
  args: {
    libraryName: "Hjørring",
    text: "Inspiration",
    variant: "wide",
  },
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn<PromoTitleProps> = (args) => <PromoTitle {...args} />;

export const Wide = Template.bind({});

export const Narrow = Template.bind({});

Narrow.args = {
  variant: "narrow",
};
