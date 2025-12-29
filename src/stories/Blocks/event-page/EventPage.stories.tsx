import { StoryFn, Meta } from "@storybook/react-webpack5";

import Event from "./EventPage";

export default {
  title: "Blocks / Event page",
  component: Event,
  args: {
    description: `Foreningen for Integreret Moderne Dans arbejder med at udvide
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
      {
        title: "Målgruppe",
        linkList: [{ text: "3-8 årige", url: "/" }],
      },
      {
        title: "Arrangør",
        linkList: [
          { text: "Østerbro bibliotek", url: "/" },
          { text: "Hovedbiblioteket", url: "/" },
        ],
      },
      {
        title: "I samarbejde med",
        linkList: [{ text: "Partnerfirmaet", url: "/" }],
      },
    ],
  },
  argTypes: {
    title: { control: "text" },
    date: { control: "text" },
    image: { control: "object" },
    placeholderText: { control: "text" },
    description: { control: "text" },
    horizontalTermLineData: { control: "object" },
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
