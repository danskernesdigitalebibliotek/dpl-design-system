import React, { MutableRefObject, useCallback, useRef } from "react";

import { BaseOptions } from "flatpickr/dist/types/options";
import { Instance } from "flatpickr/dist/types/instance";
import "flatpickr/dist/flatpickr.css";
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
      // defaultDate: ["2024-01-01", "2024-01-10"],
      now: "2024-01-19",
      altInput: true,
      dateFormat: "d-m-Y",
      static: true,
      onReady: (selectedDates, dateStr, instance) => {
        instance.altInput?.setAttribute("aria-label", "Pause period");
        const classes =
          instance.altInput?.getAttribute("class")?.split(" ") || [];

        // Set placeholder if no dates are chosen and a placeholder is given.
        if (!selectedDates.length) {
          instance.altInput?.setAttribute("placeholder", "Choose pause period");
        }
        // Set empty-date-range class if no dates are chosen.
        if (!selectedDates.length && !classes.includes("empty-date-range")) {
          classes.push("empty-date-range");
          instance.altInput?.setAttribute("class", classes.join(" "));
        }
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
        <div className="modal-pause__subtitle">
          <p className="text-body-medium-regular">{subtitle}</p>
        </div>

        <div className="modal-pause__date-range">
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

        <div className="modal-pause__text-link">
          <p className="text-body-small-regular">{textWithLink}</p>
        </div>
        <p className="text-body-small-regular">
          <Links href="/" linkText={linkText} />
        </p>
        <div className="modal-pause__button mt-48">
          <Button
            buttonType="none"
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
