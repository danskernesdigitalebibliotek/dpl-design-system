import { withDesign } from "storybook-addon-designs";
import { Meta, Story } from "@storybook/react";
import Footer, { FooterType } from "./Footer";

export default {
  title: "Blocks / Footer",
  component: Footer,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A8716",
    },
  },
  args: {
    footerContent: [
      {
        title: "Åbningstider",
        content: `
      <p>Bibliotekerne lorem ipsum consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.</p>
      <a href="/">Se bibliotekernes åbningstider</a>
    `,
      },
      {
        title: "Om bibliotekerne",
        content: `
      <a href="#">Brug af bibliotekerne</a>
      <a href="#">Erstatninger og gebyrer</a>
      <a href="#">Opret bruger</a>
      <a href="#">Biblioteket - A til Å</a>
      <a href="#">Internetadgang</a>
      <a href="#">Print, scan og kopi</a>
      <a href="#">Booking af lokaler</a>
      <a href="#">Nyhedsbrev</a>
    `,
      },
      {
        title: "Online tilbud",
        content: `
      <a href="#">Litteratursiden</a>
      <a href="#">Bibliotek.dk</a>
      <a href="#">eReolen</a>
      <a href="#">Filmstriben</a>
    `,
      },
      {
        title: "Text",
        content: `
      <a href="#">Lorem ipsum a la lorem ip</a>
      <a href="#">Bibliotekerne lorem</a>
      <a href="#">Labore ipsum</a>
      <a href="#">Adipisci velit le lorem</a>
    `,
      },
      {
        title: "Text",
        content: `
      <a href="#">Lorem ipsum a la lorem ip</a>
      <a href="#">Bibliotekerne lorem</a>
      <a href="#">Labore ipsum</a>
      <a href="#">Adipisci velit le lorem</a>
    `,
      },
      {
        title: "Text",
        content: `
      <a href="#">Lorem ipsum a la lorem ip</a>
      <a href="#">Bibliotekerne lorem</a>
      <a href="#">Labore ipsum</a>
      <a href="#">Adipisci velit le lorem</a>
    `,
      },
      {
        title: "Text",
        content: `
      <a href="#">Lorem ipsum a la lorem ip</a>
      <a href="#">Bibliotekerne lorem</a>
      <a href="#">Labore ipsum</a>
      <a href="#">Adipisci velit le lorem</a>
    `,
      },
      {
        title: "Kontakt",
        content: `
      <p>Lyngby-Taarbæk Bibliotekerne<br />
      Lyngby Hovedgade 28<br />
      2800 Kgs. Lyngby<br /><br />
      <a href="tel:4545973700">+45 45 97 37 00</a><br />
      Man - fre / Kl. 10-16</p>
      <a href="/">info@ltk.dk</a>
    `,
      },
    ],
    footerLanguages: [
      {
        title: "DK",
        href: "/",
      },
      {
        title: "SEK",
        href: "/",
      },
      {
        title: "ENG",
        href: "/",
      },
    ],
    footerSocialMedia: [
      {
        href: "/",
        icon: "icons/social/icon-social-facebook.svg",
        alt: "Facebook link",
      },
      {
        href: "/",
        icon: "icons/social/icon-social-instagram.svg",
        alt: "Instagram link",
      },
      {
        href: "/",
        icon: "icons/social/icon-social-youtube.svg",
        alt: "Youtube link",
      },
      {
        href: "/",
        icon: "icons/social/icon-social-spotify.svg",
        alt: "Spotify link",
      },
    ],
    footerInfoLinks: [
      { href: "/", label: "Behandling af persondata" },
      { href: "/", label: "Servicedeklaration" },
      { href: "/", label: "Relement" },
      { href: "/", label: "Tilgængelighed" },
    ],
  },
  argTypes: {
    footerContent: { control: "object" },
    footerLanguages: { control: "object" },
    footerSocialMedia: { control: "object" },
    footerInfoLinks: { control: "object" },
  },
} as Meta;

const Template: Story<FooterType> = (args) => <Footer {...args} />;
export const Default = Template.bind({});
