import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListReservationsAndLoans } from "./ListReservationsAndLoans";

export default {
  title: "Library / Lists / ReservationAndLoans",
  component: ListReservationsAndLoans,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1181%3A5923",
    },
  },
} as ComponentMeta<typeof ListReservationsAndLoans>;

const Template: ComponentStory<typeof ListReservationsAndLoans> = (args) => (
  <ListReservationsAndLoans {...args} />
);

export const Item1 = Template.bind({});
Item1.args = {
  material: {
    type: "bog",
    title: "Mennesket i naturen",
    description: "Af Anton M. Berg (2020)",
    image: "images/book_cover_5.jpg",
    url: "",
    noteLabel: "Du pålægges et gebyr, når materialet afleveres",
    noteUrl: "",
    noteAsWarning: true,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 100,
    status: "danger",
    value: 0,
  },
  statusLabel: {
    label: "overskredet",
    status: "danger",
  },
  statusNotes: "Afleveres 02.10.2021",
};

export const Item2 = Template.bind({});
Item2.args = {
  material: {
    type: "bog",
    title: "Audrey Hepburn",
    description: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
    image: "images/book_cover_3.jpg",
    url: "",
    noteLabel: "Du pålægges et gebyr, når materialet afleveres",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 100,
    status: "danger",
    value: 0,
  },
  statusLabel: {
    label: "overskredet",
    status: "danger",
  },
  statusNotes: "Afleveres 02.10.2021",
};

export const Item3 = Template.bind({});
Item3.args = {
  material: {
    type: "bog",
    title: "Sauna",
    description: "Af Anton M. Berg (2020)",
    image: "images/book_cover_6.jpg",
    url: "",
    noteLabel: "",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 75,
    status: "warning",
    value: 7,
  },
  statusLabel: {
    label: "udløber snart",
    status: "warning",
  },
  statusNotes: "Afleveres 02.10.2021",
};

export const Item4 = Template.bind({});
Item4.args = {
  material: {
    type: "bog",
    title: "De Uadskillige",
    description: "Af Anton M. Berg (2020)",
    image: "images/book_cover_1.jpg",
    url: "",
    noteLabel: "",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 60,
    status: "warning",
    value: 9,
  },
  statusLabel: undefined,
  statusNotes: "Afleveres 02.10.2021",
};

export const Item5 = Template.bind({});
Item5.args = {
  material: {
    type: "bog",
    title: "Den lille bog om dansk design - for børn og barnlige sjæle",
    description: "Af Marie Hugsted (2018)",
    image: "images/book_cover_2.jpg",
    url: "",
    noteLabel: "",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 50,
    status: "neutral",
    value: 24,
  },
  statusLabel: undefined,
  statusNotes: "Afleveres 02.10.2021",
};

export const Item6 = Template.bind({});
Item6.args = {
  material: {
    type: "bog",
    title: "Døgnkioskmennesket",
    description: "Af Sayaka Murata (2019)",
    image: "images/book_cover_2.jpg",
    url: "",
    noteLabel: "",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: false,
  fee: 0,
  counter: {
    isReady: false,
    label: "dage",
    percentage: 25,
    status: "neutral",
    value: 29,
  },
  statusLabel: undefined,
  statusNotes: "Afleveres 02.10.2021",
};

export const ItemStacked = Template.bind({});
ItemStacked.args = {
  material: {
    type: "bog",
    title: "Audrey Hepburn",
    description: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
    image: "images/book_cover_3.jpg",
    url: "",
    noteLabel: "+ 3 materialer",
    noteUrl: "",
    noteAsWarning: false,
  },
  isStacked: true,
  fee: 20,
  counter: undefined,
  statusLabel: {
    label: "afleveret for sent",
    status: "danger",
  },
  statusNotes: "Afleveres 10.10.2020",
};
