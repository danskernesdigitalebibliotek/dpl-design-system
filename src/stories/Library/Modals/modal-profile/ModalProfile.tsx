import { useEffect, useState } from "react";

import { ModalHeader } from "../modal-header/ModalHeader";
import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { ButtonUI } from "../../Buttons/button-ui/ButtonUI";
import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";
import { LinkFilters, LinkFiltersProps } from "../../link-filters/LinkFilters";
import { Header, ModalHeaderProps } from "../../../Blocks/header/Header";

export type ModalProfileProps = {
  HeaderProps: ModalHeaderProps[];
  profileNavLinks: LinkFiltersProps[];
  showModal: boolean;
};

export const ModalProfile = (props: ModalProfileProps) => {
  const { HeaderProps, profileNavLinks } = props;

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
    <div class="modal__backdrop">
      <div
        className={`modal modal-profile modal-right ${
          showModal ? "modal-show" : ""
        }`}
      >
        <ModalCloseButton toggleModal={toggleModal} />

        <ModalHeader
          name={props.name}
          headerLinkHref={props.headerLinkHref}
          headerLinkText={props.headerLinkText}
        ></ModalHeader>

        <div className="modal-profile__container">
          <div className="modal-profile__links">
            <LinkFilters filters={props.profileNavLinks} />
          </div>
          <div className="modal-profile__btn-logout">
            <Button
              buttonType="default"
              size="medium"
              variant="filled"
              label="Log ud"
              disabled={false}
              collapsible={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
