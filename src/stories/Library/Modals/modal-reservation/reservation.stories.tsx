import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Reservation from "./Reservation";

export default {
  title: "Library / Modals / Reservation",
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
    state: {
      name: "State for reservation",
      defaultValue: "initial",
    },
    showPromoBar: {
      name: "Show PromoBar",
      defaultValue: false,
    },
    showInstantLoan: {
      name: "Show instant loan",
      defaultValue: false,
    },
    instantLoanTitle: {
      name: "Instant loan title",
      control: { type: "text" },
      defaultValue: "Hent bogen nu",
    },
    instantLoanSubTitle: {
      name: "Instant loan subtitle",
      control: { type: "text" },
      defaultValue: "Spring køen over og hent bogen nu på",
    },
    instantLoanUnderlineDescription: {
      name: "Instant loan underline description",
      control: { type: "text" },
      defaultValue: "Bogen er tilgængelig på disse biblioteker nær dig",
    },
    instantLoanBranches: {
      name: "Instant loan branches",
      control: "object",
      defaultValue: [
        "Blågaardens Bibliotek",
        "Østerbro Bibliotek",
        "Vesterbro Bibliotek",
      ],
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
