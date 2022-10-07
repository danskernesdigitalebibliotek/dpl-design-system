import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Campaign, { CampaignProps } from "./Campaign";

export default {
  title: "Library / Campaign",
  component: Campaign,
  decorators: [withDesign],
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "10 gode bøger om Venner & Veninder",
    },
    reverse: {
      control: {
        type: "boolean",
        default: false,
      },
    },
    ellipsis: {
      control: {
        type: "boolean",
        default: false,
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4525%3A14602",
    },
  },
} as ComponentMeta<typeof Campaign>;

const Template: ComponentStory<typeof Campaign> = (args: CampaignProps) => (
  <Campaign {...args} />
);

export const Default = Template.bind({});

export const Reverse = Template.bind({});
Reverse.args = {
  reverse: true,
};
export const Ellipsis = Template.bind({});
Ellipsis.args = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus odit omnis voluptatibus sapiente necessitatibus expedita consequuntur illum nobis eaque aspernatur porro incidunt quod illo vel laudantium nisi, vitae mollitia? Similique vero facere rerum repellendus perferendis commodi placeat illum corporis vel, accusantium fugiat sapiente odio doloribus inventore, aperiam quisquam veniam quia. Provident quo corporis incidunt, facilis laudantium expedita magni dolores?",
  ellipsis: true,
};
