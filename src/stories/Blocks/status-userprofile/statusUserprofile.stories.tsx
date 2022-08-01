import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StatusUserprofile as StatusUserprofileComp } from "./statusUserprofile";

export default {
  title: "Blocks / Userprofile / Loans and Reservations",
  component: StatusUserprofileComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1060%3A56449",
    },
    layout: "fullscreen",
    allowFullscreen: true,
  },
  argTypes: {
    loansTitle: {
      control: { type: "object" },
      defaultValue: [
        {
          title: "Fysiske lån",
          href: "/",
          counter: "12",
        },
      ],
    },
    loans: {
      control: { type: "object" },
      defaultValue: [
        {
          label: {
            label: "overskredet",
            status: "danger",
          },
          number: {
            label: 1,
            status: "danger",
          },
          title: "Afleveret for sent",
          showDot: true,
          href: "/",
        },
        {
          label: {
            label: "Udløber snart",
            status: "warning",
          },
          number: {
            label: 3,
            status: "warning",
          },
          title: "Afleveres snart",
          showDot: true,
          href: "/",
        },
        {
          number: {
            label: 8,
            status: "neutral",
          },
          title: "Længere afleveringstid",
          showDot: false,
          href: "/",
        },
      ],
    },
    reservationsTitle: {
      control: { type: "object" },
      defaultValue: [
        {
          title: "Reserveringer",
          href: "/",
          counter: "12",
        },
      ],
    },
    reservations: {
      control: { type: "object" },
      defaultValue: [
        {
          label: {
            label: "klar til lån",
            status: "info",
          },
          number: {
            label: 2,
            status: "info",
          },
          title: "Klar til dig",
          showDot: true,
          href: "/",
        },
        {
          number: {
            label: 10,
            status: "neutral",
          },
          title: "Stadig i kø",
          showDot: false,
          href: "/",
        },
      ],
    },
  },
} as ComponentMeta<typeof StatusUserprofileComp>;

const Template: ComponentStory<typeof StatusUserprofileComp> = (args) => (
  <StatusUserprofileComp {...args} />
);

export const StatusUserprofile = Template.bind({});

export const StatusUserprofileEmpty = Template.bind({});

StatusUserprofileEmpty.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1064%3A56889",
  },
  layout: "fullscreen",
  allowFullscreen: true,
};
StatusUserprofileEmpty.argTypes = {
  loansTitle: {
    control: { type: "object" },
    defaultValue: [
      {
        title: "Fysiske lån",
        href: "/",
        counter: "0",
      },
    ],
  },
  loans: {
    control: { type: "object" },
    defaultValue: [],
  },
  reservationsTitle: {
    control: { type: "object" },
    defaultValue: [
      {
        title: "Reserveringer",
        href: "/",
        counter: "0",
      },
    ],
  },
  reservations: {
    control: { type: "object" },
    defaultValue: [],
  },
};
