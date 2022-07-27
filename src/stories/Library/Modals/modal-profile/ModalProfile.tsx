import React, { useEffect, useState } from "react";

import { ModalHeader } from "../modal-header/ModalHeader";
import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { Button } from "../../Buttons/button/Button";
import { LinkFilters, LinkFilter } from "../../link-filters/LinkFilters";
import {
  ListDashboard,
  ListDashboardProps,
} from "../../Lists/list-dashboard/ListDashboard";

export type ModalProfileProps = {
  showModal: boolean;
  headerName: string;
  headerLinkHref: string;
  headerLinkText: string;
  notifications: ListDashboardProps[];
  profileNavLinks: LinkFilter[];
};

export const ModalProfile: React.FC<ModalProfileProps> = ({
  showModal,
  headerName,
  headerLinkHref,
  headerLinkText,
  notifications,
  profileNavLinks,
}) => {
  const [shownModal, setShownModal] = useState(showModal);

  useEffect(() => {
    setShownModal(showModal);
  }, [showModal]);

  const toggleModal = () => {
    setShownModal(!showModal);
  };

  if (!showModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div className="modal__backdrop">
      <div
        className={`modal modal-profile modal-right ${
          shownModal ? "modal-show" : ""
        }`}
      >
        <div className="modal__screen-reader-description" id="describemodal">
          Denne modal dækker sidens indhold, og er en demo
        </div>
        <ModalCloseButton
          idAriaDescribedBy="describemodal"
          toggleModal={toggleModal}
        />

        <ModalHeader
          headerName={headerName}
          headerLinkHref={headerLinkHref}
          headerLinkText={headerLinkText}
        />

        <div className="modal-profile__notifications">
          {notifications.map((item, index) => (
            <div key={index} className="modal-profile__notification-item">
              <ListDashboard
                title={item.title}
                number={item.number}
                label={item.label}
                showDot={item.showDot}
              />
            </div>
          ))}
        </div>

        <div className="modal-profile__container">
          <div className="modal-profile__links">
            <LinkFilters filters={profileNavLinks} />
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

export default ModalProfile;
