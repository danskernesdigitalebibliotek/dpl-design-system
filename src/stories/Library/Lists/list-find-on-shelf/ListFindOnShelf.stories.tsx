import { Meta, StoryFn } from "@storybook/react";

import ListFindOnShelf, { ListFindOnShelfProps } from "./ListFindOnShelf";

export default {
  title: "Library / Lists / Find On Shelf",
  component: ListFindOnShelf,
  argTypes: {
    manifestationName: {
      name: "Manifestation Name",
      control: { type: "text" },
    },
    location: {
      name: "Location",
      control: { type: "text" },
    },
    nrAvailable: {
      name: "Amount of available manifestations",
      control: { type: "number" },
    },
    nrOfListItems: {
      name: "Amount of lit items",
      control: { type: "number" },
    },
  },
  args: {
    manifestationName: "Vejen til Jerusalem, 2008",
    location: "Voksen · Skønlitteratur · Standard · Guillou",
    nrAvailable: 1,
    nrOfListItems: 2,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4561%3A26097",
    },
  },
} as Meta<typeof ListFindOnShelf>;

const Template: StoryFn<typeof ListFindOnShelf> = (
  args: ListFindOnShelfProps,
) => <ListFindOnShelf {...args} />;

export const FindOnShelf = Template.bind({});
