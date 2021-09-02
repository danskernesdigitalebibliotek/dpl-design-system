import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Example/Typography",
  component: Typography,
  decorators: [withDesign],
} as Meta;

export const Default = () => <Typography />;
