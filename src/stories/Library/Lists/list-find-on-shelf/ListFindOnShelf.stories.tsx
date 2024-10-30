import { Meta, StoryFn } from "@storybook/react";

import ListFindOnShelf, { ListFindOnShelfProps } from "./ListFindOnShelf";

export default {
  title: "Library / Lists / Find On Shelf",
  component: ListFindOnShelf,

  argTypes: {
    manifestationName: {
      name: "Manifestation Name",
      defaultValue: "Vejen til Jerusalem, 2008",
      control: { type: "text" },
    },
    location: {
      name: "Location",
      defaultValue: "Voksen · Skønlitteratur · Standard · Guillou",
      control: { type: "text" },
    },
    nrAvailable: {
      name: "Amount of available manifestations",
      defaultValue: 1,
      control: { type: "number" },
    },
    nrOfListItems: {
      name: "Amount of lit items",
      defaultValue: 2,
      control: { type: "number" },
    },
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
