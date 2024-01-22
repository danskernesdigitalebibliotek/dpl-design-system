import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { PromoTitle } from "./PromoTitle";

type PromoTitleProps = typeof PromoTitle;

export default {
  title: "Library / PromoTitle",
  component: PromoTitle,
  decorators: [withDesign],
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

const Template: ComponentStory<PromoTitleProps> = (args) => (
  <PromoTitle {...args} />
);

export const Wide = Template.bind({});

export const Narrow = Template.bind({});

Narrow.args = {
  variant: "narrow",
};
