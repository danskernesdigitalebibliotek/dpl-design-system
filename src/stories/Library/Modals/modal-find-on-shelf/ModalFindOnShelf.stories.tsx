import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ModalFindOnShelf, { ModalFindOnShelfProps } from "./ModalFindOnShelf";

export default {
  title: "Library / Modals / Find On Shelf",
  component: ModalFindOnShelf,
  decorators: [withDesign],
  argTypes: {
    workTitle: {
      name: "Work title",
      defaultValue: "Vejen til Jerusalem",
      control: { type: "text" },
    },
    author: {
      name: "Author",
      defaultValue: "Jan Guillou",
      control: { type: "text" },
    },
    nrOfbranches: {
      name: "Amount of library branches",
      defaultValue: 3,
      control: { type: "number" },
    },
    nrOfManifestations: {
      name: "Amount of manifestations per branch",
      defaultValue: 2,
      control: { type: "number" },
    },
    showModal: {
      name: "Show modal?",
      defaultValue: true,
      control: { type: "boolean" },
    },
    isPeriodical: {
      name: "Is periodical (e.g. magazine)?",
      defaultValue: false,
      control: { type: "null" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4561%3A26097",
    },
  },
} as ComponentMeta<typeof ModalFindOnShelf>;

const Template: ComponentStory<typeof ModalFindOnShelf> = (
  args: ModalFindOnShelfProps
) => <ModalFindOnShelf {...args} />;

export const Default = Template.bind({});

export const Periodical = Template.bind({});
Periodical.args = {
  isPeriodical: true,
};
