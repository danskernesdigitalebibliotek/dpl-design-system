import { Meta, StoryFn } from "@storybook/react-webpack5";
import ModalFindOnShelf, { ModalFindOnShelfProps } from "./ModalFindOnShelf";

export default {
  title: "Library / Modals / Find On Shelf",
  component: ModalFindOnShelf,
  argTypes: {
    workTitle: { control: { type: "text" } },
    author: { control: { type: "text" } },
    nrOfbranches: { control: { type: "number" } },
    nrOfManifestations: { control: { type: "number" } },
    showModal: { control: { type: "boolean" } },
    isPeriodical: { control: { type: "boolean" } },
  },
  args: {
    workTitle: "Vejen til Jerusalem",
    author: "Jan Guillou",
    nrOfbranches: 3,
    nrOfManifestations: 2,
    showModal: true,
    isPeriodical: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4561%3A26097",
    },
  },
} as Meta<typeof ModalFindOnShelf>;

const Template: StoryFn<typeof ModalFindOnShelf> = (
  args: ModalFindOnShelfProps,
) => <ModalFindOnShelf {...args} />;

export const Default = Template.bind({});

export const Periodical = Template.bind({});
Periodical.args = {
  isPeriodical: true,
};
