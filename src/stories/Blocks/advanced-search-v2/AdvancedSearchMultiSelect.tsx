import { FC } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

export type AdvancedSearchMultiSelectType = {
  label: string;
  selectedCount?: number;
};

const AdvancedSearchMultiSelect: FC<AdvancedSearchMultiSelectType> = ({
  label,
  selectedCount = 0,
}) => {
  const hasSelection = selectedCount > 0;

  return (
    <div className="advanced-search-multi-select-wrapper">
      <label className="advanced-search-multi-select__label">{label}</label>
      <div className="advanced-search-multi-select">
        <button
          type="button"
          className="dropdown dropdown--grey-borders advanced-search-multi-select__button"
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

export default AdvancedSearchMultiSelect;
