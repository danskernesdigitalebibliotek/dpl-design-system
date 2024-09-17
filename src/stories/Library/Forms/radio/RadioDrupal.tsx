export type CheckboxProps = {
  legend?: string;
  description?: string;
};

export const RadioDrupal: React.FC<CheckboxProps> = ({
  legend,
  description,
}) => {
  return (
    <div className="dpl-form">
      <fieldset className="dpl-fieldset">
        <legend>
          <span className="fieldset-legend">{legend}</span>
        </legend>
        <div className="fieldset-wrapper">
          <div
            className="dpl-radio-fieldset__wrapper__col"
            id="edit-radios-test-one-col"
          >
            <div className="dpl-input radio-override form-item form-type-radio">
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
              <div className="description">
                <div className="webform-element-description input-description">
                  {description}
                </div>
              </div>
            </div>
            <div className="dpl-input radio-override form-item form-type-radio">
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
              <div className="description">
                <div className="webform-element-description input-description">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
