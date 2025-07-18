import { Meta, StoryFn } from "@storybook/react-webpack5";

import { Header as HeaderComp, HeaderProps } from "./Header";

export default {
  title: "Blocks / Header",
  component: HeaderComp,
  argTypes: {
    signedIn: { control: "boolean" },
    haveNotification: { control: "boolean" },
    username: { control: "text" },
    inputPlaceholder: { control: "text" },
    openDropdown: { control: "boolean" },
  },
  args: {
    signedIn: false,
    haveNotification: false,
    username: "Christine",
    inputPlaceholder: "Søg blandt bibliotekets materialer",
    openDropdown: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A2160",
    },
  },
} as Meta<typeof HeaderComp>;

export const Header: StoryFn<typeof HeaderComp> = (args) => (
  <HeaderComp {...args} />
);

export const StickyHeaderWithContent = (props: HeaderProps) => (
  <div>
    <HeaderComp {...props} />
    <main className="p-16">
      <p className="my-16">
        <strong>
          Because of limitations regarding determing y position and scroll in an
          iframe open the frame to see the sticky header in action
        </strong>
      </p>
      {[...Array(50)].map(() => (
        <>
          <p>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </p>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
        </>
      ))}
    </main>
  </div>
);
