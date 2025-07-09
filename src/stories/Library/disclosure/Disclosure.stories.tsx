import { Meta, StoryFn } from "@storybook/react-webpack5";

import Disclosure, { DisclosureProps } from "./Disclosure";

export default {
  title: "Library / Disclosure",
  component: Disclosure,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=416%3A15008",
    },
  },
  argTypes: {
    headline: {
      name: "Headline",
      control: { type: "text" },
    },
    children: {
      name: "Headline",
      control: { type: "text" },
    },
    icon: {
      name: "Icon name",
      options: ["Various", "Receipt", "Create", "Profile"],
      control: { type: "select" },
    },
    contentPadding: {
      name: "Extra content padding",
      control: { type: "boolean" },
    },
    withAvailability: {
      name: "Is with availability label?",
      control: { disable: true },
    },
    fullWidth: {
      name: "Full width?",
      control: { type: "boolean" },
    },
  },
  args: {
    headline: "Headline",
    children: "I am the content. Look at me!",
    icon: "Various",
    contentPadding: false,
    withAvailability: false,
    fullWidth: false,
  },
} as Meta<typeof Disclosure>;

const Template: StoryFn<typeof Disclosure> = (args: DisclosureProps) => (
  <Disclosure {...args} />
);

export const Default = Template.bind({});

export const WithAvailabilityLabel = Template.bind({});
WithAvailabilityLabel.args = {
  withAvailability: true,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  icon: undefined,
};

export const WithExtraContentPadding = Template.bind({});
WithExtraContentPadding.args = {
  contentPadding: true,
};
