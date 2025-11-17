import { FC } from "react";
import AdvancedSearchForm, { SuggestData } from "./AdvancedSearchForm";
import AdvancedSearchResults from "./AdvancedSearchResults";
import { SummaryItem } from "./AdvancedSearchSummary";
import { FilterGroupData } from "./AdvancedSearchFilters";

export type ToggleState = {
  onShelf?: boolean;
  onlyExtraTitles?: boolean;
};

export type SearchData = {
  suggests?: SuggestData[];
  summaryItems?: SummaryItem[];
  filterGroups?: FilterGroupData[];
  toggles?: ToggleState;
  cql?: string;
};

export type AdvancedSearchV2Type = {
  showSummary?: boolean;
  showResults?: boolean;
  showFilters?: boolean;
  showReset?: boolean;
  searchData?: SearchData;
};

const AdvancedSearchV2: FC<AdvancedSearchV2Type> = ({
  showSummary = false,
  showResults = false,
  showFilters = true,
  showReset = false,
  searchData,
}) => {
  return (
    <div className="advanced-search-v2">
      <AdvancedSearchForm
        showSummary={showSummary}
        showReset={showReset}
        searchData={searchData}
      />
      {showResults && (
        <AdvancedSearchResults
          showFilters={showFilters}
          searchData={searchData}
        />
      )}
    </div>
  );
};

export default AdvancedSearchV2;
