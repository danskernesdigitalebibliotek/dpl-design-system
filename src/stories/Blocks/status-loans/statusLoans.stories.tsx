import { Meta, StoryFn } from "@storybook/react";
import { StatusLoans as StatusLoansComp } from "./statusLoans";

export default {
  title: "Blocks / User Profile / Status loans",
  component: StatusLoansComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    statusBarsData: { control: "object" },
    title: { control: "text" },
    bread: { control: "text" },
    reservationsText: { control: "text" },
    link: { control: "object" },
  },
  args: {
    statusBarsData: [
      {
        title: "Lån pr. måned",
        statusBars: [
          { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
          { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
        ],
      },
    ],
    title: "Digitale lån (Ereolen)",
    bread:
      "På mange digitale materialer, er der er begrænsning på, hvor mange du kan låne pr. måned. Der findes dog en række materialer uden begrænsning.",
    reservationsText: "You can reserve 3 ebooks and 3 audiobooks",
    link: {
      text: "Se titler du altid kan låne",
      link: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
} as Meta<typeof StatusLoansComp>;

const Template: StoryFn<typeof StatusLoansComp> = (args) => (
  <StatusLoansComp {...args} />
);

export const StatusLoans = Template.bind({});
