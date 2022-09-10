import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Reservation from "./Reservation";

export default {
  title: "Blocks / Reservation",
  component: Reservation,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4560%3A32385",
    },
  },
  argTypes: {
    title: {
      name: "Title",
      control: { type: "text" },
    },
    label: {
      name: "Label",
      control: { type: "text" },
    },
    author: {
      name: "Author",
      control: { type: "text" },
    },
    submitInfo: {
      name: "Submit Info text",
      control: { type: "text" },
    },
    submitButton: {
      name: "Submit Button text",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Reservation>;

const Template: ComponentStory<typeof Reservation> = (args) => {
  return <Reservation {...args} />;
};

export const Modal = Template.bind({});
Modal.args = {
  label: "bog",
  title: "Stephen Hawking",
  author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
  submitInfo: "Vi har 8 eksemplarer og 21 står i kø",
  submitButton: "GODKEND RESERVERING",
};
