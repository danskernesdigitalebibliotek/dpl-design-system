import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ReservationHeader from "./ReservationHeader";

export default {
  title: "Library / Reservation header",
  component: ReservationHeader,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ReservationHeader>;

const Template: ComponentStory<typeof ReservationHeader> = () => (
  <ReservationHeader />
);

export const ReservationHeaderExample = Template.bind({});
