// This is copy/pasted from dpl-react because no design story was made for this view.

// TODO: Should be converted to react components.
const LoanList: React.FC = () => {
  return (
    <div className="loan-list-page">
      <h1 className="text-header-h1 my-32">Your loans</h1>
      <div className="dpl-list-buttons">
        <h2 className="dpl-list-buttons__header">
          Physical loans<span className="dpl-list-buttons__power">42</span>
        </h2>
        <div className="dpl-list-buttons__buttons">
          <div className="dpl-list-buttons__buttons">
            <div
              id="renew-multiple-modal"
              className="dpl-list-buttons__screen-reader-description"
            >
              This button opens a modal that covers the entire page and contains
              loans with different due dates, if some of the loans in the modal
              are renewable you can renew them
            </div>
            <div className="dpl-list-buttons__buttons__button">
              <button
                aria-pressed="true"
                className="dpl-icon-button dpl-icon-button--selected"
                id="test-list"
                type="button"
                aria-label="This button shows all loans in the list"
              >
                <img
                  src="icons/collection/List.svg"
                  alt="List icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="dpl-list-buttons__buttons__button">
              <button
                aria-pressed="false"
                className="dpl-icon-button"
                data-cy="stack"
                type="button"
                aria-label="This button filters the list, so only one the materials that have the same due date is shown"
              >
                <img
                  src="icons/collection/Various.svg"
                  alt="Stack icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="dpl-list-buttons__buttons__button dpl-list-buttons__buttons__button--hide-on-mobile">
              <button
                type="button"
                className="btn-primary btn-filled btn-small arrow__hover--right-small"
                id="test-renew-button"
                aria-describedby="renew-multiple-modal"
              >
                Renew several
              </button>
            </div>
            <div className="hide-on-desktop button-box button-box--sticky-bottom">
              <button
                data-cy="button"
                type="button"
                className="btn-primary btn-filled btn-small arrow__hover--right-small"
              >
                Renew several
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-cy="loan-list-items"
        className="list-reservation-container my-32"
      >
        <div
          className="list-reservation__hidden-explanation"
          id="materials-modal-text"
        >
          This button opens a modal that covers the entire page and contains
          loans with the same due date as the loan currently in focus
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">bog</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250902-title"
                    className="list-reservation__header__text"
                  >
                    Undervejs : erindringer 1940-1972
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Margrethe II (dronning af Danmark) and Tom Buk-Swienty
                  (2021)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956250902-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  tidsskrift
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250995-title"
                    className="list-reservation__header__text"
                  >
                    Alt om håndarbejdes strikkemagasin
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  (2011-&nbsp;)
                </p>
                <p
                  data-cy="reservation-about-periodical"
                  className="text-small-caption color-secondary-gray"
                >
                  2020, nr. 10
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956250995-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  tidsskrift
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956442465-title"
                    className="list-reservation__header__text"
                  >
                    Lov om tinglysning
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  (2001)
                </p>
                <p
                  data-cy="reservation-about-periodical"
                  className="text-small-caption color-secondary-gray"
                >
                  62. udgave 2020
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956442465-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">bog</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250902-title"
                    className="list-reservation__header__text"
                  >
                    Undervejs : erindringer 1940-1972
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Margrethe II (dronning af Danmark) and Tom Buk-Swienty
                  (2021)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956250902-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  tidsskrift
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250995-title"
                    className="list-reservation__header__text"
                  >
                    Alt om håndarbejdes strikkemagasin
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  (2011-&nbsp;)
                </p>
                <p
                  data-cy="reservation-about-periodical"
                  className="text-small-caption color-secondary-gray"
                >
                  2020, nr. 10
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956250995-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  tidsskrift
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956442465-title"
                    className="list-reservation__header__text"
                  >
                    Lov om tinglysning
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  (2001)
                </p>
                <p
                  data-cy="reservation-about-periodical"
                  className="text-small-caption color-secondary-gray"
                >
                  62. udgave 2020
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 26-01-2024
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="956442465-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">bog</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250955-title"
                    className="list-reservation__header__text"
                  >
                    Man kan ikke føre solen bag lyset
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  Johannes Møllehave (2007)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 02-02-2024
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="956250955-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">bog</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250955-title"
                    className="list-reservation__header__text"
                  >
                    Man kan ikke føre solen bag lyset
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  Johannes Møllehave (2007)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 02-02-2024
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="956250955-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  musik (cd)
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="eng"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250508-title"
                    className="list-reservation__header__text"
                  >
                    Cartoon Network Kidz hits! nummer 12
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Engelina Andrina and Mehdi Avaz (℗2011)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="956250508-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  tv-serie (blu-ray)
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="eng"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="956250682-title"
                    className="list-reservation__header__text"
                  >
                    The crown (Sæson 1). Disc 1
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  Peter Morgan (f. 1963-04-10) (2017)
                </p>
                <p
                  data-cy="reservation-about-series"
                  className="text-small-caption color-secondary-gray"
                >
                  The crown
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="956250682-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
      </div>
      <div className="result-pager">
        <p className="text-small-caption result-pager__title">
          Showing 10 out of 42 loans
        </p>
        <button
          type="button"
          className="btn-primary btn-outline btn-medium arrow__hover--right-small uppercase"
        >
          show more
        </button>
      </div>
      <div className="dpl-list-buttons">
        <h2 className="dpl-list-buttons__header">
          Digital loans<span className="dpl-list-buttons__power">30</span>
        </h2>
        <div className="dpl-list-buttons__buttons">&nbsp;</div>
      </div>
      <div
        data-cy="loan-list-items"
        className="list-reservation-container my-32"
      >
        <div
          className="list-reservation__hidden-explanation"
          id="materials-modal-text"
        >
          This button opens a modal that covers the entire page and contains
          loans with the same due date as the loan currently in focus
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 12-09-2022 08:32
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 13-09-2022 08:32
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  Audiobook
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788711514245-title"
                    className="list-reservation__header__text"
                  >
                    Fuldmåne i oktober
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Victoria Holt, Else Kornerup et al. (2016)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--desktop color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">0 </span>
                <span className="counter__label color-secondary-gray">
                  days
                </span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--danger">Expired</div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 16-09-2022 08:32
                </p>
                <div>&nbsp;</div>
                <a
                  href="https://unsplash.com/photos/wd6YQy0PJt8"
                  rel="noreferrer"
                  className="list-reservation__note list-reservation__note--mobile color-signal-alert"
                >
                  You will be charged a fee, when the item is returned
                </a>
              </div>
            </div>
            <button
              aria-labelledby="9788711514245-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">&nbsp;</div>
            <div className="list-reservation__deadline">&nbsp;</div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076950-title"
                    className="list-reservation__header__text"
                  >
                    Tættere end man tror
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Brad Parks and Rasmus Klitgaard Hansen (2020)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788771076950-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  Audiobook
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788711514245-title"
                    className="list-reservation__header__text"
                  >
                    Fuldmåne i oktober
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Victoria Holt, Else Kornerup et al. (2016)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788711514245-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">
                  Audiobook
                </div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788711514245-title"
                    className="list-reservation__header__text"
                  >
                    Fuldmåne i oktober
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Victoria Holt, Else Kornerup et al. (2016)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788711514245-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
        <div
          className="list-reservation my-32 cursor-pointer arrow__hover--right-small"
          role="button"
          tabIndex={0}
        >
          <div className="list-reservation__material">
            <div>
              <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                &nbsp;
              </div>
            </div>
            <div className="list-reservation__information">
              <div>
                <div className="status-label status-label--outline">E-book</div>
              </div>
              <div className="list-reservation__about">
                <button
                  type="button"
                  lang="dan"
                  className="list-reservation__header color-secondary-gray"
                >
                  <span
                    id="9788771076951-title"
                    className="list-reservation__header__text"
                  >
                    Mordet i det blå tog
                  </span>
                </button>
                <p
                  data-cy="reservation-about-author"
                  className="text-small-caption color-secondary-gray"
                >
                  By Agatha Christie and Jutta Larsen (2014)
                </p>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="list-reservation__status">
            <div className="list-reservation__counter">
              <div className="counter">
                Count
                <span className="counter__value color-secondary-gray">1 </span>
                <span className="counter__label color-secondary-gray">day</span>
              </div>
            </div>
            <div>
              <div className="list-reservation__deadline">
                <div className="status-label status-label--warning">
                  Expiring soon
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Due date 03-02-2024 11:57
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <button
              aria-labelledby="9788771076951-title"
              className="arrow-button"
              type="button"
              style={{ cursor: "pointer" }}
            >
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
            </button>
          </div>
        </div>
      </div>
      <div className="result-pager">
        <p className="text-small-caption result-pager__title">
          Showing 10 out of 30 loans
        </p>
        <button
          type="button"
          className="btn-primary btn-outline btn-medium arrow__hover--right-small uppercase"
        >
          show more
        </button>
      </div>
    </div>
  );
};

export default LoanList;
