import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ReservationHeader as ReservationHeaderSB } from "./ReservationHeader";

export default {
  title: "Library / Reservation header",
  component: ReservationHeaderSB,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ReservationHeaderSB>;

const Template: ComponentStory<typeof ReservationHeaderSB> = (args) => (
  <ReservationHeaderSB {...args} />
);

export const ReservationHeader = Template.bind({});
