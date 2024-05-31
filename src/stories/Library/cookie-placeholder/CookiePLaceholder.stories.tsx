import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CookiePlaceholder } from "./CookiePlaceholder";

export default {
  title: "Library / Cookie Placeholder",
  component: CookiePlaceholder,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=16042-22933&t=kwXRJW0pZzoQmJHm-1",
    },
    layout: "fullscreen",
  },
  argTypes: {
    info: {
      defaultValue:
        "To view this content, we need your consent to use cookies.",
      type: "string",
    },
    buttonText: {
      defaultValue: "Manage consent",
      type: "string",
    },
  },
} as ComponentMeta<typeof CookiePlaceholder>;

const Template: ComponentStory<typeof CookiePlaceholder> = (props) => (
  <CookiePlaceholder {...props} />
);

export const CookiesBlocked = Template.bind({});
