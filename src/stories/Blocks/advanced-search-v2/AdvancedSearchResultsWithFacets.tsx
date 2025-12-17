import React from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as LinkIcon } from "../../../public/icons/collection/link.svg";
import { ReactComponent as CheckIcon } from "../../../public/icons/collection/Check.svg";
import { ReactComponent as FilterIcon } from "../../../public/icons/collection/Filter.svg";
import { ReactComponent as ArrowSmallRight } from "../../Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconFavourite } from "../../Library/Icons/icon-favourite/IconFavourite";

const AdvancedSearchSummary: React.FC = () => {
  return (
    <div className="advanced-search-v2__results">
      <div className="advanced-search-summary">
        <div className="advanced-search-summary__items">
          <div className="advanced-search-summary__item">
            <span className="advanced-search-summary__label">
              Søg efter bøger, film, musik og mere:
            </span>
            <span className="advanced-search-summary__value">{`"Asdal"`}</span>
          </div>
          <div className="advanced-search-summary__operator">OG</div>
          <div className="advanced-search-summary__item">
            <span className="advanced-search-summary__label">
              Udgivelsesår:
            </span>
            <span className="advanced-search-summary__value">2024-2025</span>
          </div>
        </div>
        <div className="advanced-search-summary__links">
          <button type="button" className="advanced-search-summary__edit-link">
            Rediger søgning
          </button>
          <a
            href="https://staging.dplplat01.dpl.reload.dk/advanced-search?advancedSearchCql=%28term.default%3D%2522Asdal%2522%29%2520AND%2520%28%28publicationyear%2520within%2520%25222024%25202025%2522%29%29%2520AND%2520%28%28phrase.accesstype%3D%2522fysisk%2522%29%29"
            rel="noreferrer"
            className="advanced-search-summary__cql-link"
          >
            CQL-søgning
          </a>
        </div>
      </div>
      <div className="advanced-search-v2__grid">
        <aside className="advanced-search-facets">
          <div className="advanced-search-facets__container">
            <ul className="advanced-search-facets__toggles">
              <li>
                <div className="advanced-search-toggle">
                  <button
                    type="button"
                    role="switch"
                    aria-checked="false"
                    className="advanced-search-toggle__button advanced-search-toggle__button--checked"
                    aria-label="På hylden"
                  >
                    <span className="advanced-search-toggle__slider" />
                  </button>
                  <label
                    htmlFor="on-shelf"
                    className="advanced-search-toggle__content cursor-pointer"
                  >
                    <span className="advanced-search-toggle__label">
                      På hylden
                    </span>
                    <span className="advanced-search-toggle__description">
                      Vis kun titler, som har eksemplarer hjemme på hylden.
                    </span>
                  </label>
                </div>
              </li>
              <li>
                <div className="advanced-search-toggle">
                  <button
                    type="button"
                    role="switch"
                    aria-checked="false"
                    className="advanced-search-toggle__button"
                    aria-label="Lån udenfor kvoten"
                  >
                    <span className="advanced-search-toggle__slider" />
                  </button>
                  <label
                    htmlFor="only-extra-titles"
                    className="advanced-search-toggle__content cursor-pointer"
                  >
                    <span className="advanced-search-toggle__label">
                      Lån udenfor kvoten
                    </span>
                    <span className="advanced-search-toggle__description">
                      Vis kun digitale titler, der ikke tæller med i din
                      månedlige lånekvote og altid er tilgængelige.
                    </span>
                  </label>
                </div>
              </li>
            </ul>
            <ul className="advanced-search-facets__groups">
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
                    <span className="advanced-search-facet-group__count-badge">
                      1
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron advanced-search-facet-group__chevron--expanded" />
                </button>
                <ul
                  id="filter-group-content-ACCESSTYPE"
                  className="advanced-search-facet-group__content"
                >
                  <li className="advanced-search-facet-group__item">
                    <div className="checkbox">
                      <input
                        id="filter-ACCESSTYPE-fysisk"
                        className="checkbox__input"
                        aria-describedby="filter-ACCESSTYPE-fysisk-count"
                        type="checkbox"
                        checked
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
                      1
                    </span>
                  </li>
                </ul>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-SPECIFICMATERIALTYPE"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Format
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-CREATOR"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Forfatter / ophav
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-PUBLICATIONYEAR"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Udgivelsesår
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-SOURCE"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Kilde
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-HOSTPUBLICATION"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Værtspublikation
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-MAINLANGUAGE"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Sprog
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-SUBJECT"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Emne
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
              <li className="advanced-search-facet-group">
                <button
                  type="button"
                  className="advanced-search-facet-group__header"
                  aria-expanded="false"
                  aria-controls="filter-group-content-PRIMARYTARGET"
                >
                  <div className="advanced-search-facet-group__header-content">
                    <span className="advanced-search-facet-group__label">
                      Fagligt niveau
                    </span>
                  </div>
                  <ExpandMoreIcon className="advanced-search-facet-group__chevron" />
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <section>
          <div className="advanced-search-v2__results-top-bar">
            <div className="advanced-search-v2__results-top-bar__left">
              <h2
                className="advanced-search-v2__results-heading"
                id="advanced-search-result"
                aria-live="polite"
              >
                Din søgning har 2 resultater
              </h2>
              <button
                className="copy-link advanced-search-v2__copy-link"
                type="button"
              >
                <span className="link-tag text-small-caption">Kopier link</span>
                <LinkIcon aria-hidden="true" />
              </button>
            </div>
            <div className="advanced-search-v2__results-top-bar__right">
              <button className="advanced-search-v2__modify-filters-button">
                <FilterIcon />
                <span>Flere filtre</span>
              </button>
              <div className="advanced-search-v2__sort-select">
                <label
                  className="advanced-search-v2__sort-select__label"
                  htmlFor="advanced-sort-select"
                >
                  Sorter efter
                </label>
                <div className="advanced-search-v2__sort-select__select-wrapper">
                  <select
                    className="advanced-search-v2__sort-select__select"
                    id="advanced-sort-select"
                  >
                    <option value="relevance">Bedste match</option>
                    <optgroup label="Udgivelsesdato">
                      <option value="sort.latestpublicationdate.desc">
                        Nyeste først
                      </option>
                      <option value="sort.latestpublicationdate.asc">
                        Ældste først
                      </option>
                    </optgroup>
                    <optgroup label="Forfatter / ophav">
                      <option value="sort.creator.asc">
                        Forfatter / ophav (A-Å)
                      </option>
                      <option value="sort.creator.desc">
                        Forfatter / ophav (Å-A)
                      </option>
                    </optgroup>
                    <optgroup label="Titel">
                      <option value="sort.title.asc">
                        Forfatter / ophav (A-Å)
                      </option>
                      <option value="sort.title.desc">
                        Forfatter / ophav (Å-A)
                      </option>
                    </optgroup>
                  </select>
                  <div className="advanced-search-v2__dropdown__arrows">
                    <ExpandMoreIcon className="advanced-search-v2__dropdown__arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="content-list" data-cy="search-result-list">
            <li className="content-list__item">
              <article
                data-cy="card-list-item"
                className="card-list-item arrow__hover--right-small"
              >
                <div className="card-list-item__cover">
                  <a
                    data-cy="link-no-style"
                    href="https://staging.dplplat01.dpl.reload.dk/work/work-of:870971-tsart:142355817"
                    rel="noreferrer"
                    className="hide-linkstyle cover cover--size-small cover--aspect-small"
                    aria-labelledby="_r_3n_"
                    aria-hidden="false"
                  >
                    <img
                      className="cover__img cover__img--animate"
                      alt="undefined"
                      src="https://default-forsider.dbc.dk/large/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXRsZSI6IkFuZGVycyBUaGlzZXQgb2cgaWRlbnRpdGV0ZW4gYWYgTmllbHMgRXJpa3NlbiBhZiBBc2RhbCIsIm1hdGVyaWFsVHlwZSI6IkFSVElDTEVTIiwiY29sb3JzIjpbeyJiYWNrZ3JvdW5kIjoiIzAwNWM2MSJ9LHsiYmFja2dyb3VuZCI6IiMwMDZlNzQifSx7ImJhY2tncm91bmQiOiIjMDA4MTg4In1dLCJpYXQiOjE3NjU0NjQyMDR9.q_MuG4sGcMDwxGyMcie9JOJZORIexT2FVenVjbpn-WU"
                    />
                  </a>
                </div>
                <div className="card-list-item__text">
                  <div className="card-list-item__meta">
                    <button
                      type="button"
                      aria-label="tilføj Anders Thiset og identiteten af Niels Eriksen af Asdal : de ældste led i Banner-Høeg stamtavlerne i Danmarks Adels Aarbog til huskelisten"
                      className="button-favourite"
                    >
                      <IconFavourite />
                    </button>
                  </div>
                  <div className="text-tags color-secondary-gray mt-8">
                    99.94 Banner-Høeg
                  </div>
                  <h2
                    className="card-list-item__title text-header-h4 mb-4"
                    data-cy="card-list-item-title"
                  >
                    <a
                      href="https://staging.dplplat01.dpl.reload.dk/work/work-of:870971-tsart:142355817"
                      rel="noreferrer"
                    >
                      Anders Thiset og identiteten af Niels Eriksen af Asdal :
                      de ældste led i Banner-Høeg stamtavlerne i Danmarks Adels
                      Aarbog
                    </a>
                  </h2>
                  <p
                    className="text-small-caption"
                    data-cy="card-list-item-author"
                  >
                    Af Bjarne Kure (2025)
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
                      artikel
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
            <li className="content-list__item">
              <article
                data-cy="card-list-item"
                className="card-list-item arrow__hover--right-small"
              >
                <div className="card-list-item__cover">
                  <a
                    data-cy="link-no-style"
                    href="https://staging.dplplat01.dpl.reload.dk/work/work-of:870971-avis:137906252"
                    rel="noreferrer"
                    className="hide-linkstyle cover cover--size-small cover--aspect-small"
                    aria-labelledby="_r_3o_"
                    aria-hidden="false"
                  >
                    <img
                      className="cover__img cover__img--animate"
                      alt="undefined"
                      src="https://default-forsider.dbc.dk/large/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXRsZSI6IkVuIG92ZXJzZXQgZ3J1cHBlIGxpZGVyIGFmIGV0IHNqw6ZsZGVudCBzeW1wdG9tLiBPZyBzw6UgZW5kZXIgcGxhbmxhZ3RlIGdyYXZpZGl0ZXRlciBpIGFib3J0IiwibWF0ZXJpYWxUeXBlIjoiQVJUSUNMRVMiLCJjb2xvcnMiOlt7ImJhY2tncm91bmQiOiIjMDA1YzYxIn0seyJiYWNrZ3JvdW5kIjoiIzAwNmU3NCJ9LHsiYmFja2dyb3VuZCI6IiMwMDgxODgifV0sImlhdCI6MTc2NTQ2NDIwNH0.W-xH_fAWTq1u-3K0VOH61Vousfq4-DgCd6pWqiYBhQ8"
                    />
                  </a>
                </div>
                <div className="card-list-item__text">
                  <div className="card-list-item__meta">
                    <button
                      type="button"
                      aria-label="tilføj En overset gruppe lider af et sjældent symptom. Og så ender planlagte graviditeter i abort til huskelisten"
                      className="button-favourite"
                    >
                      <IconFavourite />
                    </button>
                  </div>
                  <h2
                    className="card-list-item__title text-header-h4 mb-4"
                    data-cy="card-list-item-title"
                    lang="da"
                    id="_r_3o_"
                  >
                    <a
                      href="https://staging.dplplat01.dpl.reload.dk/work/work-of:870971-avis:137906252"
                      rel="noreferrer"
                    >
                      En overset gruppe lider af et sjældent symptom. Og så
                      ender planlagte graviditeter i abort
                    </a>
                  </h2>
                  <p
                    className="text-small-caption"
                    data-cy="card-list-item-author"
                  >
                    Af Heidi Elkjær, Anne Ostenfeld et al. (2024)
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
                      artikel
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
              Viser 2 af 2 resultater
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdvancedSearchSummary;
