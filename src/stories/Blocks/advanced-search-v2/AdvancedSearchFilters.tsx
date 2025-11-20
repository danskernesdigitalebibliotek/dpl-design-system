import { FC } from "react";
import AdvancedSearchToggle from "./AdvancedSearchToggle";
import AdvancedSearchFilterGroup from "./AdvancedSearchFilterGroup";
import { ToggleState, FilterGroupData } from "./types";

export type AdvancedSearchFiltersType = {
  showToggles?: boolean;
  filterGroups?: FilterGroupData[];
  toggles?: ToggleState;
};

const AdvancedSearchFilters: FC<AdvancedSearchFiltersType> = ({
  showToggles = true,
  filterGroups = [
    {
      label: "Material type",
      facetField: "phrase.generalmaterialtype",
      selectedValues: [],
      items: [
        { label: "Book", count: 15, checked: false },
        { label: "E-book", count: 8, checked: false },
        { label: "Audio book", count: 5, checked: false },
      ],
    },
    {
      label: "Literature form",
      facetField: "phrase.fictionnonfiction",
      selectedValues: [],
      items: [
        { label: "Fiction", count: 20, checked: false },
        { label: "Non-fiction", count: 22, checked: false },
      ],
    },
  ],
  toggles,
}) => {
  return (
    <aside className="advanced-search-filters">
      <div className="advanced-search-filters__container">
        {showToggles && (
          <div className="advanced-search-filters__toggles">
            <AdvancedSearchToggle
              label="På hylden"
              description="Vis kun materialer der er til rådighed på hylden"
              checked={toggles?.onShelf ?? false}
            />
            <AdvancedSearchToggle
              label='Kun "Ekstra Titler"'
              description="Vis kun resultater der ikke er begrænset af kvoter for digitale lån."
              checked={toggles?.onlyExtraTitles ?? false}
            />
          </div>
        )}

        {filterGroups.map((group) => (
          <AdvancedSearchFilterGroup
            key={group.facetField}
            label={group.label}
            selectedCount={group.selectedValues.length}
            items={group.items}
          />
        ))}
      </div>
    </aside>
  );
};

export default AdvancedSearchFilters;
