import ResultPager from "../../Library/card-list-page/ResultPager";
import { PauseReservation } from "../../Library/pause-reservation/PauseReservation";
import ReservationListEmptyState from "./ReservationListEmptyState";
import ReservationListItem from "./ReservationListItem";
import ReservationPageSkeleton from "./ReservationPageSkeleton";

export interface ReservationPageProps {
  headline: string;
  readyForPickup: number;
  physicalReservations: number;
  digitalReservations: number;
  skeletonVersion?: boolean;
}

const ReservationPage: React.FC<ReservationPageProps> = ({
  headline,
  readyForPickup,
  physicalReservations,
  digitalReservations,
  skeletonVersion,
}) => {
  if (skeletonVersion) {
    return <ReservationPageSkeleton />;
  }

  if (!readyForPickup && !physicalReservations && !digitalReservations) {
    return (
      <div className="reservation-list-page">
        <h1 className="text-header-h1 m-32">{headline}</h1>
        <ReservationListEmptyState
          text="At the moment you have 0 reservations"
          classsNames="mt-64"
        />
      </div>
    );
  }

  return (
    <div className="reservation-list-page">
      <h1 className="text-header-h1 m-32">{headline}</h1>
      <PauseReservation
        isPausedtext="Reservations are paused"
        pauseText="Pause your reservations"
        classNames="m-32"
      />

      <div>
        <div className="dpl-list-buttons m-32">
          <h2
            data-cy="reservation-list-header"
            className="dpl-list-buttons__header"
          >
            Ready for pickup
            <div className="dpl-list-buttons__power">{readyForPickup}</div>
          </h2>
        </div>
        {!!readyForPickup && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem amount={readyForPickup} />
              </li>
            </ul>
            <ResultPager
              currentResults={readyForPickup}
              totalResults={readyForPickup}
            />
          </div>
        )}
        {!readyForPickup && (
          <ReservationListEmptyState text="At the moment you have 0 reservations ready for pickup" />
        )}
      </div>

      <div>
        <div className="dpl-list-buttons m-32">
          <h2
            data-cy="reservation-list-header"
            className="dpl-list-buttons__header"
          >
            Physical reservations
            <div className="dpl-list-buttons__power">
              {physicalReservations}
            </div>
          </h2>
        </div>
        {!!physicalReservations && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem amount={physicalReservations} />
              </li>
            </ul>
            <ResultPager
              currentResults={physicalReservations}
              totalResults={physicalReservations}
            />
          </div>
        )}
        {!physicalReservations && (
          <ReservationListEmptyState text="At the moment you have 0 physical reservations" />
        )}
      </div>

      <div>
        <div className="dpl-list-buttons m-32">
          <h2
            data-cy="reservation-list-header"
            className="dpl-list-buttons__header"
          >
            Digital reservations
            <div className="dpl-list-buttons__power">{digitalReservations}</div>
          </h2>
        </div>
        {!!digitalReservations && (
          <div>
            <ul className="list-reservation-container">
              <li>
                <ReservationListItem amount={digitalReservations} />
              </li>
            </ul>
            <ResultPager
              currentResults={digitalReservations}
              totalResults={digitalReservations + 1}
            />
          </div>
        )}
        {!digitalReservations && (
          <ReservationListEmptyState text="At the moment you have 0 digital reservations" />
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
