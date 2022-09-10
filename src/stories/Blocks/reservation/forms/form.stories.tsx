import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Reservation from "../Reservation";
import Email from "./Email";
import Sms from "./Sms";
import Expiration from "./Expiration";
import Collect from "./Collect";

export default {
  title: "Blocks / Reservation / Forms",
  component: Email,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4560%3A33328",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Reservation>;

const EmailModalTemplate: ComponentStory<typeof Email> = (args) => {
  return <Email {...args} />;
};
const SmsModalTemplate: ComponentStory<typeof Email> = (args) => {
  return <Sms {...args} />;
};
const ExpirationModalTemplate: ComponentStory<typeof Email> = (args) => {
  return <Expiration {...args} />;
};
const CollectModalTemplate: ComponentStory<typeof Email> = (args) => {
  return <Collect {...args} />;
};
export const EmailModal = EmailModalTemplate.bind({});
export const SmsModal = SmsModalTemplate.bind({});
export const ExpirationModal = ExpirationModalTemplate.bind({});
export const CollectModal = CollectModalTemplate.bind({});
