import { StoryFn, Meta } from "@storybook/react";

import NavSpot from "./NavSpot";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Nav-spot (Navigationsmodul)",
  component: NavSpot,

  argTypes: {
    variant: {
      // Disabling controls, as the different variations are added already.
      control: false,
    },
    title: {
      defaultValue: "Bøger som har gjort en forskel for romanens udvikling",
      type: "string",
    },
    subtitle: {
      defaultValue: "Stine Pilgaard vinder De Gyldne Laurbær",
      type: "string",
    },
    media: {
      defaultValue: (
        <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),
      type: "string",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1958-7664&mode=design&t=nK04fkaFk3f9pafj-4",
    },
  },
} as Meta<typeof NavSpot>;

const Template: StoryFn<typeof NavSpot> = (args) => <NavSpot {...args} />;

const Large = Template.bind({});
Large.args = {
  variant: "large",
};

const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
};

const Small = Template.bind({});
Small.args = {
  variant: "small",
};

export { Large, Medium, Small };
