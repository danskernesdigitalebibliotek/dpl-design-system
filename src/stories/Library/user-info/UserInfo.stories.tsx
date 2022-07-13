import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import UserInfo from "./UserInfo";

export default {
  title: "Library / User info",
  component: UserInfo,
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
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (props) => (
  <UserInfo {...props} />
);

export const UserInfoExample = Template.bind({});
