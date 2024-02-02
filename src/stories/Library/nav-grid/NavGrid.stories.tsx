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
      defaultValue: [teaser, teaser, teaser],
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

const Few = Template.bind({});

Few.args = {
  showSubtitles: false,
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

export { Many, Few };
