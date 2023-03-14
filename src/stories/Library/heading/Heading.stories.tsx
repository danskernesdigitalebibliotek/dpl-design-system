import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Library / Heading",
  component: Heading,
  argTypes: {
    level: {
      name: "Heading level",
      control: "radio",
      options: ["h2", "h3", "h4", "h5"],
    },
    className: {
      name: "Heading classNames",
      control: "text",
    },
    children: {
      name: "Heading text",
      control: "text",
    },
  },

  parameters: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const H2 = Template.bind({});
H2.args = {
  level: "h2",
  children: "Heading 2",
};

export const H3 = Template.bind({});
H3.args = {
  level: "h3",
  children: "Heading 3",
};

export const H4 = Template.bind({});
H4.args = {
  level: "h4",
  children: "Heading 4",
};

export const H5 = Template.bind({});
H5.args = {
  level: "h5",
  children: "Heading 5",
};

export const H5WithClassNames = Template.bind({});
H5WithClassNames.args = {
  level: "h5",
  className: "text-header-h2",
  children: "Heading With ClassNames",
};
