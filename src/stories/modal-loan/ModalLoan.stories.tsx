import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalLoan } from "./ModalLoan";

export default {
  title: "Components / Modal - Loan",
  component: ModalLoan,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ModalLoan>;

const Template: ComponentStory<typeof ModalLoan> = (args) => (
  <ModalLoan {...args} />
);

export const ModalLoanExpired = Template.bind({});
ModalLoanExpired.args = {
  title: "Afleveres 12. oktober 2021",
  description: "Kan afleveres på alle Rudersdals biblioteker",
  showExpired: true,
  showModal: true,
};

export const ModalLoanExpiresSoon = Template.bind({});
ModalLoanExpiresSoon.args = {
  title: "Udløber snart",
  description: "",
  showExpired: false,
  showModal: true,
};