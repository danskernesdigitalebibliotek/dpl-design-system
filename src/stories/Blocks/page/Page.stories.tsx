import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Page from "./Page";

export default {
  title: "Blocks / Pages",
  component: Page,
  decorators: [withDesign],
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
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const frontPage = Template.bind({});
frontPage.args = {
  hero: {
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    contentType: "Arrangement",
    date: "06 Dec 2022",
    title: "Stine Pilgaard vinder De Gyldne Laurbær",
    description:
      "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
  },
};

export const blankPage = Template.bind({});
blankPage.args = {};
