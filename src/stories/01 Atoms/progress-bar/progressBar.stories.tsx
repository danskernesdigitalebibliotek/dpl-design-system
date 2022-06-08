import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import {
  ProgressBar as ProgressBarComp,
  ProgressBarProps,
} from "./progressBar";

const StoryBase: StoryBaseType<ProgressBarProps> = {
  title: "Atoms / Progress bar",
  component: ProgressBarComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
    layout: "centered",
  },
  argTypes: {
    amount: {
      defaultValue: 1,
    },
    fullAmount: {
      defaultValue: 5,
    },
    title: {
      defaultValue: "Ebøger",
    },
    outOf: {
      defaultValue: "ud af",
    },
  },
} as ComponentMeta<typeof ProgressBarComp>;

export default StoryBase;

export const ProgressBar = (props: ProgressBarProps) => (
  <ProgressBarComp {...props} />
);
