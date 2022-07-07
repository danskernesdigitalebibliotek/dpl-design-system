import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Disclosure, DisclosureProps } from "./Disclosure";

export default {
  title: "Atoms / Disclosure",
  component: Disclosure,
  decorators: [withDesign],
  argTypes: {
    open: {
      name: "Open",
      defaultValue: false,
      control: { type: "boolean" }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=416%3A15008",
    },
  },
} as ComponentMeta<typeof Disclosure>;

const Template: ComponentStory<typeof Disclosure> = (args: DisclosureProps) => (
  <Disclosure {...args} />
          
);

export const Defult = Template.bind({});
