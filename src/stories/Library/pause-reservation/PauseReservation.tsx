export type PauseReservationProps = {
  isChecked: boolean;
  isPausedtext: string;
  pauseText: string;
  dates: string;
};

export const PauseReservation = ({
  isChecked,
  pauseText,
  isPausedtext,
  dates,
}: PauseReservationProps) => {
  return (
    <div className="dpl-pause-reservation-component">
      <div className="dpl-pause-reservation-component__pagefold" />
      <div className="dpl-pause-reservation-component__flex">
        <div className="dpl-pause-reservation-component__flex__reservation-icon">
          <img src="icons/collection/Reservations.svg" alt="" />
        </div>
        <div className="dpl-pause-reservation-component__flex__text">
          {isChecked ? isPausedtext : pauseText}
        </div>
        {isChecked && (
          <span
            aria-label="Reservationer er sat på pause i følgende periode"
            className="dpl-pause-reservation-component__flex__badge"
          >
            {dates}
          </span>
        )}
        <div className="dpl-pause-reservation-component__flex__button">
          <button type="button" className="btn-primary btn-filled btn-small">
            Indstillinger
          </button>
        </div>
      </div>
    </div>
  );
};
