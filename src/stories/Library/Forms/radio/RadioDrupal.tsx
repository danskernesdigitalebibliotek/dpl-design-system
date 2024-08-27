export type CheckboxProps = {
  legend?: string;
  description?: string;
};

export const RadioDrupal: React.FC<CheckboxProps> = ({
  legend,
  description,
}) => {
  return (
    <fieldset className="dpl-fieldset dpl-radio-fieldset">
      <legend>
        <span className="fieldset-legend dpl-input">{legend}</span>
      </legend>
      <div className="fieldset-wrapper dpl-radio-fieldset__wrapper">
        <div
          className="dpl-radio-fieldset__wrapper__col"
          id="edit-radios-test-one-col"
        >
          <div className="dpl-radio-fieldset__wrapper__col__item form-item form-type-radio">
            {/* this id is only there because it emulates the Drupal id */}
            <input
              type="radio"
              id="edit-radios-test-one-col-man"
              name="radios_test_one_col"
              value="Man"
              className=""
            />
            <label htmlFor="edit-radios-test-one-col-man" className="">
              Option 1
            </label>
          </div>
          <div className="dpl-radio-fieldset__wrapper__col__item form-item form-type-radio">
            <input
              type="radio"
              id="edit-radios-test-one-col-woman"
              name="radios_test_one_col"
              value="Woman"
              className=""
            />
            <label htmlFor="edit-radios-test-one-col-woman" className="">
              Option 2
            </label>
          </div>
        </div>
        <div className="description">
          <div
            data-drupal-field-elements="description"
            className="webform-element-description"
          >
            {description}
          </div>
        </div>
      </div>
    </fieldset>
  );
};
