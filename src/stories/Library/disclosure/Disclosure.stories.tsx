import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Disclosure, { DisclosureProps } from "./Disclosure";

export default {
  title: "Library / Disclosure",
  component: Disclosure,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=416%3A15008",
    },
  },
  argTypes: {
    headline: {
      name: "Headline",
      defaultValue: "Headline",
      control: { type: "text" },
    },
    children: {
      name: "Headline",
      defaultValue: "I am the content. Look at me!",
      control: { type: "text" },
    },
    icon: {
      name: "Icon name",
      defaultValue: "Various",
      options: ["Various", "Receipt", "Create", "Profile"],
      control: { type: "select" },
    },
    contentPadding: {
      name: "Extra content padding",
      defaultValue: false,
      control: { type: "boolean" },
    },
    withAvailability: {
      name: "Is with availability label?",
      defaultValue: false,
      control: { disable: true },
    },
    fullWidth: {
      name: "Full width?",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Disclosure>;

const Template: ComponentStory<typeof Disclosure> = (args: DisclosureProps) => (
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
