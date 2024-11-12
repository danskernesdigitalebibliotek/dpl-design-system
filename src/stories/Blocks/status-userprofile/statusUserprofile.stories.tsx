import { Meta, StoryFn } from "@storybook/react";
import { StatusUserprofile as StatusUserprofileComp } from "./statusUserprofile";

export default {
  title: "Blocks / User Profile / Loans and Reservations",
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
    loansTitle: { control: { type: "object" } },
    loans: { control: { type: "object" } },
    reservationsTitle: { control: { type: "object" } },
    reservations: { control: { type: "object" } },
  },
} as Meta<typeof StatusUserprofileComp>;

const Template: StoryFn<typeof StatusUserprofileComp> = (args) => (
  <StatusUserprofileComp {...args} />
);

export const StatusUserprofile = Template.bind({});
StatusUserprofile.args = {
  loansTitle: [
    {
      title: "Fysiske lån",
      href: "/",
      counter: "12",
    },
  ],
  loans: [
    {
      label: { label: "overskredet", status: "danger" },
      number: { label: 1, status: "danger" },
      title: "Afleveret for sent",
      showDot: true,
      href: "/",
    },
    {
      label: { label: "Udløber snart", status: "warning" },
      number: { label: 3, status: "warning" },
      title: "Afleveres snart",
      showDot: true,
      href: "/",
    },
    {
      label: { label: "Længere afleveringstid", status: "neutral" },
      number: { label: 8, status: "neutral" },
      title: "Længere afleveringstid",
      showDot: false,
      href: "/",
    },
  ],
  reservationsTitle: [
    {
      title: "Reserveringer",
      href: "/",
      counter: "12",
    },
  ],
  reservations: [
    {
      label: { label: "klar til lån", status: "info" },
      number: { label: 2, status: "info" },
      title: "Klar til dig",
      showDot: true,
      href: "/",
    },
    {
      label: { label: "Stadig i kø", status: "neutral" },
      number: { label: 10, status: "neutral" },
      title: "Stadig i kø",
      showDot: false,
      href: "/",
    },
  ],
};

export const StatusUserprofileEmpty = Template.bind({});
StatusUserprofileEmpty.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1064%3A56889",
  },
  layout: "fullscreen",
  allowFullscreen: true,
};
StatusUserprofileEmpty.args = {
  loansTitle: [
    {
      title: "Fysiske lån",
      href: "/",
      counter: "0",
    },
  ],
  loans: [],
  reservationsTitle: [
    {
      title: "Reserveringer",
      href: "/",
      counter: "0",
    },
  ],
  reservations: [],
};
