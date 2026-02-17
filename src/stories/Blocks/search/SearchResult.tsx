import React from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as CheckIcon } from "../../../public/icons/collection/Check.svg";
import { ReactComponent as FilterIcon } from "../../../public/icons/collection/Filter.svg";
import { ReactComponent as CloseIcon } from "../../../public/icons/collection/CloseSmall.svg";
import { ReactComponent as ArrowSmallRight } from "../../Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconFavourite } from "../../Library/Icons/icon-favourite/IconFavourite";

const Search: React.FC = () => {
  return (
    <div className="search">
      <div className="search__header">
        <h1
          className="search__header__title"
          data-cy="search-result-header"
          aria-live="polite"
        >
          Viser resultater for &quot;harry&quot;
        </h1>
      </div>
      <div className="search__results">
        <div className="search__grid">
          <aside className="search-facets">
            <div className="search-facets__container">
              <ul className="search-facets__toggles">
                <li>
                  <div className="search-toggle">
                    <button
                      type="button"
                      role="switch"
                      aria-checked="true"
                      aria-label="On shelf"
                      className="search-toggle__button search-toggle__button--checked"
                      id="on-shelf"
                    >
                      <span className="search-toggle__slider" />
                    </button>
                    <label
                      htmlFor="on-shelf"
                      className="search-toggle__content cursor-pointer"
                    >
                      <span className="search-toggle__label">On shelf</span>
                      <span className="search-toggle__description">
                        Only show results available at the library now.
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="search-toggle">
                    <button
                      type="button"
                      role="switch"
                      aria-checked="false"
                      aria-label="Kan altid lånes"
                      className="search-toggle__button"
                      id="can-always-be-loaned"
                    >
                      <span className="search-toggle__slider" />
                    </button>
                    <label
                      htmlFor="can-always-be-loaned"
                      className="search-toggle__content cursor-pointer"
                    >
                      <span className="search-toggle__label">
                        Kan altid lånes
                      </span>
                      <span className="search-toggle__description">
                        Only show results that can always be loaned.
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="search-radio-button-group-wrapper">
                <div
                  className="search-radio-button-group"
                  role="radiogroup"
                  aria-labelledby="headlessui-label-online headlessui-label-fysisk"
                >
                  <span
                    role="radio"
                    aria-checked="true"
                    tabIndex={0}
                    data-headlessui-state="checked"
                    data-checked=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-online"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input search-radio-button-group__input--checked" />
                      Online
                    </div>
                  </span>
                  <span
                    role="radio"
                    aria-checked="false"
                    tabIndex={-1}
                    data-headlessui-state=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-fysisk"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input " />
                      Fysisk
                    </div>
                  </span>
                </div>
                <div
                  className="search-radio-button-group"
                  role="radiogroup"
                  aria-labelledby="headlessui-label-fiktion headlessui-label-nonfiktion"
                >
                  <span
                    role="radio"
                    aria-checked="false"
                    tabIndex={-1}
                    data-headlessui-state=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-fiktion"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input " />
                      Fiktion
                    </div>
                  </span>
                  <span
                    role="radio"
                    aria-checked="true"
                    tabIndex={0}
                    data-headlessui-state="checked"
                    data-checked=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-nonfiktion"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input search-radio-button-group__input--checked" />
                      Non-fiktion
                    </div>
                  </span>
                </div>
                <div
                  className="search-radio-button-group"
                  role="radiogroup"
                  aria-labelledby="headlessui-label-voksne headlessui-label-born"
                >
                  <span
                    role="radio"
                    aria-checked="false"
                    tabIndex={0}
                    data-headlessui-state=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-voksne"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input " />
                      Voksne
                    </div>
                  </span>
                  <span
                    role="radio"
                    aria-checked="false"
                    tabIndex={-1}
                    data-headlessui-state=""
                  >
                    <div
                      className="search-radio-button-group__label"
                      id="headlessui-label-born"
                      data-headlessui-state=""
                    >
                      <span className="search-radio-button-group__input " />
                      Børn
                    </div>
                  </span>
                </div>
              </div>
              <ul className="search-facets__groups">
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="true"
                    aria-controls="filter-group-content-MATERIALTYPESGENERAL"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">Format</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron search-facet-group__chevron--expanded" />
                  </button>
                  <ul
                    id="filter-group-content-MATERIALTYPESGENERAL"
                    className="search-facet-group__content"
                  >
                    <li className="search-facet-group__item">
                      <div className="checkbox">
                        <input
                          id="filter-MATERIALTYPESGENERAL-podcasts"
                          className="checkbox__input"
                          aria-describedby="filter-MATERIALTYPESGENERAL-podcasts-count"
                          type="checkbox"
                        />
                        <label
                          className="checkbox__label"
                          htmlFor="filter-MATERIALTYPESGENERAL-podcasts"
                          data-cy="filter-MATERIALTYPESGENERAL-podcasts"
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
                            podcasts
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="true"
                    aria-controls="filter-group-content-CREATORS"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">
                        Forfatter
                      </span>
                      <span className="search-facet-group__count-badge">1</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron search-facet-group__chevron--expanded" />
                  </button>
                  <ul
                    id="filter-group-content-CREATORS"
                    className="search-facet-group__content"
                  >
                    <li className="search-facet-group__item">
                      <div className="checkbox">
                        <input
                          id="filter-CREATORS-amalie-dahlerup-hermansen"
                          className="checkbox__input"
                          aria-describedby="filter-CREATORS-amalie-dahlerup-hermansen-count"
                          type="checkbox"
                          checked
                        />
                        <label
                          className="checkbox__label"
                          htmlFor="filter-CREATORS-amalie-dahlerup-hermansen"
                          data-cy="filter-CREATORS-amalie dahlerup hermansen"
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
                            amalie dahlerup hermansen
                          </span>
                        </label>
                      </div>
                    </li>
                    <li className="search-facet-group__item">
                      <div className="checkbox">
                        <input
                          id="filter-CREATORS-nanna-bille-bornelsen"
                          className="checkbox__input"
                          aria-describedby="filter-CREATORS-nanna-bille-bornelsen-count"
                          type="checkbox"
                        />
                        <label
                          className="checkbox__label"
                          htmlFor="filter-CREATORS-nanna-bille-bornelsen"
                          data-cy="filter-CREATORS-nanna bille bornelsen"
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
                            nanna bille bornelsen
                          </span>
                        </label>
                      </div>
                    </li>
                    <li className="search-facet-group__item">
                      <div className="checkbox">
                        <input
                          id="filter-CREATORS-nanna-bille-cornelsen"
                          className="checkbox__input"
                          aria-describedby="filter-CREATORS-nanna-bille-cornelsen-count"
                          type="checkbox"
                        />
                        <label
                          className="checkbox__label"
                          htmlFor="filter-CREATORS-nanna-bille-cornelsen"
                          data-cy="filter-CREATORS-nanna bille cornelsen"
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
                            nanna bille cornelsen
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-SUBJECTS"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">Emner</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-MAINLANGUAGES"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">Sprog</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-GENREANDFORM"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">Genre</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-MATERIALTYPESSPECIFIC"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">
                        Materialetype
                      </span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-YEAR"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">År</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
                <li className="search-facet-group">
                  <button
                    type="button"
                    className="search-facet-group__header"
                    aria-expanded="false"
                    aria-controls="filter-group-content-DK5"
                  >
                    <div className="search-facet-group__header-content">
                      <span className="search-facet-group__label">Emnetal</span>
                    </div>
                    <ExpandMoreIcon className="search-facet-group__chevron" />
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          <section>
            <div className="search__results-top-bar">
              <div className="search__results-top-bar__left">
                <h2 className="search__results-heading">97 results</h2>
              </div>
              <div className="search__results-top-bar__right">
                <button className="search__modify-filters-button">
                  <FilterIcon />
                  <span>Flere filtre</span>
                </button>
                <dialog className="dialog dialog--sidebar">
                  <div className="dialog__top-bar">
                    <button
                      type="button"
                      className="dialog__close-button"
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  <div className="search-facets__dialog">
                    <div className="search-facets__dialog-content">
                      <h2 className="search-facets__dialog-content__heading">
                        Filter materials (97)
                      </h2>
                      <aside className="search-facets">
                        <div className="search-facets__container">
                          <ul className="search-facets__toggles">
                            <li>
                              <div className="search-toggle">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  aria-label="On shelf"
                                  className="search-toggle__button search-toggle__button--checked"
                                  id="dialog-on-shelf"
                                >
                                  <span className="search-toggle__slider" />
                                </button>
                                <label
                                  htmlFor="dialog-on-shelf"
                                  className="search-toggle__content cursor-pointer"
                                >
                                  <span className="search-toggle__label">
                                    On shelf
                                  </span>
                                  <span className="search-toggle__description">
                                    Only show results available at the library
                                    now.
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="search-toggle">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="false"
                                  aria-label="Kan altid lånes"
                                  className="search-toggle__button"
                                  id="dialog-can-always-be-loaned"
                                >
                                  <span className="search-toggle__slider" />
                                </button>
                                <label
                                  htmlFor="dialog-can-always-be-loaned"
                                  className="search-toggle__content cursor-pointer"
                                >
                                  <span className="search-toggle__label">
                                    Kan altid lånes
                                  </span>
                                  <span className="search-toggle__description">
                                    Only show results that can always be loaned.
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                          <div className="search-radio-button-group-wrapper">
                            <div
                              className="search-radio-button-group"
                              role="radiogroup"
                            >
                              <span
                                role="radio"
                                aria-checked="true"
                                tabIndex={0}
                                data-headlessui-state="checked"
                                data-checked=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input search-radio-button-group__input--checked" />
                                  Online
                                </div>
                              </span>
                              <span
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input " />
                                  Fysisk
                                </div>
                              </span>
                            </div>
                            <div
                              className="search-radio-button-group"
                              role="radiogroup"
                            >
                              <span
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input " />
                                  Fiktion
                                </div>
                              </span>
                              <span
                                role="radio"
                                aria-checked="true"
                                tabIndex={0}
                                data-headlessui-state="checked"
                                data-checked=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input search-radio-button-group__input--checked" />
                                  Non-fiktion
                                </div>
                              </span>
                            </div>
                            <div
                              className="search-radio-button-group"
                              role="radiogroup"
                            >
                              <span
                                role="radio"
                                aria-checked="false"
                                tabIndex={0}
                                data-headlessui-state=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input " />
                                  Voksne
                                </div>
                              </span>
                              <span
                                role="radio"
                                aria-checked="false"
                                tabIndex={-1}
                                data-headlessui-state=""
                              >
                                <div
                                  className="search-radio-button-group__label"
                                  data-headlessui-state=""
                                >
                                  <span className="search-radio-button-group__input " />
                                  Børn
                                </div>
                              </span>
                            </div>
                          </div>
                          <ul className="search-facets__groups">
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-MATERIALTYPESGENERAL"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Format
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-CREATORS"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Forfatter
                                  </span>
                                  <span className="search-facet-group__count-badge">
                                    1
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-SUBJECTS"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Emner
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-MAINLANGUAGES"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Sprog
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-GENREANDFORM"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Genre
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-MATERIALTYPESSPECIFIC"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Materialetype
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-YEAR"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    År
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                            <li className="search-facet-group">
                              <button
                                type="button"
                                className="search-facet-group__header"
                                aria-expanded="false"
                                aria-controls="dialog-filter-group-content-DK5"
                              >
                                <div className="search-facet-group__header-content">
                                  <span className="search-facet-group__label">
                                    Emnetal
                                  </span>
                                </div>
                                <ExpandMoreIcon className="search-facet-group__chevron" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                    <div className="search-facets__dialog__actions">
                      <button
                        data-cy="button"
                        type="button"
                        className="btn-primary btn-filled btn-medium  arrow__hover--right-small search-facets__dialog__actions__button"
                      >
                        Vis resultater
                      </button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <ul className="content-list" data-cy="search-result-list">
              <li className="content-list__item" tabIndex={-1}>
                <article
                  data-cy="card-list-item"
                  className="card-list-item arrow__hover--right-small"
                >
                  <div className="card-list-item__cover">
                    <a
                      data-cy="link-no-style"
                      href="https://dapple-cms.local/work/work-of:870970-basis:38799053"
                      rel="noreferrer"
                      className="hide-linkstyle cover cover--size-small cover--aspect-small"
                      aria-labelledby="card-title-1"
                      tabIndex={0}
                      aria-hidden="false"
                    >
                      <img
                        className="cover__img cover__img--animate"
                        alt=""
                        src="https://fbiinfo-present.dbc.dk/images/dEcz_pEyQdGyw5wW5y-R4g/240px!ADCL6JWZHz_NJQ30wh-KVCdksMnyY8eCcwgZjZMvJQx0vg"
                      />
                    </a>
                  </div>
                  <div className="card-list-item__text">
                    <div className="card-list-item__meta">
                      <button
                        type="button"
                        aria-label="tilføj Harry Pottcast Flammernes Pokal. 13 til huskelisten"
                        className="button-favourite"
                      >
                        <IconFavourite />
                      </button>
                    </div>
                    <h2
                      className="card-list-item__title text-header-h4 mb-4"
                      data-cy="card-list-item-title"
                      id="card-title-1"
                    >
                      <a
                        href="https://dapple-cms.local/work/work-of:870970-basis:38799053"
                        rel="noreferrer"
                        tabIndex={0}
                      >
                        Harry Pottcast Flammernes Pokal. 13
                      </a>
                    </h2>
                    <p
                      className="text-small-caption"
                      data-cy="card-list-item-author"
                    >
                      af Nanna Bille Bornelsen, Amalie Dahlerup Hermansen et al.
                      (2021)
                    </p>
                  </div>
                  <div
                    className="card-list-item__availability"
                    data-cy="card-list-item-availability"
                  >
                    <div
                      className="pagefold-parent--xsmall availability-label--unselected cursor-pointer text-label availability-label"
                      data-cy="availability-label"
                    >
                      <div className="pagefold-triangle--xsmall pagefold-triangle--success" />
                      <CheckIcon className="availability-label__check" />
                      <p
                        className="availability-label__text text-label-semibold ml-24"
                        data-cy="availability-label-type"
                      >
                        podcast
                      </p>
                      <div className="availability-label__divider ml-4" />
                      <p
                        className="availability-label__text text-label-normal ml-4 mr-8"
                        data-cy="availability-label-status"
                      >
                        Tilgængelig
                      </p>
                    </div>
                  </div>
                  <ArrowSmallRight />
                </article>
              </li>
              <li className="content-list__item" tabIndex={-1}>
                <article
                  data-cy="card-list-item"
                  className="card-list-item arrow__hover--right-small"
                >
                  <div className="card-list-item__cover">
                    <a
                      data-cy="link-no-style"
                      href="https://dapple-cms.local/work/work-of:870970-basis:38738828"
                      rel="noreferrer"
                      className="hide-linkstyle cover cover--size-small cover--aspect-small"
                      aria-labelledby="card-title-2"
                      tabIndex={0}
                      aria-hidden="false"
                    >
                      <img
                        className="cover__img cover__img--animate"
                        alt=""
                        src="https://fbiinfo-present.dbc.dk/images/MFmywgubSuWLfPKFW642_Q/240px!ADATeleY6WCLq1Xf3Ks-K7YCu-78BR2q1c1V1b5U7wUICw"
                      />
                    </a>
                  </div>
                  <div className="card-list-item__text">
                    <div className="card-list-item__meta">
                      <button
                        type="button"
                        aria-label="tilføj Harry Pottcast Flammernes Pokal. 6 til huskelisten"
                        className="button-favourite"
                      >
                        <IconFavourite />
                      </button>
                    </div>
                    <h2
                      className="card-list-item__title text-header-h4 mb-4"
                      data-cy="card-list-item-title"
                      id="card-title-2"
                    >
                      <a
                        href="https://dapple-cms.local/work/work-of:870970-basis:38738828"
                        rel="noreferrer"
                        tabIndex={0}
                      >
                        Harry Pottcast Flammernes Pokal. 6
                      </a>
                    </h2>
                    <p
                      className="text-small-caption"
                      data-cy="card-list-item-author"
                    >
                      af Nanna Bille Bornelsen, Amalie Dahlerup Hermansen et al.
                      (2021)
                    </p>
                  </div>
                  <div
                    className="card-list-item__availability"
                    data-cy="card-list-item-availability"
                  >
                    <div
                      className="pagefold-parent--xsmall availability-label--unselected cursor-pointer text-label availability-label"
                      data-cy="availability-label"
                    >
                      <div className="pagefold-triangle--xsmall pagefold-triangle--success" />
                      <CheckIcon className="availability-label__check" />
                      <p
                        className="availability-label__text text-label-semibold ml-24"
                        data-cy="availability-label-type"
                      >
                        podcast
                      </p>
                      <div className="availability-label__divider ml-4" />
                      <p
                        className="availability-label__text text-label-normal ml-4 mr-8"
                        data-cy="availability-label-status"
                      >
                        Tilgængelig
                      </p>
                    </div>
                  </div>
                  <ArrowSmallRight />
                </article>
              </li>
              <li className="content-list__item" tabIndex={-1}>
                <article
                  data-cy="card-list-item"
                  className="card-list-item arrow__hover--right-small"
                >
                  <div className="card-list-item__cover">
                    <a
                      data-cy="link-no-style"
                      href="https://dapple-cms.local/work/work-of:870970-basis:47683033"
                      rel="noreferrer"
                      className="hide-linkstyle cover cover--size-small cover--aspect-small"
                      aria-labelledby="card-title-3"
                      tabIndex={0}
                      aria-hidden="false"
                    >
                      <img
                        className="cover__img cover__img--animate"
                        alt=""
                        src="https://fbiinfo-present.dbc.dk/images/cYI_uKO4Rhmq1iHuYm412w/240px!ADDXtnRxfMw20YEoI9xn9Ox1D0yfucVLJQ5CXAqXIjmf2A"
                      />
                    </a>
                  </div>
                  <div className="card-list-item__text">
                    <div className="card-list-item__meta">
                      <button
                        type="button"
                        aria-label="tilføj Harry Pottcast Flammernes Pokal. 2 til huskelisten"
                        className="button-favourite"
                      >
                        <IconFavourite />
                      </button>
                    </div>
                    <h2
                      className="card-list-item__title text-header-h4 mb-4"
                      data-cy="card-list-item-title"
                      id="card-title-3"
                    >
                      <a
                        href="https://dapple-cms.local/work/work-of:870970-basis:47683033"
                        rel="noreferrer"
                        tabIndex={0}
                      >
                        Harry Pottcast Flammernes Pokal. 2
                      </a>
                    </h2>
                    <p
                      className="text-small-caption"
                      data-cy="card-list-item-author"
                    >
                      af Nanna Bille Bornelsen, Amalie Dahlerup Hermansen et al.
                      (2020)
                    </p>
                  </div>
                  <div
                    className="card-list-item__availability"
                    data-cy="card-list-item-availability"
                  >
                    <div
                      className="pagefold-parent--xsmall availability-label--unselected cursor-pointer text-label availability-label"
                      data-cy="availability-label"
                    >
                      <div className="pagefold-triangle--xsmall pagefold-triangle--success" />
                      <CheckIcon className="availability-label__check" />
                      <p
                        className="availability-label__text text-label-semibold ml-24"
                        data-cy="availability-label-type"
                      >
                        podcast
                      </p>
                      <div className="availability-label__divider ml-4" />
                      <p
                        className="availability-label__text text-label-normal ml-4 mr-8"
                        data-cy="availability-label-status"
                      >
                        Tilgængelig
                      </p>
                    </div>
                  </div>
                  <ArrowSmallRight />
                </article>
              </li>
            </ul>
            <div className="result-pager ">
              <p className="text-small-caption result-pager__title">
                Viser 3 ud af 97 elementer
              </p>
              <button
                type="button"
                className="btn-primary btn-outline btn-medium arrow__hover--right-small uppercase"
              >
                vis flere
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Search;
