import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Event from "./EventPage";
import ImageCredited from "../../Library/image-credited/ImageCredited";

export default {
  title: "Blocks / Event page",
  component: Event,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Fernisering Modern Dans",
      type: "string",
    },
    date: {
      defaultValue: "06 Dec - 12 Jan 2022",
      type: "string",
    },
    image: {
      defaultValue: (
        <ImageCredited
          description="Photo by Smith on Unsplash"
          year="©2021"
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        />
      ),
    },
    placeholderText: {
      defaultValue: "Noget spændende tekst",
      type: "string",
    },
    descriptionDescription: {
      defaultValue: `Foreningen for Integreret Moderne Dans arbejder med at udvide
      normalitetsbegrebet i scenekunsten. For hvad er normalt? Rosenreglen og
      Mødrenes hus. I 2022 udgav hun også den stærkt politiske digtsamling Jeg
      vil have en statsminister.`,
      type: "string",
    },
    horizontalTermLineData: {
      defaultValue: [
        {
          title: "I samme serie ",
          linkList: [
            {
              text: "Litteratur & Aktivisme",
              url: "/",
            },
          ],
        },
        {
          title: "Emneord",
          linkList: [
            {
              text: "dans",
              url: "/",
            },
            {
              text: "contemporary",
              url: "/",
            },
            {
              text: "modern",
              url: "/",
            },
            {
              text: "scenekunst",
              url: "/",
            },
            {
              text: "digt",
              url: "/",
            },
            {
              text: "3-8 årige",
              url: "/",
            },
          ],
        },
      ],
    },
    listDescriptionData: {
      defaultValue: {
        Tid: { value: ["19:30 — 21:00"], type: "standard" },
        Pris: {
          value: ["Standard: 65 kr.", "Børn: Gratis"],
          type: "standard",
          layout: "column",
        },
        Sted: {
          value: [
            "Hovedbibliotek",
            "Greve bibliotek",
            "Hovedbibliotek",
            "Greve bibliotek",
          ],
          type: "link",
        },
        Adresse: {
          value: ["Kampmanns Plads 2, 8000, Aarhus"],
          type: "standard",
        },
        Målgruppe: { value: ["Alle"], type: "standard" },
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39846&mode=dev",
    },
  },
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const Default = Template.bind({});
export const withOutImage = Template.bind({});
withOutImage.args = {
  image: "",
};
