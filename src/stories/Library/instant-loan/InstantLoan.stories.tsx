import { Meta, StoryFn } from "@storybook/react";
import InstantLoan from "./InstantLoan";

export default {
  title: "Library / InstantLoan",
  component: InstantLoan,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=7632%3A32197&t=p2956ZWZxDUZHVxR-4",
    },
  },
  argTypes: {
    title: {
      name: "Instant loan title",
      control: { type: "text" },
    },
    subTitle: {
      name: "Instant loan subtitle",
      control: { type: "text" },
    },
    underlineDescription: {
      name: "Instant loan underline description",
      control: { type: "text" },
    },
    branches: {
      name: "Instant loan branches",
      control: "object",
    },
    showDisclosureContent: {
      name: "Show disclosure content",
      type: "boolean",
    },
  },
} as Meta<typeof InstantLoan>;

const Template: StoryFn<typeof InstantLoan> = (args) => {
  return <InstantLoan {...args} />;
};

export const InstantLoanClosed = Template.bind({});

export const InstantLoanOpen = Template.bind({});
InstantLoanOpen.args = {
  showDisclosureContent: true,
};
