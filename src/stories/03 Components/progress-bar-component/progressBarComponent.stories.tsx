import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import {
  ProgressBarComponent as ProgressBarComponentComp,
  ProgressBarComponentProps,
} from "./progressBarComponent";

const StoryBase: StoryBaseType<ProgressBarComponentProps> = {
  title: "Components / Progress bar container",
  component: ProgressBarComponentComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    progressBarsData: {
      defaultValue: [
        {
          title: "Lån pr. måned",
          progressBars: [
            { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
            { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
          ],
        },
        {
          title: "Reserveringer pr. måned",
          progressBars: [
            { amount: 3, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
            { amount: 2, fullAmount: 2, title: "Lydbøger", outOf: "ud af" },
          ],
        },
      ],
    },
    title: {
      defaultValue: "Digitale lån (Ereolen)",
    },
    bread: {
      defaultValue:
        "På mange digitale materialer, er der er begrænsning på, hvor mange du kan låne pr. måned. Der findes dog en række materialer uden begrænsning.",
    },
    link: {
      defaultValue: {
        text: "Se titler du altid kan låne",
        link:
          "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
      },
    },
  },
} as ComponentMeta<typeof ProgressBarComponentComp>;

export default StoryBase;

export const ProgressBarComponent = (props: ProgressBarComponentProps) => (
  <ProgressBarComponentComp {...props} />
);
