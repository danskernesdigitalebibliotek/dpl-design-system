import React from "react";
import {
  ListDetails,
  ListDetailsProps,
} from "../../Lists/list-details/ListDetails";
import { Cover } from "../../cover/Cover";
import { WarningStatus } from "../../warning-status/WarningStatus";
import { StatusLabel } from "../../status-label/StatusLabel";
import { Button } from "../../Buttons/button/Button";
import Modal from "../Modal";

const listDetails: Array<ListDetailsProps> = [
  {
    menu: {
      ariaLabel: "dropdown",
      arrowIcon: "chevron",
      list: [
        {
          href: "",
          title: "Default state",
        },
      ],
    },
    reservationPlace: "Hylde 3",
    title: "Afleveres",
    date: "31.11.21",
    icon: "icons/collection/Loans.svg",
  },
  {
    title: "Udlånsdato",
    date: "16.10.21",
    icon: "icons/collection/Reservations.svg",
  },
  {
    title: "Materialenummer",
    date: "87556608986",
    icon: "icons/collection/Ebook.svg",
  },
];

export type ModalDetailsProps = {
  title: string;
  cancelText: string;
  saveText: string;
  author: string;
  type: string;
  showWarning: boolean;
  showModal: boolean;
};

export const ModalDetails: React.FC<ModalDetailsProps> = ({
  title,
  author,
  type,
  showModal,
  showWarning,
  saveText,
  cancelText,
}) => (
  <Modal shownModal={showModal} classNames="modal-details">
    <div className="modal-details__container">
      <div className="modal-details__header">
        <div className="modal-details__cover">
          <Cover size="large" url="images/book_cover_large_1.jpg" animate />
        </div>
        <div className="modal-details__material">
          <div className="modal-details__tags">
            <StatusLabel label={type} status="outline" />
            {showWarning && <StatusLabel label="overskredet" status="danger" />}
          </div>
          <h2 className="modal-details__title text-header-h2">{title}</h2>
          <p className="text-body-medium-regular">{author}</p>
        </div>
      </div>
      <div className="modal-details__buttons modal-details__buttons--hide-on-mobile">
        <Button
          buttonType="default"
          label="forny dit lån"
          size="small"
          variant="filled"
          disabled={false}
          collapsible
        />
      </div>
      <div className="modal-details__warning">
        {showWarning && (
          <WarningStatus
            url="/"
            description="Afleveringsdatoen for lånet er overskredet, derfor pålægges du et gebyr, når materialet afleveres"
          />
        )}
      </div>
      <div className="modal-details__list">
        {listDetails.map((detail, index) => (
          <ListDetails key={index} {...detail} />
        ))}
      </div>
      <div className="modal-details__buttons modal-details__buttons--bottom">
        <button type="button" className="link-tag mx-16">
          {cancelText}
        </button>
        <button
          type="button"
          className="btn-primary btn-filled btn-small arrow__hover--right-small "
        >
          {saveText}
        </button>
      </div>
      <div className="modal-details__buttons">
        <Button
          buttonType="default"
          label="forny dit lån"
          classNames="modal-details__buttons__full-width"
          size="small"
          variant="filled"
          disabled={false}
          collapsible
        />
      </div>
    </div>
  </Modal>
);
