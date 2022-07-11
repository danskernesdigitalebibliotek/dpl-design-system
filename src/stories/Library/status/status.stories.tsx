import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Status as StatusComp } from "./status";

export default {
  title: "Library / Status",
  component: StatusComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    statusBars: {
      defaultValue: [
        { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
        { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
      ],
    },
    title: {
      defaultValue: "Lån pr. måned",
    },
  },
} as ComponentMeta<typeof StatusComp>;

const Template: ComponentStory<typeof StatusComp> = (args) => (
  <StatusComp {...args} />
);

export const ProgressBar = Template.bind({});
