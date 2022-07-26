import ToggleButton from "../Buttons/toggle-button/ToggleButton";

export type PauseReservationProps = {
  isChecked: boolean;
  text: string;
  dates: string;
};

export const PauseReservation = ({
  isChecked,
  text,
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
          {text}
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
          <ToggleButton isChecked={isChecked} />
        </div>
      </div>
    </div>
  );
};
