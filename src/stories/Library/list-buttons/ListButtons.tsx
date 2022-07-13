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
      <div className="dpl-list-buttons__header">
        {header}
        <div className="dpl-list-buttons__power">{number}</div>
      </div>
      <div className="dpl-list-buttons__buttons">
        <div className="dpl-list-buttons__buttons__button">
          <IconButton src="icons/collection/Menu.svg" />
        </div>
        <div className="dpl-list-buttons__buttons__button">
          <IconButton src="icons/collection/Various.svg" />
        </div>
        <div className="dpl-list-buttons__buttons__button">
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
