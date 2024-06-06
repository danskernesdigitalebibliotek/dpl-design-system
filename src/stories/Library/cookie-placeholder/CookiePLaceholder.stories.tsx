import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CookiePlaceholder } from "./CookiePlaceholder";
import VideoEmbed from "../video-embed/VideoEmbed";

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
    buttonText: {
      defaultValue: "Manage consent",
      type: "string",
    },
    acceptCookies: {
      control: "boolean",
      defaultValue: false,
    },
    info: {
      defaultValue:
        "To view this content, we need your consent to use cookies.",
      type: "string",
    },
    src: {
      defaultValue: "https://www.youtube.com/embed/CmzKQ3PSrow",
      type: "string",
    },
  },
} as ComponentMeta<typeof CookiePlaceholder>;

const Template: ComponentStory<typeof CookiePlaceholder> = (props) => (
  <CookiePlaceholder {...props} />
);

export const CookiesBlocked = Template.bind({});
