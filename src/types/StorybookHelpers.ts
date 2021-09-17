import { Meta } from "@storybook/react";

/**
 * The storybook ArgType where missing sufficient type information,
 * so we are patching it with our own type.
 * They might be unnecessary in the future.
 * import { ArgType } from "@storybook/addons/dist/ts3.9/types";
 */
type ArgTypesWithKeys<T> = {
  [Key in keyof T]: {
    name?: string;
    description?: string;
    defaultValue: T[Key];
    [key: string]: unknown;
  };
};

export type StoryBaseType<StorybookCompProps> = Meta & {
  argTypes: ArgTypesWithKeys<StorybookCompProps>;
};
