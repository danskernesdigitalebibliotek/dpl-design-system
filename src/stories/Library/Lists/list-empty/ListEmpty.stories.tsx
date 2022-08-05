import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListEmpty from "./ListEmpty";

export default {
  title: "Library / Lists / List - empty",
  component: ListEmpty,
  decorators: [withDesign],
  argTypes: {
    text: {
      defaultValue: "Du har i øjeblikket 0 Reserveringer",
      control: "text",
    },
    links: {
      control: "object",
      defaultValue: [
        {
          linkText: "link tekst 1",
          href: "https://example.com/",
        },
        {
          linkText: "link tekst 2",
          href: "https://example.com/",
        },
      ],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1064%3A56582",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListEmpty>;

const Template: ComponentStory<typeof ListEmpty> = (props) => (
  <ListEmpty {...props} />
);

export const ListEmptyExample = Template.bind({});
