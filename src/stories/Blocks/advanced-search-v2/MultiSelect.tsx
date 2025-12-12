import React from "react";

const MultiSelect: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <div className="hui-multiselect-wrapper">
      <label className="hui-multiselect-wrapper__label">Materialetype</label>
      <div className="hui-multiselect" data-open="">
        <button
          className="hui-multiselect__button hui-multiselect__button--open"
          type="button"
          aria-expanded={open ? "true" : "false"}
          data-headlessui-state="open active"
          data-open=""
          data-active=""
          {...(open && { "aria-controls": "headlessui-popover-panel-_r_12_" })}
        >
          <div className="hui-multiselect__button-label">
            Valgt
            <span className="hui-multiselect__button-label__count-badge">
              2
            </span>
          </div>
          <div className="hui-multiselect__button-arrow">
            <img
              alt=""
              src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
            />
          </div>
        </button>
        {open && (
          <div
            className="hui-multiselect__popover-panel"
            id="headlessui-popover-panel-_r_12_"
            data-headlessui-state="open"
            data-open=""
            style={{ "--button-width": "100%" } as React.CSSProperties}
          >
            <input
              readOnly
              className="hide-visually"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-label="Material type filter"
              data-autofocus=""
              type="text"
              aria-controls="headlessui-combobox-options-_r_gv_"
            />
            <div className="hui-multiselect__options">
              <div
                aria-label="Material type options"
                role="listbox"
                aria-multiselectable="true"
                tabIndex={0}
                style={
                  {
                    "--input-width": "0px",
                    "--button-width": "0px",
                  } as React.CSSProperties
                }
              >
                <div role="option" aria-selected="false" aria-label="Bøger">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true">
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
                        aria-hidden="true"
                      >
                        Bøger
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="E-bøger">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        E-bøger
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Lydbøger">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true">
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
                        aria-hidden="true"
                      >
                        Lydbøger
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Podcasts">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Podcasts
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Film">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Film
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Tv-serier">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Tv-serier
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Musik">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Musik
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="Noder">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Noder
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  role="option"
                  aria-selected="false"
                  aria-label="Aviser og tidsskrifter"
                >
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Aviser og tidsskrifter
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  role="option"
                  aria-selected="false"
                  aria-label="Tegneserier"
                >
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Tegneserier
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  role="option"
                  aria-selected="false"
                  aria-label="Computerspil"
                >
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        Computerspil
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="hui-multiselect__divider"
                  role="separator"
                  aria-hidden="true"
                />
                <div role="option" aria-selected="false" aria-label="artikler">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        artikler
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  role="option"
                  aria-selected="false"
                  aria-label="billedmaterialer"
                >
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        billedmaterialer
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="brætspil">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        brætspil
                      </span>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false" aria-label="øvrige">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" aria-hidden="true">
                      <span className="checkbox__input" aria-hidden="true" />
                      <span
                        data-cy="checkbox-text"
                        className="checkbox__text text-small-caption color-secondary-gray "
                        aria-hidden="true"
                      >
                        øvrige
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hui-multiselect__footer">
              <button type="button" className="hui-multiselect__reset-button">
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MultiSelect;
