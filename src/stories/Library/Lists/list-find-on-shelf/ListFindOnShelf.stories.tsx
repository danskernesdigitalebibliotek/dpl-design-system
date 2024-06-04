import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ListFindOnShelf, { ListFindOnShelfProps } from "./ListFindOnShelf";

export default {
  title: "Library / Lists / Find On Shelf",
  component: ListFindOnShelf,
  decorators: [withDesign],
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
} as ComponentMeta<typeof ListFindOnShelf>;

const Template: ComponentStory<typeof ListFindOnShelf> = (
  args: ListFindOnShelfProps
) => <ListFindOnShelf {...args} />;

export const FindOnShelf = Template.bind({});
