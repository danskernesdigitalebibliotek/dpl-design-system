import { Meta, StoryFn } from "@storybook/react/*";
import CardListInfoBox from "./CardListInfoBox";

export default {
  title: "Library / Card List Info Box",
  component: CardListInfoBox,
  argTypes: {
    title: { control: { type: "text" } },
    html: { control: { type: "text" } },
    buttonText: { control: { type: "text" } },
  },
  args: {
    title: "Har du svært ved at finde det, du leder efter?",
    html: "<p>Brug vores avancerede søgning eller kontakt os og få hjælp!</p><p><a href=\"tel:33663000\">Telefon 33 66 30 00</a> eller besøg os i <a href='/biblioteker'>bibliotekets betjente åbningstid</a>.</p>",
    buttonText: "Advanceret søgning",
  },
} as Meta<typeof CardListInfoBox>;

export const Item: StoryFn<typeof CardListInfoBox> = (args) => {
  return <CardListInfoBox {...args} />;
};

export const ItemNoButton: StoryFn<typeof CardListInfoBox> = (args) => {
  const newArgs = { ...args, buttonText: "" };

  return <CardListInfoBox {...newArgs} />;
};
