import { ComponentMeta, ComponentStory } from "@storybook/react";

import MaterialSearch from "./MaterialSearch";

export default {
  title: "Library / Material Search",
  component: MaterialSearch,
  argTypes: {},
} as ComponentMeta<typeof MaterialSearch>;

const uniqueIdentifier = Math.floor(Math.random() * 10000);

const Template: ComponentStory<typeof MaterialSearch> = () => {
  return (
    <div className="material-search">
      <div className="material-search__inputs-container">
        <label
          className="material-search__label"
          htmlFor="hidden-work-id-input"
        >
          Hidden Work ID field
          <input
            data-field-input-work-id={uniqueIdentifier}
            id="hidden-work-id-input"
            type="text"
            placeholder=""
            className="material-search__input"
            disabled
          />
        </label>
        <label
          className="material-search__label"
          htmlFor="hidden-material-type-input"
        >
          Hidden Material Type field
          <input
            type="text"
            id="hidden-material-type-input"
            data-field-input-material-type-id={uniqueIdentifier}
            className="material-search__input"
            disabled
          />
        </label>
      </div>

      <MaterialSearch />
    </div>
  );
};

export const Default = Template.bind({});
