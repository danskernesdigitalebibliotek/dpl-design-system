import { Meta, StoryFn } from "@storybook/react-webpack5";
import Reservation from "./Reservation";

export default {
  title: "Library / Modals / Reservation",
  component: Reservation,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4560%3A32385",
    },
  },
  argTypes: {
    title: { name: "Title", control: { type: "text" } },
    label: { name: "Label", control: { type: "text" } },
    author: { name: "Author", control: { type: "text" } },
    submitInfo: { name: "Submit Info text", control: { type: "text" } },
    submitButton: { name: "Submit Button text", control: { type: "text" } },
    state: { name: "State for reservation", control: { type: "text" } },
    showPromoBar: { name: "Show PromoBar", control: "boolean" },
    showInstantLoan: { name: "Show instant loan", control: "boolean" },
  },
  args: {
    state: "initial",
    showPromoBar: false,
    showInstantLoan: false,
    label: "bog",
    title: "Stephen Hawking",
    author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
    submitInfo: "Vi har 8 eksemplarer og 21 står i kø",
    submitButton: "GODKEND RESERVERING",
  },
} as Meta<typeof Reservation>;

const Template: StoryFn<typeof Reservation> = (args) => {
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

export const WithPromoBar = Template.bind({});
WithPromoBar.args = {
  label: "bog",
  title: "Stephen Hawking",
  author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
  submitInfo: "Vi har 8 eksemplarer og 21 står i kø",
  submitButton: "GODKEND RESERVERING",
  showPromoBar: true,
};

export const WithInstantLoan = Template.bind({});
WithInstantLoan.args = {
  label: "bog",
  title: "Stephen Hawking",
  author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
  submitInfo: "Vi har 8 eksemplarer og 21 står i kø",
  submitButton: "GODKEND RESERVERING",
  showInstantLoan: true,
};
