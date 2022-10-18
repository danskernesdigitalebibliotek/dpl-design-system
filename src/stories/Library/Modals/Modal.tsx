import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ModalCloseButton, ModalFallbackButton } from "./ModalShared";

interface ModalWrapperProps {
  shownModal: boolean;
  children?: React.ReactNode;
  classNames?: string;
}

const Modal = ({ children, shownModal, classNames }: ModalWrapperProps) => {
  const [shoudShowModal, setShouldShowModal] = useState(shownModal);

  useEffect(() => setShouldShowModal(shownModal), [shownModal]);

  const toggleModal = () => setShouldShowModal(!shoudShowModal);

  if (!shoudShowModal) return <ModalFallbackButton toggleModal={toggleModal} />;

  return (
    <div className={clsx("modal", shoudShowModal && "modal-show", classNames)}>
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
