import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ReservationPage, { ReservationPageProps } from "./ReservationPage";

export default {
  title: "Blocks / Reservation / Reservation Page",
  component: ReservationPage,
  decorators: [withDesign],
  argTypes: {
    headline: {
      name: "Headline",
      defaultValue: "Your reservations",
      control: { type: "text" },
    },
    readyForPickup: {
      name: "Ready for pickup amount",
      defaultValue: 2,
      control: { type: "number" },
    },
    physicalReservations: {
      name: "Physical reservations amount",
      defaultValue: 2,
      control: { type: "number" },
    },
    digitalReservations: {
      name: "Digital reservations amount",
      defaultValue: 2,
      control: { type: "number" },
    },
    skeletonVersion: {
      name: "Is skeleton version?",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=8513%3A85811&mode=design&t=nde0qiy8WvxnX8im-1",
    },
  },
};

const Template: ComponentStory<typeof ReservationPage> = (
  args: ReservationPageProps
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
