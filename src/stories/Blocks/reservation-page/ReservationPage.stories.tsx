import { StoryFn } from "@storybook/react-webpack5";
import ReservationPage, { ReservationPageProps } from "./ReservationPage";

export default {
  title: "Blocks / Reservation / Reservation Page",
  component: ReservationPage,
  argTypes: {
    headline: {
      name: "Headline",
      control: { type: "text" },
    },
    readyForPickup: {
      name: "Ready for pickup amount",
      control: { type: "number" },
    },
    physicalReservations: {
      name: "Physical reservations amount",
      control: { type: "number" },
    },
    digitalReservations: {
      name: "Digital reservations amount",
      control: { type: "number" },
    },
    skeletonVersion: {
      name: "Is skeleton version?",
      control: { type: "boolean" },
    },
  },
  args: {
    headline: "Your reservations",
    readyForPickup: 2,
    physicalReservations: 2,
    digitalReservations: 2,
    skeletonVersion: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=8513%3A85811&mode=design&t=nde0qiy8WvxnX8im-1",
    },
  },
};

const Template: StoryFn<typeof ReservationPage> = (
  args: ReservationPageProps,
) => <ReservationPage {...args} />;

export const Default = Template.bind({});
export const NoReadyForPickup = Template.bind({});
NoReadyForPickup.args = {
  readyForPickup: 0,
};
export const NoPhysicalReservations = Template.bind({});
NoPhysicalReservations.args = {
  physicalReservations: 0,
};
export const NoReservationsAtAll = Template.bind({});
NoReservationsAtAll.args = {
  readyForPickup: 0,
  physicalReservations: 0,
  digitalReservations: 0,
};
export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
