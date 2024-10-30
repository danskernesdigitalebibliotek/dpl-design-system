import { StoryFn, Meta } from "@storybook/react";

import { LinkWithIcon } from "./LinkWithIcon";

export default {
  title: "Library / Link with icon",
  component: LinkWithIcon,

  argTypes: {
    href: {
      defaultValue: "/",
    },
    linkText: {
      defaultValue: "Følg prisoverrækkelsen live fra kl. 15:30",
    },
    linkType: {
      control: {
        type: "select",
        options: ["internal", "external", "download", "search"],
      },
      defaultValue: "internal",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39110&mode=design&t=d1dz4FVEPRORqxUN-4",
    },
    layout: "full",
  },
} as Meta<typeof LinkWithIcon>;

const Template: StoryFn<typeof LinkWithIcon> = (args) => (
  <LinkWithIcon {...args} />
);

export const Default = Template.bind({});

const LinkWithIconListComponentTemplate: StoryFn<typeof LinkWithIcon> = () => (
  <div>
    <LinkWithIcon href="#" linkText="Internal Link" linkType="internal" />
    <LinkWithIcon
      href="https://example.com"
      linkText="External Link"
      linkType="external"
    />
    <LinkWithIcon
      href="/download/some-file.pdf"
      linkText="Download Link"
      linkType="download"
    />
    <LinkWithIcon
      href="/search?q=storybook"
      linkText="Search Link at /search"
      linkType="search"
    />
    <LinkWithIcon
      href="/advanced-search?q=storybook"
      linkText="Search Link at /advanced-search"
      linkType="search"
    />
  </div>
);

export const LinkList = LinkWithIconListComponentTemplate.bind({});
LinkList.decorators = [(Story) => Story()];
