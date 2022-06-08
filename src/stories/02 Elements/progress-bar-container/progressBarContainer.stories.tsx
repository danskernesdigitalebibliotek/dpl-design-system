import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import {
  ProgressBarContainer as ProgressBarContainerComp,
  ProgressBarContainerProps,
} from "./progressBarContainer";

const StoryBase: StoryBaseType<ProgressBarContainerProps> = {
  title: "Elements / Progress bar container",
  component: ProgressBarContainerComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    progressBars: {
      defaultValue: [
        { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
        { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
      ],
    },
    title: {
      defaultValue: "Lån pr. måned",
    },
  },
} as ComponentMeta<typeof ProgressBarContainerComp>;

export default StoryBase;

export const ProgressBarContainer = (props: ProgressBarContainerProps) => (
  <ProgressBarContainerComp {...props} />
);
