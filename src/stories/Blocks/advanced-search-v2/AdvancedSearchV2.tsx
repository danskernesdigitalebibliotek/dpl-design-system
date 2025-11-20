import { FC } from "react";
import AdvancedSearchForm from "./AdvancedSearchForm";
import AdvancedSearchResults from "./AdvancedSearchResults";
import { SearchData } from "./types";

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
