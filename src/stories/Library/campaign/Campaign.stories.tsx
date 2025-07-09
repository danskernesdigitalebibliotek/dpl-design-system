import { Meta, StoryFn } from "@storybook/react-webpack5";

import Campaign, { CampaignProps } from "./Campaign";

export default {
  title: "Library / Campaign",
  component: Campaign,
  argTypes: {
    title: { control: { type: "text" } },
    imageUrl: { control: { type: "text" } },
    reverse: { control: { type: "boolean" } },
    ellipsis: { control: { type: "boolean" } },
  },
  args: {
    title: "10 gode bøger om Venner & Veninder",
    imageUrl: "https://picsum.photos/id/777/300/200",
    reverse: false,
    ellipsis: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4525%3A14602",
    },
  },
} as Meta<typeof Campaign>;

const Template: StoryFn<typeof Campaign> = (args: CampaignProps) => (
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

export const textOnly = Template.bind({});
textOnly.args = {
  imageUrl: "",
};

export const imageOnly = Template.bind({});
imageOnly.args = {
  title: undefined,
  imageUrl: "images/campaign_cover.jpg",
};
