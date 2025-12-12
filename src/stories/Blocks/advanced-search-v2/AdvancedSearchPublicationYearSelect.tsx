import React from "react";

const AdvancedSearchPublicationYearSelect: React.FC<{ open?: boolean }> = ({
  open = false,
}) => {
  return (
    <div className="range-select-wrapper">
      <label className="range-select-wrapper__label">Year</label>
      <div className="range-select" data-open="">
        <button
          className="range-select__button range-select__button--open"
          type="button"
          aria-expanded={open ? "true" : "false"}
          data-open=""
          data-active=""
          {...(open && { "aria-controls": "headlessui-popover-panel-_r_1q_" })}
        >
          <div className="range-select__button-label">
            Selected
            <span className="range-select__button-label__count-badge">
              2015-2025
            </span>
          </div>
          <div className="range-select__button-arrow">
            <img
              alt=""
              src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
            />
          </div>
        </button>
        {open && (
          <div
            id="headlessui-popover-panel-_r_1q_"
            className="range-select__popover-panel"
            data-open=""
            style={{ "--button-width": "100%" } as React.CSSProperties}
          >
            <div className="range-select__content">
              <div role="radiogroup">
                <div className="range-select__options">
                  <span
                    className="range-select__option"
                    role="radio"
                    aria-checked="false"
                  >
                    <div className="range-select__option-inner">
                      <span>I år (2025)</span>
                      <span
                        className="range-select__option__bullet"
                        aria-hidden="true"
                      />
                    </div>
                  </span>
                  <span
                    className="range-select__option"
                    role="radio"
                    aria-checked="false"
                  >
                    <div className="range-select__option-inner">
                      <span>Seneste 2 år</span>
                      <span
                        className="range-select__option__bullet"
                        aria-hidden="true"
                      />
                    </div>
                  </span>
                  <span
                    className="range-select__option"
                    role="radio"
                    aria-checked="false"
                  >
                    <div className="range-select__option-inner">
                      <span>Seneste 3 år</span>
                      <span
                        className="range-select__option__bullet"
                        aria-hidden="true"
                      />
                    </div>
                  </span>
                  <span
                    className="range-select__option"
                    role="radio"
                    aria-checked="false"
                  >
                    <div className="range-select__option-inner">
                      <span>Seneste 5 år</span>
                      <span
                        className="range-select__option__bullet"
                        aria-hidden="true"
                      />
                    </div>
                  </span>
                  <span
                    className="range-select__option"
                    role="radio"
                    aria-checked="true"
                    data-checked=""
                  >
                    <div className="range-select__option-inner">
                      <span>Seneste 10 år</span>
                      <span
                        className="range-select__option__bullet range-select__option__bullet--checked"
                        aria-hidden="true"
                      />
                    </div>
                  </span>
                </div>
              </div>
              <div className="range-select__range">
                <div className="range-select__field">
                  <label
                    htmlFor="range-select-from"
                    className="range-select-wrapper__label"
                  >
                    From
                  </label>
                  <input
                    id="range-select-from"
                    className="range-select__input"
                    type="number"
                    value="2015"
                  />
                </div>
                <div className="range-select__separator">—</div>
                <div className="range-select__field">
                  <label
                    htmlFor="range-select-to"
                    className="range-select-wrapper__label"
                  >
                    To
                  </label>
                  <input
                    id="range-select-to"
                    className="range-select__input"
                    type="number"
                    value="2025"
                  />
                </div>
              </div>
            </div>
            <div className="range-select__footer">
              <button type="button" className="range-select__reset-button">
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearchPublicationYearSelect;
