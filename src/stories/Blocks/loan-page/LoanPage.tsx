import { Button } from "../../Library/Buttons/button/Button";
import ResultPager from "../../Library/card-list-page/ResultPager";
import ReservationListEmptyState from "../reservation-page/ReservationListEmptyState";
import ReservationListItem from "../reservation-page/ReservationListItem";
import LoanPageSkeleton from "./LoanPageSkeleton";
import { ReactComponent as ListIcon } from "../../../public/icons/collection/List.svg";
import { ReactComponent as VariousIcon } from "../../../public/icons/collection/Various.svg";

export interface LoanPageProps {
  headline: string;
  isStacked?: boolean;
  physicalLoans: number;
  digitalLoans: number;
  skeletonVersion?: boolean;
}

const LoanPage: React.FC<LoanPageProps> = ({
  headline,
  isStacked = false,
  physicalLoans,
  digitalLoans,
  skeletonVersion,
}) => {
  if (skeletonVersion) {
    return <LoanPageSkeleton />;
  }

  if (!physicalLoans && !digitalLoans) {
    return (
      <div className="loan-list-page">
        <h1 className="text-header-h1 my-32">{headline}</h1>
        <ReservationListEmptyState
          text="At the moment you have 0 loans"
          classsNames="mt-64"
        />
      </div>
    );
  }

  return (
    <div className="loan-list-page">
      <h1 className="text-header-h1 my-32">{headline}</h1>

      <div>
        <div className="dpl-list-buttons m-32">
          <h2
            data-cy="reservation-list-header"
            className="dpl-list-buttons__header"
          >
            Physical loans
            <div className="dpl-list-buttons__power">{physicalLoans}</div>
          </h2>
          <div className="dpl-list-buttons__buttons">
            <div className="dpl-list-buttons__buttons__button">
              <button
                aria-pressed={!isStacked}
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
                aria-pressed={isStacked}
                className="dpl-icon-button"
                type="button"
                aria-label="This button filters the list, so only one the materials that have the same due date is shown"
              >
                <VariousIcon />
              </button>
            </div>
            <div className="dpl-list-buttons__buttons__button">
              <div className="dpl-list-buttons__buttons__button--hide-on-mobile">
                <Button
                  buttonType="none"
                  label="Renew several"
                  size="small"
                  variant="filled"
                />
              </div>
              <div className="hide-on-desktop button-box button-box--sticky-bottom">
                <Button
                  buttonType="none"
                  label="Renew several"
                  size="small"
                  variant="filled"
                />
              </div>
            </div>
          </div>
        </div>
        {!!physicalLoans && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem
                  amount={physicalLoans}
                  withNote
                  isStacked={isStacked}
                />
              </li>
            </ul>
            <ResultPager
              currentResults={physicalLoans}
              totalResults={physicalLoans}
            />
          </div>
        )}
        {!physicalLoans && (
          <ReservationListEmptyState text="At the moment you have 0 physical loans" />
        )}
      </div>

      <div>
        <div className="dpl-list-buttons m-32">
          <h2 className="dpl-list-buttons__header">
            Digital reservations
            <div className="dpl-list-buttons__power">{digitalLoans}</div>
          </h2>
        </div>
        {!!digitalLoans && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem amount={digitalLoans} />
              </li>
            </ul>
            <ResultPager
              currentResults={digitalLoans}
              totalResults={digitalLoans + 1}
            />
          </div>
        )}
        {!digitalLoans && (
          <ReservationListEmptyState text="At the moment you have 0 digital loans" />
        )}
      </div>
    </div>
  );
};

export default LoanPage;
