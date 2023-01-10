import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import InstantLoan from "./InstantLoan";
import instantLoanDefaultArgs from "./instantLoanDefaultArgs";

export default {
  title: "Library / InstantLoan",
  component: InstantLoan,
  decorators: [withDesign],
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
} as ComponentMeta<typeof InstantLoan>;

const Template: ComponentStory<typeof InstantLoan> = (args) => {
  return <InstantLoan {...args} />;
};

export const InstantLoanClosed = Template.bind({});
InstantLoanClosed.args = { ...instantLoanDefaultArgs };

export const InstantLoanOpen = Template.bind({});
InstantLoanOpen.args = {
  ...instantLoanDefaultArgs,
  showDisclosureContent: true,
};
