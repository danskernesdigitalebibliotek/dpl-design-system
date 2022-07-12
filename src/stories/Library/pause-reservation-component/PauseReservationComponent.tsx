import { ToggleButton } from "../toggle-button/ToggleButton.stories";

export type PauseReservationComponentProps = {
  isChecked: boolean;
};

export const PauseReservationComponent = ({
  isChecked,
}: PauseReservationComponentProps) => {
  return (
    <div className="dpl-pause-reservation-component">
      <div className="dpl-pause-reservation-component__pagefold" />
      <div className="dpl-pause-reservation-component__flex">
        <div className="dpl-pause-reservation-component__flex__reservation-icon">
          <img src="icons/collection/Reservations.svg" alt="Reservations" />
        </div>
        <div className="dpl-pause-reservation-component__flex__text">
          Sæt fysiske reserveringer på pause
        </div>
        {isChecked && (
          <span
            aria-label="Reservationer er sat på pause i følgende periode"
            className="dpl-pause-reservation-component__flex__badge"
          >
            20.09.2021 - 12.10.2021
          </span>
        )}
        <div className="dpl-pause-reservation-component__flex__button">
          <ToggleButton isChecked={isChecked} />
        </div>
      </div>
    </div>
  );
};
