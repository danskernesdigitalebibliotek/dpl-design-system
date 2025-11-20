import { FilterItem } from "./AdvancedSearchFilterGroup";
import { SummaryItem } from "./AdvancedSearchSummary";

export type SuggestData = {
  selectedIndexLabel?: string;
  query?: string;
  operator?: "and" | "or" | "not";
};

export type FilterGroupData = {
  label: string;
  facetField: string;
  selectedValues: string[];
  items: FilterItem[];
};

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
