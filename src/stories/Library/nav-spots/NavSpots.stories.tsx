import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import NavSpots from "./NavSpots";
import NavSpot from "../nav-spot/NavSpot";
import ImageCredited from "../image-credited/ImageCredited";

const media = (
  <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
);
const teaser = (
  <NavSpot
    title="Digital læselyst"
    subtitle="Find inspiration, tips og værktøjer til hvordan dit barn kommer videre med læsningen."
    media={media}
  />
);

const teaserNoImage = (
  <NavSpot
    title="Digital læselyst"
    subtitle="Find inspiration, tips og værktøjer til hvordan dit barn kommer videre med læsningen."
    placeholderText="Mangler billede"
  />
);

export default {
  title: "Library / Nav spots (Navigationsmodul)",
  component: NavSpots,
  decorators: [withDesign],
  argTypes: {
    items: {
      // Disabling controls, as the different card variants are added already.
      control: false,
      defaultValue: [teaser, teaser],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1958-7664&mode=design&t=nK04fkaFk3f9pafj-4",
    },
  },
} as ComponentMeta<typeof NavSpots>;

const Template: ComponentStory<typeof NavSpots> = (args) => (
  <NavSpots {...args} />
);

const Many = Template.bind({});

Many.args = {
  items: [teaser, teaser],
};

const ManyNoImage = Template.bind({});

ManyNoImage.args = {
  items: [teaserNoImage, teaserNoImage],
};

const Single = Template.bind({});

Single.args = {
  items: [teaser],
};

const SingleNoImage = Template.bind({});

SingleNoImage.args = {
  items: [teaserNoImage],
};

export { Many, ManyNoImage, Single, SingleNoImage };
