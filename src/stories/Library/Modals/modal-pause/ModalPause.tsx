import React, { useEffect, useState } from "react";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";

export type ModalPauseProps = {
  showModal: boolean;
  title: string;
  subtitle: string;
  textWithLink: string;
  linkText: string;
};

export const ModalPause: React.FC<ModalPauseProps> = ({
  showModal,
  title,
  subtitle,
  textWithLink,
  linkText,
}) => {
  const [shouldShowModal, setShouldShowModal] = useState(showModal);

  useEffect(() => {
    setShouldShowModal(showModal);
  }, [showModal]);

  const toggleModal = () => {
    setShouldShowModal(!shouldShowModal);
  };

  if (!shouldShowModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div
      className={`modal modal-pause ${
        shouldShowModal ? "modal-show" : ""
      } modal-padding `}
    >
      <div className="modal__screen-reader-description" id="describemodal">
        Denne modal dækker sidens indhold, og er en demo
      </div>
      <ModalCloseButton
        idAriaDescribedBy="describemodal"
        toggleModal={toggleModal}
      />
      <div className="modal-pause__container">
        <h3 className="text-header-h3">{title}</h3>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">{subtitle}</p>
        </div>

        <div className="modal-pause__dropdowns mt-24">
          <div className="datepickers">
            <div className="datepicker">
              <span className="datepicker-toggle">
                <label htmlFor="startDate" className="text-body-medium-regular">
                  Startdato
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="datepicker-input"
                  aria-label="startDate"
                />
              </span>
            </div>

            <div className="datepicker">
              <span className="datepicker-toggle">
                <label htmlFor="startDate" className="text-body-medium-regular">
                  Slutdato
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="datepicker-input"
                  aria-label="endDate"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="modal-pause__text-link mt-24 color-secondary-gray">
          <p className="text-body-small-regular">
            {textWithLink} <Links href="/" linkText={linkText} />
          </p>
        </div>
        <div className="modal-pause__button mt-48">
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="gem"
            disabled={false}
            collapsible
          />
        </div>
      </div>
    </div>
  );
};
