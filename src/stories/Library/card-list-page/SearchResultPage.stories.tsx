import { Meta, StoryFn } from "@storybook/react-webpack5";
import { SearchResultPage } from "./SearchResultPage";
import { SearchResultPageSkeleton } from "./SearchResultPageSkeleton";

export default {
  title: "Blocks / Card List Page / Search Result Page",
  component: SearchResultPage,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  argTypes: {
    title: { control: { type: "text" } },
    totalResults: { control: { type: "number" } },
    linkName: { control: { type: "text" } },
    linkTotalResults: { control: { type: "text" } },
    currentResults: { control: { type: "number" } },
    zeroResult: { control: { type: "boolean" } },
    infoBoxTitle: { control: { type: "text" } },
    infoBoxHtml: { control: { type: "text" } },
    infoBoxButtonText: { control: { type: "text" } },
    infoBoxListPosition: { control: { type: "number" } },
  },
  args: {
    title: "harry potter",
    totalResults: 3576,
    linkName: "bibliotekets hjemmeside",
    linkTotalResults: "8",
    currentResults: 10,
    zeroResult: false,
    infoBoxTitle: "Har du svært ved at finde det, du leder efter?",
    infoBoxHtml:
      "<p>Brug vores avancerede søgning eller kontakt os og få hjælp!</p><p><a href=\"tel:33663000\">Ring 33 66 30 00</a> eller besøg os i <a href='/biblioteker'>bibliotekets betjente åbningstid</a>.</p>",
    infoBoxButtonText: "Avanceret søgning",
    infoBoxListPosition: 8,
  },
} as Meta<typeof SearchResultPage>;

const Template: StoryFn<typeof SearchResultPage> = (args) => {
  return <SearchResultPage {...args} />;
};
export const Item = Template.bind({});

const SkeletonTemplate: StoryFn<typeof SearchResultPageSkeleton> = (args) => {
  return <SearchResultPageSkeleton {...args} />;
};
export const SkeletonVersion = SkeletonTemplate.bind({});
