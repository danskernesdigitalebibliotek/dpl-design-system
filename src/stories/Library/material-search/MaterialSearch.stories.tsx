import { Meta, StoryFn } from "@storybook/react-webpack5";
import MaterialSearch from "./MaterialSearch";
import ErrorState from "./Errors/ErrorState";

export default {
  title: "Library / Material Search",
  component: MaterialSearch,
  argTypes: {
    errorState: {
      control: {
        type: "select",
        options: ["NoError", "WorkError", "MaterialTypeError"],
      },
    },
  },
  args: {
    errorState: "NoError",
  },
} as Meta<typeof MaterialSearch>;

const uniqueIdentifier = Math.floor(Math.random() * 10000);

const Template: StoryFn<typeof MaterialSearch> = (args) => {
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

      <MaterialSearch {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const withWorkError = Template.bind({});
withWorkError.args = {
  errorState: ErrorState.WorkError,
};

export const withMaterialTypeError = Template.bind({});
withMaterialTypeError.args = {
  errorState: ErrorState.MaterialTypeError,
};
