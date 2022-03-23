import { useEffect, useState } from "react";

import {
  ModalCloseButton,
  ModalFallbackButton,
} from "../../components/ModalShared";
import { Button } from "../button/Button";
import { Links } from "../links/Links";

export type ModalPauseProps = {
  showModal: boolean;
  title: string;
  subtitle: string;
  textWithLink: string;
  linkText: string;
};

export const ModalPause = (props: ModalPauseProps) => {
  const [showModal, setShow] = useState(props.showModal);

  useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal]);

  const toggleModal = () => {
    setShow(!showModal);
  };

  if (!showModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div
      className={`modal modal-pause ${
        showModal ? "modal-show" : ""
      } modal-padding `}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-pause__container">
        <h3 className="text-header-h3">{props.title}</h3>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">{props.subtitle}</p>
        </div>

        <div className="modal-pause__dropdowns mt-24">
          <div className="datepickers">
            <div className="datepicker">
              <span className="datepicker-toggle">
                <label htmlFor="startDate" className="text-body-medium-regular">Startdato</label>
                <input type="date" name="startDate" id="startDate" className="datepicker-input" aria-label="startDate"/>
              </span>
            </div>

            <div className="datepicker">
              <span className="datepicker-toggle">
                <label htmlFor="startDate" className="text-body-medium-regular">Slutdato</label>
                <input type="date" name="endDate" id="endDate" className="datepicker-input" aria-label="endDate"/>
              </span>
            </div>
          </div>
        </div>
        
        <div className="modal_pause__text-link mt-24 color-secondary-gray">
          <p className="text-body-small-regular">
            {props.textWithLink} <Links href={"/"} linkText={props.linkText} />
          </p>
        </div>
        <div className="modal-pause__button mt-48">
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="gem"
            disabled={false}
            collapsible={true}
          />
        </div>
      </div>
    </div>
  );
};
