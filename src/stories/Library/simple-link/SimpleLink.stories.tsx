import { Meta, StoryFn } from "@storybook/react-webpack5";

import SimpleLink from "./SimpleLink";

export default {
  title: "Library / Simple Link",
  component: SimpleLink,
  argTypes: {
    linkText: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    target: {
      control: {
        type: "select",
        options: ["_blank", "_self"],
      },
    },
  },
  args: {
    linkText: "Link text",
    href: "https://www.google.com",
    target: "_self",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=7741-58648&t=Facl3aeVt0fs5t5v-0",
    },
  },
} as Meta<typeof SimpleLink>;

const Template: StoryFn<typeof SimpleLink> = (args) => <SimpleLink {...args} />;

export const OpensInSameWindow = Template.bind({});
OpensInSameWindow.args = {
  linkText: "Link that opens in same window",
  href: "https://www.google.com",
  target: "_self",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  linkText: "Link that opens in new window",
  href: "https://www.google.com",
  target: "_blank",
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  linkText:
    "This is a very long link text that should wrap to the next line, demonstrating how lengthy text can be displayed within a link element to ensure proper wrapping and readability across different screen sizes and resolutions.",
  href: "https://www.google.com",
  target: "_self",
};
