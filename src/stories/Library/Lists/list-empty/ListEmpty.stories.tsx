import { Meta, StoryFn } from "@storybook/react-webpack5";
import ListEmpty from "./ListEmpty";

export default {
  title: "Library / Lists / List - empty",
  component: ListEmpty,
  argTypes: {
    text: { control: "text" },
    links: { control: "object" },
  },
  args: {
    text: "Du har i øjeblikket 0 Reserveringer",
    links: [
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
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1064%3A56582",
    },
    layout: "fullscreen",
  },
} as Meta<typeof ListEmpty>;

const Template: StoryFn<typeof ListEmpty> = (props) => <ListEmpty {...props} />;

export const ListEmptyExample = Template.bind({});
