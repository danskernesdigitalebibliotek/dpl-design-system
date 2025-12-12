import React from "react";

const AdvancedSearchFacetGroup: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <li className="advanced-search-facet-group">
      <button
        type="button"
        className="advanced-search-facet-group__header"
        aria-expanded="true"
        aria-controls="filter-group-content-ACCESSTYPE"
      >
        <div className="advanced-search-facet-group__header-content">
          <span className="advanced-search-facet-group__label">
            Fysisk / online
          </span>
        </div>
        <img
          alt=""
          className={`advanced-search-facet-group__chevron ${open ? "advanced-search-facet-group__chevron--expanded" : ""}`}
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
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
