import { ComponentMeta, ComponentStory } from "@storybook/react";
import Webform from "./Webform";

export default {
  title: "Blocks / Webform",
  component: Webform,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/c40knshyvc1lVmv24qmv9X/DDF---brugeroprettelse-side?type=design&node-id=62%3A606&mode=design&t=nBkRn3CetxXUizOH-1",
    },
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Webform title",
    },
    subtitle: {
      control: "text",
      defaultValue:
        "I am a subtitle and I am here to help you with your form. I can be short, but also sometimes a bit longer, depending on the specific library wishes.",
    },
    withoutSubtitle: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Webform>;

const Template: ComponentStory<typeof Webform> = (args) => {
  return <Webform {...args} />;
};

export const Default = Template.bind({});

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  withoutSubtitle: true,
};
