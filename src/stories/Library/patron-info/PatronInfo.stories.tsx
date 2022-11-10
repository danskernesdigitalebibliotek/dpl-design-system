import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import PatronInfo from "./PatronInfo";

export default {
  title: "Library / User info",
  component: PatronInfo,
  decorators: [withDesign],
  argTypes: {
    address: {
      control: "text",
      defaultValue:
        "The Utonium Residence, 107 Pokey Oaks South, Townsville, USA",
    },
    nameLabel: {
      control: "text",
      defaultValue: "Navn",
    },
    addressLabel: {
      control: "text",
      defaultValue: "Adresse",
    },
    name: {
      control: "text",
      defaultValue: "Professor Utonium",
    },
  },
  parameters: {},
} as ComponentMeta<typeof PatronInfo>;

const Template: ComponentStory<typeof PatronInfo> = (props) => (
  <PatronInfo {...props} />
);

export const PatronInfoExample = Template.bind({});
