import { useEffect, useState } from "react";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { ButtonUI } from "../../../01 Atoms/Buttons/button-ui/ButtonUI";
import { Button } from "../../../01 Atoms/Buttons/button/Button";
import { Links } from "../../../01 Atoms/links/Links";

export type ModalCTAProps = {
  title: string;
  showModal: boolean;
};

export const ModalCTA = (props: ModalCTAProps) => {
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
      className={`modal modal-cta modal-padding ${
        showModal ? "modal-show" : ""
      }`}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-cta__container">
        <h2 className="text-header-h2">{props.title}</h2>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">
            Fornyer du dine lån, forhøjes dit gebyr.
          </p>
          <p className="text-links mt-24">
            Alle materialer ikke kan fornys og lånet splittes derfor op. Ved
            overskredne lån modtager du et gebyr pr. lån og derfor forhøjes dit
            samlede gebyr, hvis du vælger at gå videre med at fornye.{" "}
            <Links
              href={"/"}
              linkText="Læs mere"
              classNames="color-secondary-gray ml-8"
            />
          </p>
          <p className="text-links mt-24">Er du sikker på du vil fornye?</p>
        </div>
        <div className="modal-cta__buttons mt-48">
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="Annuller fornyelse"
            disabled={false}
            collapsible={true}
          />
          <div className="modal-cta__link">
            <Links
              href={"/"}
              linkText="Ja, forny mulige"
              classNames="color-secondary-gray ml-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
