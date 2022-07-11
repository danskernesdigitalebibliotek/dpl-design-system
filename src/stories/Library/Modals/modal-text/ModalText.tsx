import { useEffect, useState } from "react";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";

export type ModalTextProps = {
  showModal: boolean;
  title: string;
  linkText: string;
  btnLabel: string;
  subtitle: string;
  textContent: Array<{
    title: string;
    text: string;
  }>;
  showModalProp: boolean;
};

export const ModalText = (props: ModalTextProps) => {
  const {
    title,
    subtitle,
    textContent,
    linkText,
    btnLabel,
    showModal: showModalProp,
  } = props;
  const [showModal, setShow] = useState(showModalProp);

  useEffect(() => {
    setShow(showModalProp);
  }, [showModalProp]);

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
        <h3 className="text-header-h3">{title}</h3>

        <p className="mt-48 text-body-large">{subtitle}</p>

        <div className="mt-48">
          {textContent.map((row) => (
            <div className="modal-text__content">
              <p className="text-body-medium-regular">{row.title}</p>
              <p className="text-links">{row.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="modal-text__buttons">
        <div className="modal-text__buttons-inner">
          <Links
            href="/"
            linkText={linkText}
            classNames="color-secondary-gray"
          />
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label={btnLabel}
            disabled={false}
            collapsible
          />
        </div>
      </div>
    </div>
  );
};

export const textContent = [
  {
    title: "Brug bibliotekerne",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Dataforordning",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Lorem Ipsum",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
];
