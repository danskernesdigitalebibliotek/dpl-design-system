import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FacetBrowser from "./FacetBrowser";

export default {
  title: "Library / Modals / Facet Browser",
  component: FacetBrowser,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4397%3A9842",
    },
  },
  argTypes: {
    showModal: {
      control: {
        type: "boolean",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    clearAll: {
      control: {
        type: "text",
      },
    },
    showMore: {
      control: {
        type: "text",
      },
    },
    showResults: {
      control: {
        type: "null",
      },
    },
  },
} as ComponentMeta<typeof FacetBrowser>;

const Template: ComponentStory<typeof FacetBrowser> = (args) => {
  return <FacetBrowser {...args} />;
};

export const DefaultFacetBrowser = Template.bind({});

DefaultFacetBrowser.args = {
  showModal: true,
  title: "Filtrer liste (438)",
  showMore: "Vis flere",
  showResults: "vis resultater (438)",
};

export const ShowClearAllButton = Template.bind({});

ShowClearAllButton.args = {
  showModal: true,
  title: "Filtrer liste (438)",
  showMore: "Vis flere",
  showResults: "vis resultater (438)",
  clearAll: "Ryd alt",
};
