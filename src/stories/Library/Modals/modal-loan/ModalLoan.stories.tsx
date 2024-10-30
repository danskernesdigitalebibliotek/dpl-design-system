import { Meta, StoryFn } from "@storybook/react";
import { ModalLoan } from "./ModalLoan";

export default {
  title: "Library / Modals / Loan",
  component: ModalLoan,

  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11409",
    },
  },
} as Meta<typeof ModalLoan>;

const Template: StoryFn<typeof ModalLoan> = (args) => <ModalLoan {...args} />;

export const ModalLoanLoading = Template.bind({});
ModalLoanLoading.args = {
  title: "Afleveres 12. oktober 2021",
  description: "Kan afleveres på alle Rudersdals biblioteker",
  showExpired: true,
  showModal: true,
  buttonsUpTop: true,
  isLoadingItems: true,
};

export const ModalLoanExpired = Template.bind({});
ModalLoanExpired.args = {
  title: "Afleveres 12. oktober 2021",
  description: "Kan afleveres på alle Rudersdals biblioteker",
  showExpired: true,
  showModal: true,
  buttonsUpTop: true,
};

export const ModalLoanExpiresSoon = Template.bind({});
ModalLoanExpiresSoon.args = {
  title: "Udløber snart",
  description: "",
  showExpired: false,
  showModal: true,
  buttonsUpTop: true,
};

export const ModalLoanStickyButtonInBottom = Template.bind({});
ModalLoanStickyButtonInBottom.args = {
  title: "Afleveres 12. oktober 2021",
  description: "Kan afleveres på alle Rudersdals biblioteker",
  showExpired: true,
  showModal: true,
  buttonsUpTop: false,
};
