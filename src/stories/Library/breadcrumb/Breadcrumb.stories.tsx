import { StoryBaseType } from "../../../types/StorybookHelpers";
import { Breadcrumb as BreadcrumbComp, BreadcrumbProps } from "./Breadcrumb";

const StoryBase: StoryBaseType<BreadcrumbProps> = {
  title: "Library / Breadcrumb",
  component: BreadcrumbComp,

  argTypes: {
    items: {
      defaultValue: [
        { text: "Nyheder" },
        { text: "Pressemeddelser", link: "/" },
        { text: "Page" },
        { text: "Article", link: "/" },
      ],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=15294-35432&mode=design&t=yVa9YIJSSytj3Ta6-4",
    },
  },
};

export default StoryBase;

export const Breadcrumb = (props: BreadcrumbProps) => (
  <BreadcrumbComp {...props} />
);
