import React, { useEffect, useState } from "react";

import { MaterialBanner } from "../../../Blocks/material-banner/MaterialBanner";
import { MaterialCardProps } from "../../material-card/MaterialCard";
import { LinkFilter } from "../../link-filters/LinkFilters";
import {
  ListDetails,
  ListDetailsProps,
} from "../../Lists/list-details/ListDetails";
import { Material } from "../../material/Material";
import { WarningStatus } from "../../warning-status/WarningStatus";
import { StatusLabel } from "../../status-label/StatusLabel";
import { Button } from "../../Buttons/button/Button";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";

const listDetails: Array<ListDetailsProps> = [
  {
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

const materialCards: MaterialCardProps[] = [
  {
    title: "De uadskillelige",
    description: "Simone de Beauvoir",
    isLiked: false,
    material: {
      url: "images/book_cover_1.jpg",
      animate: true,
      size: "medium",
      tint: "80",
    },
  },
  {
    title: "Den lille bog om dansk design",
    description: "Af Marie Hugsted",
    isLiked: false,
    material: {
      url: "images/book_cover_2.jpg",
      animate: true,
      size: "medium",
      tint: "40",
    },
  },
  {
    title: "Audrey Hepburn",
    description: "Isabel Sánchez Vegara",
    isLiked: true,
    material: {
      url: "images/book_cover_3.jpg",
      animate: true,
      size: "medium",
      tint: "60",
    },
  },
  {
    title: "Døgnkioskmennesket",
    description: "Sayaka Murata",
    isLiked: false,
    material: {
      url: "images/book_cover_4.jpg",
      animate: true,
      size: "medium",
      tint: "120",
    },
  },
];

const linksFilters: LinkFilter[] = [
  {
    title: "Noget der ligner",
    href: "/",
    counter: "4",
  },
  {
    title: "Af samme forfatter",
    href: "/",
    counter: "4",
  },
];

export type ModalDetailsProps = {
  title: string;
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
}) => {
  const [shoudShowModal, setShouldShowModal] = useState(showModal);

  useEffect(() => {
    setShouldShowModal(showModal);
  }, [showModal]);

  const toggleModal = () => {
    setShouldShowModal(!showModal);
  };

  if (!shoudShowModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div
      className={`modal modal-details ${shoudShowModal ? "modal-show" : ""}`}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-details__container">
        <div className="modal-details__header">
          <div className="modal-details__cover">
            <Material
              size="large"
              url="images/book_cover_large_1.jpg"
              animate
            />
          </div>
          <div className="modal-details__material">
            <div className="modal-details__tags">
              <StatusLabel label={type} status="outline" />
              {showWarning && (
                <StatusLabel label="overskredet" status="danger" />
              )}
            </div>
            <h2 className="modal-details__title text-header-h2">{title}</h2>
            <p className="text-body-medium-regular">{author}</p>
          </div>
        </div>
        <div className="modal-details__buttons">
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
      </div>
      <div className="modal-details__banner">
        <MaterialBanner
          title="Andre materialer"
          body=""
          linkFilters={linksFilters}
          cards={materialCards}
          showBodyText={false}
          showLinkfilters
        />
      </div>
    </div>
  );
};
