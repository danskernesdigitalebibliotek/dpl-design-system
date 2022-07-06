import React from "react";
import { withDesign } from "storybook-addon-designs";

import { StoryBaseType } from "../../../types/StorybookHelpers";
import { Breadcrumb as BreadcrumbComp, BreadcrumbProps } from "./Breadcrumb";

const StoryBase: StoryBaseType<BreadcrumbProps> = {
  title: "Library / Breadcrumb",
  component: BreadcrumbComp,
  decorators: [withDesign],
  argTypes: {
    text: {
      defaultValue: "Nyheder",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=437%3A4681",
    },
    layout: "centered",
  },
};

export default StoryBase;

export const Breadcrumb = (props: BreadcrumbProps) => (
  <BreadcrumbComp {...props} />
);
