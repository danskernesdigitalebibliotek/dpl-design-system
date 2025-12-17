import React from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

const AdvancedSearchFacetGroup: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <li className="advanced-search-facet-group">
      <button
        type="button"
        className="advanced-search-facet-group__header"
        aria-expanded={open ? "true" : "false"}
      >
        <div className="advanced-search-facet-group__header-content">
          <span className="advanced-search-facet-group__label">
            Fysisk / online
          </span>
        </div>
        <ExpandMoreIcon
          className={`advanced-search-facet-group__chevron ${open ? "advanced-search-facet-group__chevron--expanded" : ""}`}
        />
      </button>
      {open && (
        <ul
          id="filter-group-content-ACCESSTYPE"
          className="advanced-search-facet-group__content"
        >
          <li className="advanced-search-facet-group__item">
            <div className="checkbox">
              <input
                id="filter-ACCESSTYPE-online"
                className="checkbox__input"
                aria-describedby="filter-ACCESSTYPE-online-count"
                type="checkbox"
              />
              <label
                className="checkbox__label"
                htmlFor="filter-ACCESSTYPE-online"
                data-cy="filter-ACCESSTYPE-online"
              >
                <span className="checkbox__icon">
                  <svg width="20px" height="20px">
                    <polyline
                      points="1.5 6 4.5 9 10.5 1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span
                  data-cy="checkbox-text"
                  className="checkbox__text text-small-caption color-secondary-gray "
                >
                  online
                </span>
              </label>
            </div>
            <span
              id="filter-ACCESSTYPE-online-count"
              className="advanced-search-facet-group__item-count"
            >
              3
            </span>
          </li>
          <li className="advanced-search-facet-group__item">
            <div className="checkbox">
              <input
                id="filter-ACCESSTYPE-fysisk"
                className="checkbox__input"
                aria-describedby="filter-ACCESSTYPE-fysisk-count"
                type="checkbox"
              />
              <label
                className="checkbox__label"
                htmlFor="filter-ACCESSTYPE-fysisk"
                data-cy="filter-ACCESSTYPE-fysisk"
              >
                <span className="checkbox__icon">
                  <svg width="20px" height="20px">
                    <polyline
                      points="1.5 6 4.5 9 10.5 1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span
                  data-cy="checkbox-text"
                  className="checkbox__text text-small-caption color-secondary-gray "
                >
                  fysisk
                </span>
              </label>
            </div>
            <span
              id="filter-ACCESSTYPE-fysisk-count"
              className="advanced-search-facet-group__item-count"
            >
              2
            </span>
          </li>
        </ul>
      )}
    </li>
  );
};

export default AdvancedSearchFacetGroup;
