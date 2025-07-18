import { Meta, StoryFn } from "@storybook/react-webpack5";
import ContactForm from "./ContactForm";

export default {
  title: "Blocks / Forms / Contact Form",
  component: ContactForm,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/c40knshyvc1lVmv24qmv9X/DDF---brugeroprettelse-side?type=design&node-id=62%3A606&mode=design&t=nBkRn3CetxXUizOH-1",
    },
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    withoutSubtitle: { control: "boolean" },
  },
  args: {
    title: "Contact Form Title",
    subtitle:
      "I am a subtitle and I am here to help you with your form. I can be short, but also sometimes a bit longer, depending on the specific library wishes.",
    withoutSubtitle: false,
  },
} as Meta<typeof ContactForm>;

const ContactFormTemplate: StoryFn<typeof ContactForm> = (args) => {
  return <ContactForm {...args} />;
};

export const ContactFormGeneral = ContactFormTemplate.bind({});

export const ContactFormWithoutSubtitle = ContactFormTemplate.bind({});
ContactFormWithoutSubtitle.args = {
  withoutSubtitle: true,
};
