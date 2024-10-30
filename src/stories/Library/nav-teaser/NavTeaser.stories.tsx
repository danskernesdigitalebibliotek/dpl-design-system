import { StoryFn, Meta } from "@storybook/react";

import NavTeaser from "./NavTeaser";

export default {
  title: "Library / Nav teaser",
  component: NavTeaser,

  argTypes: {
    title: {
      defaultValue: "Læseklub for børn",
    },
    subtitle: {
      defaultValue:
        "Børn har en tendens til at droppe fritidslæsningen omkring de 10 år. Med læsefamilieposerne får du inspiration til at få hele familien samlet omkring læsning.",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6449&mode=design&t=BnLo07eCsytFa8Ik-4",
    },
  },
} as Meta<typeof NavTeaser>;

const Template: StoryFn<typeof NavTeaser> = (args) => <NavTeaser {...args} />;

const Teaser = Template.bind({});

export { Teaser };
