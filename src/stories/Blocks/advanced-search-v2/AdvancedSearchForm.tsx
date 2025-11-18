import { FC } from "react";
import AdvancedSearchSuggest from "./AdvancedSearchSuggest";
import AdvancedSearchSummary, { SummaryItem } from "./AdvancedSearchSummary";
import AdvancedSearchMultiSelect from "./AdvancedSearchMultiSelect";
import { SearchData } from "./AdvancedSearchV2";
import { ReactComponent as PlusButtonIcon } from "../../../public/icons/collection/PlusButton.svg";

export type SuggestData = {
  selectedIndexLabel?: string;
  query?: string;
  operator?: "and" | "or" | "not";
};

export type AdvancedSearchFormType = {
  showSummary?: boolean;
  showReset?: boolean;
  searchData?: SearchData;
};

const AdvancedSearchForm: FC<AdvancedSearchFormType> = ({
  showSummary = false,
  showReset = true,
  searchData,
}) => {
  // Use suggests data if provided, otherwise show one empty suggest row
  const suggestsData =
    searchData?.suggests && searchData.suggests.length > 0
      ? searchData.suggests
      : [{}];

  return (
    <section className="advanced-search-v2__form">
      {showSummary && (
        <AdvancedSearchSummary items={searchData?.summaryItems} />
      )}

      {!showSummary && (
        <>
          {/* Suggest inputs */}
          <div className="advanced-search-v2__suggests">
            {suggestsData.map((suggest, index) => (
              <AdvancedSearchSuggest
                key={`suggest-${index}`}
                showOperator={index < suggestsData.length - 1}
                selectedIndexLabel={suggest.selectedIndexLabel}
                query={suggest.query}
                operator={suggest.operator}
              />
            ))}

            <button type="button" className="advanced-search-v2__add-suggest">
              <PlusButtonIcon />
              <span>Add row</span>
            </button>
          </div>

          {/* Filter selects */}
          <div className="advanced-search-v2__selects-grid">
            <AdvancedSearchMultiSelect
              label="Material type"
              selectedCount={0}
            />

            <AdvancedSearchMultiSelect
              label="Literature form"
              selectedCount={0}
            />

            <AdvancedSearchMultiSelect label="Access" selectedCount={2} />

            <AdvancedSearchMultiSelect
              label="Holding status"
              selectedCount={0}
            />
          </div>

          {/* Action buttons */}
          <div className="advanced-search-v2__action-buttons">
            <button
              type="button"
              className="btn-primary btn-filled btn-large arrow__hover--right-small"
            >
              Search
            </button>
            {showReset && (
              <button
                type="button"
                className="btn-primary btn-outline btn-large arrow__hover--right-small advanced-search-v2__reset-button"
              >
                Reset
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default AdvancedSearchForm;
