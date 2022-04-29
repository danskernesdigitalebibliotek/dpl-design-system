import { useEffect, useMemo, useState } from "react";

import {
  ModalCloseButton,
  ModalFallbackButton,
} from "../../components/ModalShared";
import { Button } from "../button/Button";

export type ModalSearchProps = {
  showModal: boolean;
};

export const ModalSearch = (props: ModalSearchProps) => {
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
      className={`modal modal-search ${
        showModal ? "modal-show" : ""
      } modal-padding `}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-search__container">
        <h3 className="text-header-h3">Gem søgning</h3>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">Navngiv din søgning</p>
        </div>
        <div className="modal-search__input mt-24">
          <input
            className="modal-search__input-element text-body-large"
            type="text"
            aria-label="Save your search results"
          />
        </div>
        <div className="modal-search__buttons mt-48">
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
