import { StoryFn, Meta } from "@storybook/react-webpack5";

import Page from "./Page";
import ImageCredited from "../../Library/image-credited/ImageCredited";

export default {
  title: "Blocks / Pages",
  component: Page,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39243&mode=dev",
    },
  },
  argTypes: {
    hero: {
      control: "object",
      description: "Object containing hero details",
    },
    tags: { control: "object" },
  },
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const frontPage = Template.bind({});
frontPage.args = {
  hero: {
    placeholderText: "Forsiden har intet billede",
    contentType: "Arrangement",
    date: "06 Dec 2022",
    title: "Stine Pilgaard vinder De Gyldne Laurbær",
    description:
      "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
  },
};

export const branchPage = Template.bind({});
branchPage.args = {
  hero: {
    image: (
      <ImageCredited
        src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        description="Photo by Unsplash"
        year="©2021"
      />
    ),
    contentType: "Fillial",
    title: "Søborg",
    description:
      "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
    descriptionItems: {
      Type: { value: ["Bog"], type: "standard" },
      Sprog: { value: ["Dansk"], type: "standard" },
    },
  },
};

export const PageWithTags = Template.bind({});
PageWithTags.args = {
  hero: {
    placeholderText: "Denne side har tags, men intet billede",
    contentType: "Artikel",
    date: "12 Jan 2025",
    title: "Alt du skal vide om moderne scenekunst",
    description:
      "En introduktion til de mest populære emner i dansk scenekunst lige nu, med fokus på dans, poesi og samtidskunst.",
  },
  tags: ["dans", "contemporary", "modern", "scenekunst", "digt", "3-8 årige"],
};
