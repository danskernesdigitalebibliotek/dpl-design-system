import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StoryBaseType } from "../../../types/StorybookHelpers";
import { Status as StatusComp, StatusProps } from "./status";

const StoryBase: StoryBaseType<StatusProps> = {
  title: "Library / Status",
  component: StatusComp,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
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

export default StoryBase;

export const Status = (props: StatusProps) => <StatusComp {...props} />;
