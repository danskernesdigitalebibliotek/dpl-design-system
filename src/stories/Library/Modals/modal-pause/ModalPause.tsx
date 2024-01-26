import React, { MutableRefObject, useCallback, useRef } from "react";

import { BaseOptions } from "flatpickr/dist/types/options";
import { Instance } from "flatpickr/dist/types/instance";
import flatpickr from "flatpickr";
import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";
import Modal from "../Modal";

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
  const picker = useRef() as MutableRefObject<Instance>;

  const calendar = useCallback((node: Node | null) => {
    const options: Partial<BaseOptions> = {
      mode: "range",
      defaultDate: ["2024-01-01", "2024-01-10"],
      now: "2024-01-19",
      altInput: true,
      dateFormat: "d-m-Y",
      static: true,
      onReady: (selectedDates, dateStr, instance) => {
        instance.altInput?.setAttribute("aria-label", "Pause period");
      },
    };

    if (node !== null) {
      picker.current = flatpickr(node, options);
    }
  }, []);

  return (
    <Modal shownModal={showModal} classNames="modal-padding modal-pause">
      <div className="modal-pause__container">
        <h3 className="text-header-h3">{title}</h3>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">{subtitle}</p>
        </div>

        <div className="modal-pause__dropdowns mt-24">
          <div className="date-range">
            <div className="date-range__input">
              <label htmlFor="date-range" className="text-body-medium-regular">
                Pause period
              </label>
              <input
                id="date-range"
                ref={calendar}
                title="Hidden field"
                aria-label="Hidden field"
                type="text"
              />
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
    </Modal>
  );
};
