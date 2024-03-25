import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import NavGrid from "./NavGrid";
import NavTeaser from "../nav-teaser/NavTeaser";

const teaser = (
  <NavTeaser
    title="Læseklub for børn"
    subtitle="Savner du nogen at dele dine læseoplevelser med? Trænger du til ny inspiration fra andre på din egen alder?"
  />
);

export default {
  title: "Library / Nav grid ('Navigationskomponent')",
  component: NavGrid,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Nyheder",
    },
    showSubtitles: {
      defaultValue: true,
    },
    items: {
      // Disabling controls, as the different teaser variants are added already.
      control: false,
      defaultValue: [teaser],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6449&mode=design&t=BnLo07eCsytFa8Ik-4",
    },
  },
} as ComponentMeta<typeof NavGrid>;

const Template: ComponentStory<typeof NavGrid> = (args) => (
  <NavGrid {...args} />
);

const One = Template.bind({});

const Tree = Template.bind({});
Tree.args = {
  items: [teaser, teaser, teaser],
};

const Many = Template.bind({});
Many.args = {
  items: [
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
    teaser,
  ],
};

const NoSubtitles = Template.bind({});
NoSubtitles.args = {
  showSubtitles: false,
  items: [teaser, teaser, teaser],
};

export { One, Tree, Many, NoSubtitles };
