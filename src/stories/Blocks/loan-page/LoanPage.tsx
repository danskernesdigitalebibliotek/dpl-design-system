import { Button } from "../../Library/Buttons/button/Button";
import ResultPager from "../../Library/card-list-page/ResultPager";
import ReservationListEmptyState from "../reservation-page/ReservationListEmptyState";
import ReservationListItem from "../reservation-page/ReservationListItem";

export interface LoanPageProps {
  headline: string;
  physicalLoans: number;
  digitalLoans: number;
  skeletonVersion?: boolean;
}

const LoanPage: React.FC<LoanPageProps> = ({
  headline,
  physicalLoans,
  digitalLoans,
  skeletonVersion,
}) => {
  if (skeletonVersion) {
    return <div>This will be skeletons</div>;
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
            <button className="dpl-list-buttons__buttons__button dpl-icon-button dpl-icon-button--selected">
              <img src="icons/collection/Menu.svg" alt="list icon" />
            </button>
            <button className="dpl-list-buttons__buttons__button">
              <img src="icons/collection/Various.svg" alt="stacked icon" />
            </button>
            <Button
              buttonType="none"
              label="Renew several"
              size="small"
              variant="filled"
              classNames="dpl-list-buttons__buttons__button"
            />
          </div>
        </div>
        {!!physicalLoans && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem amount={physicalLoans} withNote />
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
