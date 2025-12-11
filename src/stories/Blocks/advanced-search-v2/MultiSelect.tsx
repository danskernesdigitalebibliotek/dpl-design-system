import React from "react";

const MultiSelect: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <div className="hui-multiselect-wrapper">
      <label className="hui-multiselect-wrapper__label">Materialetype</label>
      <div className="hui-multiselect" data-open="">
        <button
          className="hui-multiselect__button hui-multiselect__button--open"
          type="button"
          aria-expanded="true"
          data-headlessui-state="open active"
          data-open=""
          data-active=""
          aria-controls="headlessui-popover-panel-_r_12_"
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
            data-headlessui-state="open"
            data-open=""
            style={{ "--button-width": "500px" } as React.CSSProperties}
          >
            <input
              readOnly
              className="hide-visually"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="list"
              data-autofocus=""
              type="text"
              aria-controls="headlessui-combobox-options-_r_gv_"
            />
            <div className="hui-multiselect__options">
              <div
                aria-labelledby=""
                role="listbox"
                aria-multiselectable="true"
                style={
                  {
                    "--input-width": "0px",
                    "--button-width": "0px",
                  } as React.CSSProperties
                }
              >
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-bøger"
                        className="checkbox__input"
                        type="checkbox"
                        checked
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-bøger"
                        data-cy="multiselect-bøger"
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
                          Bøger
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-e-bøger"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-e-bøger"
                        data-cy="multiselect-e-bøger"
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
                          E-bøger
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-lydbøger"
                        className="checkbox__input"
                        type="checkbox"
                        checked
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-lydbøger"
                        data-cy="multiselect-lydbøger"
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
                          Lydbøger
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-podcasts"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-podcasts"
                        data-cy="multiselect-podcasts"
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
                          Podcasts
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-film"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-film"
                        data-cy="multiselect-film"
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
                          Film
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-tv-serier"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-tv-serier"
                        data-cy="multiselect-tv-serier"
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
                          Tv-serier
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-musik"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-musik"
                        data-cy="multiselect-musik"
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
                          Musik
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-noder"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-noder"
                        data-cy="multiselect-noder"
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
                          Noder
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-aviser og tidsskrifter"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-aviser og tidsskrifter"
                        data-cy="multiselect-aviser og tidsskrifter"
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
                          Aviser og tidsskrifter
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-tegneserier"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-tegneserier"
                        data-cy="multiselect-tegneserier"
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
                          Tegneserier
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-computerspil"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-computerspil"
                        data-cy="multiselect-computerspil"
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
                          Computerspil
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="hui-multiselect__divider"
                  role="separator"
                  aria-hidden="true"
                />
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-artikler"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-artikler"
                        data-cy="multiselect-artikler"
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
                          artikler
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-billedmaterialer"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-billedmaterialer"
                        data-cy="multiselect-billedmaterialer"
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
                          billedmaterialer
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-brætspil"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-brætspil"
                        data-cy="multiselect-brætspil"
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
                          brætspil
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div role="option" aria-selected="false">
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-øvrige"
                        className="checkbox__input"
                        type="checkbox"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="multiselect-øvrige"
                        data-cy="multiselect-øvrige"
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
                          øvrige
                        </span>
                      </label>
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
