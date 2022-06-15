import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import { StatusBar as StatusBarComp, StatusBarProps } from "./statusBar";

const StoryBase: StoryBaseType<StatusBarProps> = {
  title: "Library / Status bar",
  component: StatusBarComp,
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
} as ComponentMeta<typeof StatusBarComp>;

export default StoryBase;

export const StatusBar = (props: StatusBarProps) => (
  <StatusBarComp {...props} />
);
