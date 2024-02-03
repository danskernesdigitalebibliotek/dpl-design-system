// This is copy/pasted from dpl-react because no design story was made for this view.

import LoanListItem from "./LoanListItem";
import { ReactComponent as ListIcon } from "../../../public/icons/collection/List.svg";
import { ReactComponent as VariousIcon } from "../../../public/icons/collection/Various.svg";
import LoanListItemStacked from "./LoanListItemStacked";

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
                <ListIcon />
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
                <VariousIcon />
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
        <LoanListItemStacked status="danger" />
        {[...Array(10)].map((_, index) => (
          <LoanListItem key={index} status="danger" />
        ))}
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
        {[...Array(4)].map((_, index) => (
          <LoanListItem key={index} status="danger" />
        ))}
        {[...Array(6)].map((_, index) => (
          <LoanListItem key={index} status="warning" />
        ))}
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
