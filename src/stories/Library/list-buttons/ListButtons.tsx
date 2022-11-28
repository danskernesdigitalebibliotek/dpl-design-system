import React from "react";
import { Button } from "../Buttons/button/Button";
import IconButton from "../Buttons/icon-button/IconButton";

export type ListButtonProps = {
  buttonLabel: string;
  header: string;
  number: string;
};

export const ListButton: React.FC<ListButtonProps> = ({
  buttonLabel,
  header,
  number,
}) => {
  return (
    <div className="dpl-list-buttons">
      <div
        className="dpl-list-buttons__screen-reader-description"
        id="renew-multiple-modal"
      >
        This button opens a modal that covers the entire page and contains loans
        with different due dates, if some of the loans in the modal are
        renewable you can renew them
      </div>
      <h2 className="dpl-list-buttons__header">
        {header}
        <div className="dpl-list-buttons__power">{number}</div>
      </h2>
      <div className="dpl-list-buttons__buttons">
        <div className="dpl-list-buttons__buttons__button">
          <IconButton
            altText="Denne knap sorterer listen efter afleveringsdato"
            src="icons/collection/Menu.svg"
          />
        </div>
        <div className="dpl-list-buttons__buttons__button">
          <IconButton
            altText="Denne knap sorterer listen i stakke"
            src="icons/collection/Various.svg"
          />
        </div>
        <div
          className="dpl-list-buttons__buttons__button"
          aria-describedby="renew-multiple-modal"
        >
          <Button
            label={buttonLabel}
            buttonType="none"
            variant="filled"
            disabled={false}
            collapsible={false}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};
