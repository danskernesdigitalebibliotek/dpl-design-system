import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import {
  StatusBarComponent as StatusBarComponentComp,
  StatusBarComponentProps,
} from "./statusBarComponent";

const StoryBase: StoryBaseType<StatusBarComponentProps> = {
  title: "Components / Status bar component",
  component: StatusBarComponentComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    statusBarsData: {
      defaultValue: [
        {
          title: "Lån pr. måned",
          statusBars: [
            { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
            { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
          ],
        },
        {
          title: "Reserveringer pr. måned",
          statusBars: [
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
} as ComponentMeta<typeof StatusBarComponentComp>;

export default StoryBase;

export const StatusBarComponent = (props: StatusBarComponentProps) => (
  <StatusBarComponentComp {...props} />
);
