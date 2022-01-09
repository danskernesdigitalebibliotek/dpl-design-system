import { useEffect, useMemo, useState } from "react";

import {
  ModalCloseButton,
  ModalFallbackButton,
} from "../../components/ModalShared";
import { ButtonUI } from "../button-ui/ButtonUI";
import { Button } from "../button/Button";
import { Links } from "../links/Links";

export type ModalTextProps = {
  showModal: boolean;
};

export const ModalText = (props: ModalTextProps) => {
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
      className={`modal modal-text ${
        showModal ? "modal-show" : ""
      } modal-padding`}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-text__container color-secondary-gray">
        <h2 className="text-header-h2">
          Vilkår for brug og opbevaring af Data
        </h2>
        <p className="mt-48 text-body-large">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-48">
          {textContent.map(([title, body]) => (
            <div className="modal-text__content">
              <p className="text-body-medium-regular">{title}</p>
              <p className="text-links">{body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="modal-text__buttons">
        <div className="modal-text__buttons__inner">
          <Links
            href={"/"}
            linkText="Ikke nu"
            classNames="color-secondary-gray"
          />
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="giv samtykke"
            disabled={false}
            collapsible={true}
          />
        </div>
      </div>
    </div>
  );
};

const textContent = [
  [
    "Brug af data",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  [
    "Dataforordning",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  [
    "Lorem Ipsum",
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci`,
  ],
];
