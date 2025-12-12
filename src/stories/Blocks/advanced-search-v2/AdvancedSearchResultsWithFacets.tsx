import React from "react";

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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron advanced-search-facet-group__chevron--expanded"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                  <img
                    alt=""
                    className="advanced-search-facet-group__chevron"
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
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
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M7.03203 5.67241C7.5405 5.70884 8.03518 5.85445 8.48256 6.09885C8.92998 6.3433 9.31975 6.68146 9.62513 7.08973C9.7904 7.31085 9.7453 7.62424 9.52422 7.7896C9.30315 7.95485 8.98975 7.90965 8.82435 7.68869C8.60487 7.39527 8.32494 7.15214 8.00339 6.97645C7.6818 6.80075 7.32594 6.69664 6.96042 6.67046C6.59497 6.6443 6.22819 6.69672 5.8849 6.82476C5.54157 6.95283 5.22991 7.15349 4.97084 7.41265L3.1375 9.24598C2.6758 9.72724 2.42018 10.3699 2.42592 11.037C2.43174 11.7071 2.70079 12.3483 3.17461 12.8222C3.64839 13.2959 4.28918 13.5643 4.95912 13.5702C5.62909 13.576 6.27468 13.3188 6.75664 12.8534L7.79571 11.8143C7.99097 11.6191 8.30748 11.6191 8.50274 11.8143C8.69799 12.0096 8.69798 12.3261 8.50274 12.5214L7.45131 13.5728C6.78077 14.2203 5.88275 14.5783 4.95065 14.5702C4.01846 14.5621 3.1268 14.1883 2.46758 13.5292C1.8084 12.87 1.43406 11.9783 1.42592 11.0461C1.41781 10.1139 1.77629 9.21539 2.42396 8.54481L4.26316 6.70562C4.6236 6.34504 5.0576 6.0661 5.53529 5.88791C6.01299 5.70971 6.52349 5.63599 7.03203 5.67241ZM11.0542 1.42957C11.9864 1.43768 12.8787 1.81201 13.5379 2.47124C14.197 3.13045 14.5708 4.02216 14.5789 4.95431C14.587 5.88653 14.2285 6.7844 13.5809 7.45497L13.575 7.46148L11.7417 9.29481C11.3812 9.65535 10.9472 9.93434 10.4695 10.1125C9.99192 10.2906 9.48124 10.3638 8.97279 10.3274C8.46436 10.2909 7.9696 10.1453 7.52227 9.90093C7.07492 9.65649 6.68504 9.3189 6.37969 8.91069C6.21442 8.68962 6.25964 8.37623 6.4806 8.21082C6.7017 8.04544 7.01505 8.09069 7.18047 8.31174C7.39997 8.60518 7.6805 8.84828 8.00209 9.02398C8.32354 9.19954 8.67906 9.30378 9.0444 9.32997C9.40992 9.35614 9.77723 9.30374 10.1206 9.17567C10.4639 9.04759 10.7756 8.8469 11.0346 8.58778L12.8615 6.7603C13.327 6.27832 13.5847 5.63284 13.5789 4.96278C13.5731 4.29287 13.3045 3.65204 12.8309 3.17827C12.357 2.70445 11.7158 2.4354 11.0457 2.42957C10.3757 2.42378 9.73014 2.68153 9.24818 3.14702L8.20196 4.18674C8.00612 4.38134 7.68959 4.38059 7.49493 4.18478C7.30038 3.98894 7.30175 3.6724 7.49753 3.47775L8.54831 2.43283L8.55352 2.42762C9.22402 1.78004 10.122 1.42156 11.0542 1.42957Z' fill='black'/%3e %3c/svg%3e"
                />
              </button>
            </div>
            <div className="advanced-search-v2__results-top-bar__right">
              <button className="advanced-search-v2__modify-filters-button">
                <img
                  alt=""
                  src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_1385_8770)'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 17.25C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.3797 15.4678 18.6935 15.1018 18.7432L15 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18C8.25 17.6203 8.53215 17.3065 8.89823 17.2568L9 17.25H15ZM18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.3797 18.4678 12.6935 18.1018 12.7432L18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.6203 5.53215 11.3065 5.89823 11.2568L6 11.25H18ZM21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.3797 21.4678 6.69349 21.1018 6.74315L21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6C2.25 5.6203 2.53215 5.30651 2.89823 5.25685L3 5.25H21Z' fill='black'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_1385_8770'%3e %3crect width='24' height='24' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e"
                />
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
                    <img
                      className="advanced-search-v2__dropdown__arrow"
                      alt=""
                      src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                    />
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
                      <svg
                        height="24"
                        width="24"
                        className="icon-favourite"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 20L10.2675 18.921C5.89 15.1035 3 12.5858 3 9.49591C3 6.9782 5.057 5 7.675 5C9.154 5 10.5735 5.66213 11.5 6.70845C12.4265 5.66213 13.846 5 15.325 5C17.943 5 20 6.9782 20 9.49591C20 12.5858 17.11 15.1035 12.7325 18.9292L11.5 20Z"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-tags color-secondary-gray mt-8">
                    99.94 Banner-Høeg
                  </div>
                  <h2
                    className="card-list-item__title text-header-h4 mb-4"
                    data-cy="card-list-item-title"
                    lang="dan"
                    id="_r_3n_"
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
                    <img
                      className="availability-label__check"
                      alt=""
                      src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.4489 5.49129C20.7299 5.18693 21.2043 5.16795 21.5087 5.4489C21.7854 5.70431 21.8262 6.11968 21.6203 6.42176L21.5511 6.50871L9.5511 19.5087C9.28844 19.7933 8.85853 19.8273 8.55624 19.6048L8.46967 19.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.73594 12.2034 3.1526 12.1792 3.44621 12.3971L3.53033 12.4697L8.978 17.917L20.4489 5.49129Z' fill='black'/%3e %3c/svg%3e"
                    />
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
                <svg
                  width="61"
                  height="9"
                  viewBox="0 0 61 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="arrow__body" d="M60 4.5H0" stroke="black" />
                  <path
                    className="arrow__head"
                    d="M60.3537 4.85355C60.5489 4.65829 60.5489 4.34171 60.3537 4.14645L57.1717 0.96447C56.9764 0.769208 56.6598 0.769208 56.4646 0.96447C56.2693 1.15973 56.2693 1.47631 56.4646 1.67157L59.293 4.5L56.4646 7.32843C56.2693 7.52369 56.2693 7.84027 56.4646 8.03553C56.6598 8.2308 56.9764 8.2308 57.1717 8.03553L60.3537 4.85355ZM60.0001 4H57.0001V5H60.0001V4Z"
                    fill="black"
                  />
                </svg>
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
                      <svg
                        height="24"
                        width="24"
                        className="icon-favourite"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 20L10.2675 18.921C5.89 15.1035 3 12.5858 3 9.49591C3 6.9782 5.057 5 7.675 5C9.154 5 10.5735 5.66213 11.5 6.70845C12.4265 5.66213 13.846 5 15.325 5C17.943 5 20 6.9782 20 9.49591C20 12.5858 17.11 15.1035 12.7325 18.9292L11.5 20Z"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                  <h2
                    className="card-list-item__title text-header-h4 mb-4"
                    data-cy="card-list-item-title"
                    lang="dan"
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
                    <img
                      className="availability-label__check"
                      alt=""
                      src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.4489 5.49129C20.7299 5.18693 21.2043 5.16795 21.5087 5.4489C21.7854 5.70431 21.8262 6.11968 21.6203 6.42176L21.5511 6.50871L9.5511 19.5087C9.28844 19.7933 8.85853 19.8273 8.55624 19.6048L8.46967 19.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.73594 12.2034 3.1526 12.1792 3.44621 12.3971L3.53033 12.4697L8.978 17.917L20.4489 5.49129Z' fill='black'/%3e %3c/svg%3e"
                    />
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
                <svg
                  width="61"
                  height="9"
                  viewBox="0 0 61 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="arrow__body" d="M60 4.5H0" stroke="black" />
                  <path
                    className="arrow__head"
                    d="M60.3537 4.85355C60.5489 4.65829 60.5489 4.34171 60.3537 4.14645L57.1717 0.96447C56.9764 0.769208 56.6598 0.769208 56.4646 0.96447C56.2693 1.15973 56.2693 1.47631 56.4646 1.67157L59.293 4.5L56.4646 7.32843C56.2693 7.52369 56.2693 7.84027 56.4646 8.03553C56.6598 8.2308 56.9764 8.2308 57.1717 8.03553L60.3537 4.85355ZM60.0001 4H57.0001V5H60.0001V4Z"
                    fill="black"
                  />
                </svg>
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
