import clsx from "clsx";
import React from "react";

export type CheckboxDrupalProps = {
  label: string;
  validation?: string;
  classNames?: string;
  includeHeadline?: boolean;
  description?: string;
};

// This component and styling are meant to target specifically the Drupal HTML structure.
// Note that some of the classes are also copied from there. The classes we created ourselves
// can be found in the ./checkbox.scss file in this directory.
export const CheckboxDrupal: React.FC<CheckboxDrupalProps> = ({
  label,
  validation,
  classNames,
  includeHeadline,
  description,
}) => {
  const checkboxElement = (checkboxLabel: string) => {
    return (
      <div
        className={clsx(
          "dpl-input js-form-item form-item js-form-type-checkbox form-item-title-example js-form-item-title-example checkbox-override",
          { classNames },
        )}
      >
        <input
          aria-describedby="edit-title-example--description"
          type="checkbox"
          value="1"
          aria-label={checkboxLabel}
        />
        <label
          id="edit-title-example--description"
          htmlFor="edit-title-example"
          className="input-label checkbox__text text-small-caption color-secondary-gray"
        >
          {checkboxLabel}
        </label>
        {!!description && (
          <div className="description">
            <div className="webform-element-description input-description">
              {description}
            </div>
          </div>
        )}
        {validation && <div className="">{validation}</div>}
      </div>
    );
  };

  const checkboxElementMultiple = (checkboxLabel: string) => {
    return (
      <fieldset
        data-drupal-selector="edit-multiple-checkboxes-title"
        aria-describedby="edit-multiple-checkboxes-title--wrapper--description"
        id="edit-multiple-checkboxes-title--wrapper"
        className="checkboxes--wrapper fieldgroup form-composite webform-composite-visible-title js-webform-type-checkboxes webform-type-checkboxes js-form-item form-item js-form-wrapper form-wrapper dpl-fieldset"
      >
        <legend>
          <span className="fieldset-legend">Multiple checkboxes title</span>
        </legend>
        <div className="fieldset-wrapper">
          <div
            id="edit-multiple-checkboxes-title"
            className="js-webform-checkboxes webform-options-display-one-column form-checkboxes"
          >
            {[1, 2, 3, 4, 5].map((value) => {
              // Append a number to make it easier to distinguish between each entry.
              return checkboxElement(`${checkboxLabel} ${value}`);
            })}
          </div>
          <div className="description">
            <div
              id="edit-multiple-checkboxes-title--wrapper--description"
              data-drupal-field-elements="description"
              className="webform-element-description"
            />
          </div>
        </div>
      </fieldset>
    );
  };

  return (
    <div className="dpl-form">
      {includeHeadline && checkboxElementMultiple(label || "")}
      {!includeHeadline && checkboxElement(label || "label")}
    </div>
  );
};
