import { ComponentStory } from "@storybook/react";
import RedirectToLoginMessage, {
  RedirectToLoginMessageProps,
} from "./RedirectToLoginMessage";

export default {
  title: "Blocks / Registration Form Page",
  argTypes: {
    infoTopText: {
      name: "Headline",
      defaultValue:
        "You are now registered as a user and need to log in again to be able to use the application.",
      control: { type: "text" },
    },
    infoBottomText: {
      name: "Text",
      defaultValue:
        "You will be sent to the Adgangsplatformen to log in again in 10 seconds",
      control: { type: "text" },
    },
    buttonText: {
      name: "Button text",
      defaultValue: "Log in",
      control: { type: "text" },
    },
  },
};

export const RedirectToLoginMessageExample: ComponentStory<
  typeof RedirectToLoginMessage
> = (args: RedirectToLoginMessageProps) => <RedirectToLoginMessage {...args} />;
