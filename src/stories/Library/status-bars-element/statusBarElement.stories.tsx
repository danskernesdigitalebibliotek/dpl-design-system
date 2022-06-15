import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import {
  StatusBarElement as StatusBarElementComp,
  StatusBarElementProps,
} from "./statusBarElement";

const StoryBase: StoryBaseType<StatusBarElementProps> = {
  title: "Library / Status bar container",
  component: StatusBarElementComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
    },
  },
  argTypes: {
    StatusBars: {
      defaultValue: [
        { amount: 1, fullAmount: 4, title: "Ebøger", outOf: "ud af" },
        { amount: 2, fullAmount: 10, title: "Lydbøger", outOf: "ud af" },
      ],
    },
    title: {
      defaultValue: "Lån pr. måned",
    },
  },
} as ComponentMeta<typeof StatusBarElementComp>;

export default StoryBase;

export const StatusBarElement = (props: StatusBarElementProps) => (
  <StatusBarElementComp {...props} />
);
