import React, { useEffect } from "react";
import { Button } from "../Buttons/button/Button";
import { Links } from "../links/Links";

export type WarningStatusProps = {
  title?: string;
  description: string;
  url: string;
  button?: {
    title: string;
    url: string;
  };
  owes?: string;
};

export const WarningStatus = (props: WarningStatusProps) => {
  const { title, description, url, button, owes } = props;

  return (
    <div className="warning-bar bg-global-secondary">
      <div className="warning-bar__left">
        <img
          className="warning-bar__icon"
          src="icons/basic/icon-warning.svg"
          alt="warning icon"
        />
        <div>
          {title && <p className="text-body-medium-medium">{title}</p>}
          {description && (
            <p className="text-body-medium-regular color-primary-black">
              {description}{" "}
              {url && (
                <Links
                  href={url}
                  linkText="Læs mere"
                  classNames="color-secondary-gray ml-8"
                />
              )}
            </p>
          )}
        </div>
      </div>
      <div className="warning-bar__right">
        {owes && (
          <p className="text-body-medium-medium warning-bar__owes">{owes},-</p>
        )}
        {button && (
          <Button
            buttonType="default"
            size="small"
            variant="filled"
            label="se mere"
            disabled={false}
            collapsible
          />
        )}
      </div>
    </div>
  );
};
