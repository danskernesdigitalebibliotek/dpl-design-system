import { FC, Fragment } from "react";

export type SummaryItem = {
  label: string;
  value: string;
  operator?: "and" | "or" | "not";
};

export type AdvancedSearchSummaryType = {
  showEditButton?: boolean;
  items?: SummaryItem[];
};

const AdvancedSearchSummary: FC<AdvancedSearchSummaryType> = ({
  showEditButton = true,
  items = [
    { label: "Creator", value: "Hansen" },
    { label: "Material type", value: "Book", operator: "and" },
  ],
}) => {
  return (
    <div className="advanced-search-summary">
      <div className="advanced-search-summary__items">
        {items.map((item, index) => (
          <Fragment key={`summary-${index}`}>
            {index > 0 && item.operator && (
              <div className="advanced-search-summary__operator">
                {item.operator.toUpperCase()}
              </div>
            )}
            <div className="advanced-search-summary__item">
              <span className="advanced-search-summary__label">
                {item.label}:
              </span>
              <span className="advanced-search-summary__value">
                {item.value}
              </span>
            </div>
          </Fragment>
        ))}

        {showEditButton && (
          <button type="button" className="advanced-search-summary__edit-link">
            Edit Search
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearchSummary;
