import { FC } from "react";
import clsx from "clsx";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as MinusButtonIcon } from "../../../public/icons/collection/MinusButton.svg";

export type AdvancedSearchSuggestType = {
  showOperator?: boolean;
  operator?: "and" | "or" | "not";
  selectedIndex?: string;
  selectedIndexLabel?: string;
  query?: string;
};

const AdvancedSearchSuggest: FC<AdvancedSearchSuggestType> = ({
  showOperator = false,
  operator = "and",
  selectedIndexLabel = "All indexes",
  query = "",
}) => {
  return (
    <>
      <div className="advanced-search-suggest">
        <div className="advanced-search-v2__search-index-select">
          <button type="button" className="dropdown dropdown--grey-borders">
            <div className="dropdown__select dropdown__select--inline-body-font focus-styling">
              {selectedIndexLabel}
            </div>
            <div className="dropdown__arrows dropdown__arrows--inline">
              <ExpandMoreIcon className="dropdown__arrow" />
            </div>
          </button>
        </div>

        <div className="advanced-search-suggest__combobox-wrapper">
          <input
            type="text"
            className="advanced-search-combobox-input advanced-search-suggest__combobox-input"
            placeholder="Search for something..."
            value={query}
            readOnly
          />
        </div>

        <button
          type="button"
          className="advanced-search-suggest__remove-button"
          aria-label="Remove row"
        >
          <MinusButtonIcon />
        </button>
      </div>

      {showOperator && (
        <div className="advanced-search-suggest__operators">
          <button
            type="button"
            className={clsx(
              "advanced-search-suggest__operator",
              operator === "and" && "advanced-search-suggest__operator--active",
            )}
          >
            AND
          </button>
          <button
            type="button"
            className={clsx(
              "advanced-search-suggest__operator",
              operator === "or" && "advanced-search-suggest__operator--active",
            )}
          >
            OR
          </button>
          <button
            type="button"
            className={clsx(
              "advanced-search-suggest__operator",
              operator === "not" && "advanced-search-suggest__operator--active",
            )}
          >
            NOT
          </button>
        </div>
      )}
    </>
  );
};

export default AdvancedSearchSuggest;
