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
      <p><a href="/">Se bibliotekernes åbningstider</a></p>
    `,
      },
      {
        title: "Om bibliotekerne",
        content: `
      <p><a href="#">Brug af bibliotekerne</a></p>
      <p><a href="#">Erstatninger og gebyrer</a></p>
      <p><a href="#">Opret bruger</a></p>
      <p><a href="#">Biblioteket - A til Å</a></p>
      <p><a href="#">Internetadgang</a></p>
      <p><a href="#">Print, scan og kopi</a></p>
      <p><a href="#">Booking af lokaler</a></p>
      <p><a href="#">Nyhedsbrev</a></p>
    `,
      },
      {
        title: "Online tilbud",
        content: `
      <p><a href="#">Litteratursiden</a></p>
      <p><a href="#">Bibliotek.dk</a></p>
      <p><a href="#">eReolen</a></p>
      <p><a href="#">Filmstriben</a></p>
    `,
      },
      {
        title: "Text",
        content: `
      <p><a href="#">Lorem ipsum a la lorem ip</a></p>
      <p><a href="#">Bibliotekerne lorem</a></p>
      <p><a href="#">Labore ipsum</a></p>
      <p><a href="#">Adipisci velit le lorem</a></p>
    `,
      },
      {
        title: "Text",
        content: `
      <p><a href="#">Lorem ipsum a la lorem ip</a></p>
      <p><a href="#">Bibliotekerne lorem</a></p>
      <p><a href="#">Labore ipsum</a></p>
      <p><a href="#">Adipisci velit le lorem</a></p>
    `,
      },
      {
        title: "Text",
        content: `
      <p><a href="#">Lorem ipsum a la lorem ip</a></p>
      <p><a href="#">Bibliotekerne lorem</a></p>
      <p><a href="#">Labore ipsum</a></p>
      <p><a href="#">Adipisci velit le lorem</a></p>
    `,
      },
      {
        title: "Text",
        content: `
      <p><a href="#">Lorem ipsum a la lorem ip</a></p>
      <p><a href="#">Bibliotekerne lorem</a></p>
      <p><a href="#">Labore ipsum</a></p>
      <p><a href="#">Adipisci velit le lorem</a></p>
    `,
      },
      {
        title: "Kontakt",
        content: `
      <p>
          Lyngby-Taarbæk Bibliotekerne<br>
          Lyngby Hovedgade 28<br>
          2800 Kgs. Lyngby
      </p>
      <p>
          <a href="tel:4545973700">+45 45 97 37 00</a>
      </p>
      <p>
          &nbsp;
      </p>
      <p>
          Man - fre / Kl. 10-16<br>
          <a href="/">info@ltk.dk</a>
      </p>
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
