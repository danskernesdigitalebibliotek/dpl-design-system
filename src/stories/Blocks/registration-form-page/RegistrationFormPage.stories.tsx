import { StoryFn } from "@storybook/react";
import RedirectToLoginMessage, {
  RedirectToLoginMessageProps,
} from "./RedirectToLoginMessage";

export default {
  title: "Blocks / Registration Form Page",
  argTypes: {
    infoTopText: { control: { type: "text" } },
    infoBottomText: { control: { type: "text" } },
    buttonText: { control: { type: "text" } },
  },
  args: {
    infoTopText:
      "You are now registered as a user and need to log in again to be able to use the application.",
    infoBottomText:
      "You will be sent to the Adgangsplatformen to log in again in 10 seconds",
    buttonText: "Log in",
  },
};

export const RedirectToLoginMessageExample: StoryFn<
  typeof RedirectToLoginMessage
> = (args: RedirectToLoginMessageProps) => <RedirectToLoginMessage {...args} />;
