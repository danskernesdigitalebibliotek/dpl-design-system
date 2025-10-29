import { StoryFn, Meta } from "@storybook/react-webpack5";

import Event from "./EventPage";
import ImageCredited from "../../Library/image-credited/ImageCredited";

export default {
  title: "Blocks / Event page",
  component: Event,
  args: {
    title: "Fernisering Modern Dans",
    date: "06 Dec - 12 Jan 2022",
    image: (
      <ImageCredited
        description="Photo by Smith on Unsplash"
        year="©2021"
        src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      />
    ),
    placeholderText: "Noget spændende tekst",
    descriptionDescription: `Foreningen for Integreret Moderne Dans arbejder med at udvide
      normalitetsbegrebet i scenekunsten. For hvad er normalt? Rosenreglen og
      Mødrenes hus. I 2022 udgav hun også den stærkt politiske digtsamling Jeg
      vil have en statsminister.`,
    horizontalTermLineData: [
      {
        title: "Tags",
        linkList: [
          { text: "dans", url: "/" },
          { text: "contemporary", url: "/" },
          { text: "modern", url: "/" },
          { text: "scenekunst", url: "/" },
          { text: "digt", url: "/" },
          { text: "3-8 årige", url: "/" },
        ],
      },
    ],
    listDescriptionData: {
      descriptionItems: {
        Dato: {
          value: ["04 oktober 2028"],
          type: "standard",
          icon: "icons/collection/icon-event.svg",
        },
        Tid: {
          value: ["08:00 - 08:15"],
          type: "standard",
          icon: "icons/collection/Opening hours.svg",
        },
        Sted: {
          value: ["Hovedbibliotek", "Greve bibliotek"],
          type: "standard",
          icon: "icons/collection/Location.svg",
        },
        Adresse: {
          value: ["Kampmanns Plads 2, 8000 Aarhus, Danmark"],
          type: "standard",
          hideKey: true,
        },
      },
      price: {
        tickets: [
          { label: "Børn", price: "Gratis" },
          { label: "Voksne", price: "65 DKK" },
        ],
      },
      relationsItems: {
        Bibliotek: {
          value: ["Brønshøj Bibliotek"],
          type: "link",
        },
        "I samarbejde med": {
          value: [
            "Aarhus Musikskole",
            "Den Vestdanske Filmpulje sammen med Åby Biblioteks venner",
          ],
          type: "list",
        },
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    date: { control: "text" },
    image: { control: "object" },
    placeholderText: { control: "text" },
    descriptionDescription: { control: "text" },
    horizontalTermLineData: { control: "object" },
    listDescriptionData: { control: "object" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39846&mode=dev",
    },
  },
} as Meta<typeof Event>;

const Template: StoryFn<typeof Event> = (args) => <Event {...args} />;

export const Default = Template.bind({});
export const withOutImage = Template.bind({});
withOutImage.args = {
  image: "",
};
