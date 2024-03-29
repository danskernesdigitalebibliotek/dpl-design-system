import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ModalCloseButton, ModalFallbackButton } from "./ModalShared";

interface ModalWrapperProps {
  shownModal: boolean;
  children?: React.ReactNode;
  classNames?: string;
  orientation?: "right";
}

const Modal = ({
  children,
  shownModal,
  classNames,
  orientation,
}: ModalWrapperProps) => {
  const [shouldShowModal, setShouldShowModal] = useState(shownModal);

  useEffect(() => setShouldShowModal(shownModal), [shownModal]);

  const toggleModal = () => setShouldShowModal(!shouldShowModal);

  if (!shouldShowModal)
    return <ModalFallbackButton toggleModal={toggleModal} />;

  return (
    <div className="modal-backdrop">
      <div
        className={clsx("modal", shouldShowModal && "modal-show", classNames)}
      >
        <div className="modal__screen-reader-description" id="describemodal">
          Denne modal dækker sidens indhold, og er en demo
        </div>
        <ModalCloseButton
          idAriaDescribedBy="describemodal"
          toggleModal={toggleModal}
          orientation={orientation}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
