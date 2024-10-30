import { StoryBaseType } from "../../../types/StorybookHelpers";
import { Avatar } from "./Avatar";

const StoryBase: StoryBaseType<typeof Avatar> = {
  title: "Library / Avatar",

  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1181%3A57001",
    },
    layout: "centered",
  },
};

export default StoryBase;
