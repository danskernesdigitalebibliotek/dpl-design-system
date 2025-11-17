import { FC } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

export type HeadlessMultiSelectType = {
  label: string;
  selectedCount?: number;
};

const HeadlessMultiSelect: FC<HeadlessMultiSelectType> = ({
  label,
  selectedCount = 0,
}) => {
  const hasSelection = selectedCount > 0;

  return (
    <div className="advanced-search-select-search-wrapper">
      <label className="advanced-search-select-search__label">{label}</label>
      <div className="advanced-search-select-search">
        <button
          type="button"
          className="dropdown dropdown--grey-borders advanced-search-select-search__button"
        >
          <div className="dropdown__select dropdown__select--inline-body-font focus-styling advanced-search-v2__multiselect-button">
            {hasSelection ? "Selected" : "All"}
            {hasSelection && (
              <span className="advanced-search-v2__count-badge">
                {selectedCount}
              </span>
            )}
          </div>
          <div className="dropdown__arrows dropdown__arrows--inline">
            <ExpandMoreIcon className="dropdown__arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeadlessMultiSelect;
