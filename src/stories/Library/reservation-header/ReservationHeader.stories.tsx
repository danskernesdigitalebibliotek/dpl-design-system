import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ReservationHeader from "./ReservationHeader";

export default {
  title: "Library / Reservation header",
  component: ReservationHeader,
  decorators: [withDesign],
  argTypes: {
    author: {
      defaultValue: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
      control: "text",
    },
    label: {
      defaultValue: "BOG",
      control: "text",
    },
    title: {
      defaultValue: "Steven Hawking",
      control: "text",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=2052%3A72452",
    },
  },
} as ComponentMeta<typeof ReservationHeader>;

const Template: ComponentStory<typeof ReservationHeader> = (props) => (
  <ReservationHeader {...props} />
);

export const ReservationHeaderExample = Template.bind({});
