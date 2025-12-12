import React from "react";

const AdvancedSearchForm: React.FC = () => {
  return (
    <section className="advanced-search-v2__form">
      <div className="advanced-search-v2__suggests">
        <div className="advanced-search-filter-wrapper">
          <div className="advanced-search-filter">
            <div className="select">
              <button
                className="select-button"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span>Søg efter bøger, film, musik og mere</span>
                <div className="select-button__arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
            <div className="advanced-search-filter__combobox-wrapper">
              <input
                className="combobox-input"
                placeholder="Søg efter bøger, film, musik og mere"
                type="text"
              />
            </div>
          </div>
          <button
            type="button"
            className="advanced-search-filter__remove-button"
            aria-label="Fjern række @inputNumber"
          >
            <img
              alt=""
              src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12' cy='12' r='9.5' stroke='black'/%3e %3cpath d='M8 13C7.44772 13 7 12.5523 7 12V12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12V12C17 12.5523 16.5523 13 16 13H8Z' fill='black'/%3e %3c/svg%3e"
            />
          </button>
        </div>
        <div className="advanced-search-filter__operators">
          <button
            type="button"
            className="advanced-search-filter__operator advanced-search-filter__operator--active"
          >
            OG
          </button>
          <button type="button" className="advanced-search-filter__operator">
            ELLER
          </button>
          <button type="button" className="advanced-search-filter__operator">
            IKKE
          </button>
        </div>
        <div className="advanced-search-filter-wrapper">
          <div className="advanced-search-filter">
            <div className="select">
              <button
                className="select-button"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                data-headlessui-state="autofocus"
                data-autofocus=""
              >
                <span>Søg efter bøger, film, musik og mere</span>
                <div className="select-button__arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
            <div className="advanced-search-filter__combobox-wrapper">
              <input
                className="combobox-input"
                placeholder="Søg efter bøger, film, musik og mere"
                type="text"
              />
            </div>
          </div>
          <button
            type="button"
            className="advanced-search-filter__remove-button"
            aria-label="Fjern række @inputNumber"
          >
            <img
              alt=""
              src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12' cy='12' r='9.5' stroke='black'/%3e %3cpath d='M8 13C7.44772 13 7 12.5523 7 12V12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12V12C17 12.5523 16.5523 13 16 13H8Z' fill='black'/%3e %3c/svg%3e"
            />
          </button>
        </div>
        <button type="button" className="advanced-search-v2__add-suggest">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12' cy='12' r='10' fill='black'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 7C11.4477 7 11 7.44772 11 8L11 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7Z' fill='white'/%3e %3c/svg%3e"
          />
          <span>Tilføj række</span>
        </button>
      </div>
      <div className="advanced-search-v2__selects-wrapper">
        <h2 className="advanced-search-v2__selects-wrapper__title">
          Afgræns din søgning
        </h2>
        <div className="advanced-search-v2__selects-grid">
          <div className="hui-multiselect-wrapper">
            <label className="hui-multiselect-wrapper__label">
              Materialetype
            </label>
            <div className="hui-multiselect">
              <button
                className="hui-multiselect__button"
                type="button"
                aria-expanded="false"
              >
                <div className="hui-multiselect__button-label">Alle</div>
                <div className="hui-multiselect__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="hui-multiselect-wrapper">
            <label className="hui-multiselect-wrapper__label">
              Genre og form
            </label>
            <div className="hui-multiselect">
              <button
                className="hui-multiselect__button"
                type="button"
                aria-expanded="false"
              >
                <div className="hui-multiselect__button-label">Alle</div>
                <div className="hui-multiselect__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="hui-multiselect-wrapper">
            <label className="hui-multiselect-wrapper__label">Kilde</label>
            <div className="hui-multiselect">
              <button
                className="hui-multiselect__button"
                type="button"
                aria-expanded="false"
              >
                <div className="hui-multiselect__button-label">Alle</div>
                <div className="hui-multiselect__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="hui-multiselect-wrapper">
            <label className="hui-multiselect-wrapper__label">Sprog</label>
            <div className="hui-multiselect">
              <button
                className="hui-multiselect__button"
                type="button"
                aria-expanded="false"
              >
                <div className="hui-multiselect__button-label">Alle</div>
                <div className="hui-multiselect__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="range-select-wrapper">
            <label className="range-select-wrapper__label">Udgivelsesår</label>
            <div className="range-select">
              <button
                className="range-select__button"
                type="button"
                aria-expanded="false"
              >
                <div className="range-select__button-label">
                  Valgt
                  <span className="range-select__button-label__count-badge">
                    2024-2025
                  </span>
                </div>
                <div className="range-select__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="range-select-wrapper">
            <label className="range-select-wrapper__label">Aldersgruppe</label>
            <div className="range-select">
              <button
                className="range-select__button"
                type="button"
                aria-expanded="false"
              >
                <div className="range-select__button-label">Alle</div>
                <div className="range-select__button-arrow">
                  <img
                    alt=""
                    src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="advanced-search-v2__action-buttons">
        <button
          data-cy="button"
          type="button"
          className="btn-primary btn-filled btn-large  arrow__hover--right-small "
        >
          Søg
        </button>
        <button
          data-cy="button"
          type="button"
          className="btn-primary btn-outline btn-large  arrow__hover--right-small advanced-search-v2__reset-button"
        >
          Nulstil
        </button>
      </div>
    </section>
  );
};

export default AdvancedSearchForm;
