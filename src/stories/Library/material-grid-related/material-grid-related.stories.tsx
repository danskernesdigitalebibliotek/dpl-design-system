import { Meta, StoryFn } from "@storybook/react-webpack5";
import MaterialGridRelated from "./material-grid-related";

export default {
  title: "Library/Material Grid Related",
  component: MaterialGridRelated,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=446-6954&mode=design&t=IkusOClO6YuhuPrb-4",
    },
  },
} as Meta<typeof MaterialGridRelated>;

const Template: StoryFn<typeof MaterialGridRelated> = () => (
  <MaterialGridRelated />
);

export const Default = Template.bind({});
