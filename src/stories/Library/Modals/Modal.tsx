import React from "react";
import { ModalCloseButton } from "./ModalShared";

interface ModalWrapperProps {
  shownModal: boolean;
  children?: React.ReactNode;
  classNames?: string;
  toggleModal?: () => void;
}

const Modal = ({
  children,
  shownModal,
  classNames,
  toggleModal,
}: ModalWrapperProps) => {
  return (
    <div
      className={`modal ${shownModal ? "modal-show" : ""} ${classNames ?? ""}`}
    >
      <div className="modal__screen-reader-description" id="describemodal">
        Denne modal dækker sidens indhold, og er en demo
      </div>
      <ModalCloseButton
        idAriaDescribedBy="describemodal"
        toggleModal={toggleModal}
      />
      {children}
    </div>
  );
};

export default Modal;
