import { FC } from "react";
import { Checkbox } from "../../Library/Forms/checkbox/Checkbox";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as PlusIcon } from "../../../public/icons/collection/Plus.svg";

export type FilterItem = {
  label: string;
  count: number;
  checked: boolean;
};

export type AdvancedSearchFilterGroupType = {
  label: string;
  selectedCount: number;
  items: FilterItem[];
};

const AdvancedSearchFilterGroup: FC<AdvancedSearchFilterGroupType> = ({
  label,
  selectedCount,
  items,
}) => {
  return (
    <div className="advanced-search-filter-group">
      <button
        type="button"
        className="advanced-search-filter-group__header"
        aria-expanded="true"
      >
        <div className="advanced-search-filter-group__header-content">
          <span className="advanced-search-filter-group__label">{label}</span>
          {selectedCount > 0 && (
            <span className="advanced-search-filter-group__count-badge">
              {selectedCount}
            </span>
          )}
        </div>
        <ExpandMoreIcon className="advanced-search-filter-group__chevron advanced-search-filter-group__chevron--expanded" />
      </button>

      <div className="advanced-search-filter-group__content">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="advanced-search-filter-group__item"
          >
            <Checkbox
              key={`checkbox-${item.label}-${item.checked}`}
              isChecked={item.checked}
              label={item.label}
              hiddenLabel={false}
            />
            {item.count > 0 && (
              <span className="advanced-search-filter-group__item-count">
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="advanced-search-filter-group__footer">
        <button
          type="button"
          className="advanced-search-filter-group__show-all"
        >
          <PlusIcon className="advanced-search-filter-group__show-all-icon" />
          <span>Vis alle</span>
        </button>
      </div>
    </div>
  );
};

export default AdvancedSearchFilterGroup;
