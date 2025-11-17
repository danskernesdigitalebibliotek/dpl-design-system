import { SuggestData } from "./AdvancedSearchForm";
import { SummaryItem } from "./AdvancedSearchSummary";

export type Operator = "and" | "or" | "not";

export type SuggestState = {
  term: string;
  query: string;
  operator?: Operator;
};

export type FilterState = {
  label: string;
  facetField: string;
  selectedValues: string[];
  availableValues?: { label: string; count: number }[]; // Available options with counts
};

// Field mapping from CQL terms to display labels
export const FIELD_LABELS: Record<string, string> = {
  "term.default": "Alle felter",
  "term.title": "Titel",
  "term.creator": "Forfatter",
  "term.subject": "Emne",
  "term.publisher": "Udgiver",
  "phrase.mainlanguage": "Sprog",
  "phrase.generalmaterialtype": "Materialetype",
  "phrase.specificmaterialtype": "Specifik materialetype",
  "phrase.fictionnonfiction": "Skønlitteratur/faglitteratur",
  "phrase.access": "Tilgængelighed",
};

/**
 * Builds a CQL query from suggest states
 * e.g. [{ term: "term.default", query: "harry", operator: "and" }] => '(term.default="harry")'
 */
export const buildCQLQuery = (suggests: SuggestState[]): string => {
  const suggestTerms: string[] = [];

  suggests.forEach((suggest, i) => {
    if (!suggest.query.trim()) return;

    const term = `${suggest.term}="${suggest.query}"`;

    if (i === 0) {
      suggestTerms.push(term);
    } else {
      const operator = (suggest.operator || "and").toUpperCase();
      suggestTerms.push(`${operator} ${term}`);
    }
  });

  return suggestTerms.length > 0 ? `(${suggestTerms.join(" ")})` : "*";
};

/**
 * Converts SuggestState to SuggestData for form display
 */
export const suggestStateToSuggestData = (
  suggests: SuggestState[],
): SuggestData[] => {
  return suggests.map((suggest) => ({
    selectedIndexLabel: FIELD_LABELS[suggest.term] || suggest.term,
    query: suggest.query,
    operator: suggest.operator,
  }));
};

/**
 * Converts SuggestState to SummaryItems for summary display
 */
export const suggestStateToSummaryItems = (
  suggests: SuggestState[],
): SummaryItem[] => {
  return suggests.map((suggest) => ({
    label: FIELD_LABELS[suggest.term] || suggest.term,
    value: suggest.query,
    operator: suggest.operator,
  }));
};

/**
 * Converts FilterState to SummaryItems for summary display
 * Each filter value gets its own summary item with "and" operator
 */
export const filterStateToSummaryItems = (
  filters: FilterState[],
): SummaryItem[] => {
  return filters.flatMap((filter) =>
    filter.selectedValues.map((value) => ({
      label: filter.label,
      value,
      operator: "and" as Operator,
    })),
  );
};

/**
 * Converts FilterState to FilterGroupData for sidebar display
 */
export const filterStateToFilterGroups = (filters: FilterState[]) => {
  return filters.map((filter) => ({
    label: filter.label,
    facetField: filter.facetField,
    selectedValues: filter.selectedValues,
    items:
      filter.availableValues?.map((av) => ({
        label: av.label,
        count: av.count,
        checked: filter.selectedValues.includes(av.label),
      })) || [],
  }));
};

/**
 * Helper to create both suggests, summaryItems, and filterGroups from SuggestState and FilterState
 * This allows you to define your search data once and use it for both form and summary
 */
export const prepareSearchData = (
  suggests: SuggestState[],
  filters: FilterState[] = [],
) => {
  const suggestSummaryItems = suggestStateToSummaryItems(suggests);
  const filterSummaryItems = filterStateToSummaryItems(filters);

  return {
    suggests: suggestStateToSuggestData(suggests),
    summaryItems: [...suggestSummaryItems, ...filterSummaryItems],
    filterGroups: filterStateToFilterGroups(filters),
    cql: buildCQLQuery(suggests),
  };
};
