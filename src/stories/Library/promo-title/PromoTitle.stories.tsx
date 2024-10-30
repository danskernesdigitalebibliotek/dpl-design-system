import { StoryFn } from "@storybook/react";

import { PromoTitle } from "./PromoTitle";

type PromoTitleProps = typeof PromoTitle;

export default {
  title: "Library / PromoTitle",
  component: PromoTitle,

  argTypes: {
    libraryName: {
      defaultValue: "Hjørring",
    },
    text: {
      defaultValue: "Inspiration",
    },
    variant: {
      defaultValue: "wide",
    },
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
