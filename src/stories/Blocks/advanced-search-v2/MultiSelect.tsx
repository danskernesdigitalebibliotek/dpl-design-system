import React from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";

const MultiSelect: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <div className="hui-multiselect-wrapper">
      <label className="hui-multiselect-wrapper__label">Materialetype</label>
      <div className="hui-multiselect">
        <button
          className="hui-multiselect__button hui-multiselect__button--open"
          type="button"
        >
          <div className="hui-multiselect__button-label">
            Valgt
            <span className="hui-multiselect__button-label__count-badge">
              3
            </span>
          </div>
          <div className="hui-multiselect__button-arrow">
            <ExpandMoreIcon />
          </div>
        </button>
        {open && (
          <div
            className="hui-multiselect__popover-panel"
            style={{ "--button-width": "100%" } as React.CSSProperties}
          >
            <input
              className="hide-visually"
              type="text"
              aria-label="Search options"
            />
            <div className="hui-multiselect__options">
              <div
                style={
                  {
                    "--input-width": "0px",
                    "--button-width": "0px",
                  } as React.CSSProperties
                }
              >
                <div>
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-bøger"
                        className="checkbox__input"
                        type="checkbox"
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
                <div>
                  <div className="hui-multiselect__options__option hui-multiselect__options__option--selected">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-e-bøger"
                        className="checkbox__input"
                        type="checkbox"
                        checked
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
                <div>
                  <div className="hui-multiselect__options__option hui-multiselect__options__option--selected">
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
                <div>
                  <div className="hui-multiselect__options__option hui-multiselect__options__option--selected">
                    <div className="checkbox" style={{ pointerEvents: "none" }}>
                      <input
                        id="multiselect-podcasts"
                        className="checkbox__input"
                        type="checkbox"
                        checked
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
                  <div className="hui-multiselect__options__option">
                    <div className="checkbox">
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                Nulstil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MultiSelect;
