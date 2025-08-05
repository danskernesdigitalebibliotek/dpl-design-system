import { Meta, StoryFn } from "@storybook/react-webpack5";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

export default {
  title: "Library / Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    items: {
      control: "object",
    },
  },
  args: {
    items: [
      { text: "Nyheder" },
      { text: "Pressemeddelser", link: "/" },
      { text: "Page" },
      { text: "Article", link: "/" },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=15294-35432&mode=design&t=yVa9YIJSSytj3Ta6-4",
    },
  },
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<typeof Breadcrumb> = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
