import React from "react";
import MaterialLink from "../material-link/material-link";

interface MaterialDescriptionProps {
  materialDescription?: string;
}

const MaterialDescription: React.FC<MaterialDescriptionProps> = ({
  materialDescription,
}) => {
  return (
    <section className="material-description">
      <h2 className="text-header-h4 pb-24">Beskrivelse</h2>
      <p className="text-body-large ">{materialDescription}</p>
      <div className="material-description__links mt-32">{MaterialLinks}</div>
    </section>
  );
};

export default MaterialDescription;

const MaterialLinks = [
  {
    title: "Nr. 3",
    subTitle: "i serien",
    linkList: [
      {
        text: "Vejen til Jerusalem",
        url: "/",
      },
    ],
  },
  {
    title: "I samme serie",

    linkList: [
      {
        text: "Tempelridderen",
        url: "/",
      },
      {
        text: "Riget ved vejens ende",
        url: "/",
      },
      {
        text: "Arven efter Arn",
        url: "/",
      },
    ],
  },
  {
    title: "Emneord",
    linkList: [
      {
        text: "Sverige",
        url: "/",
      },
      {
        text: "historie",
        url: "/",
      },
      {
        text: "klosterliv",
        url: "/",
      },
      {
        text: "korstogene",
        url: "/",
      },
      {
        text: "middelalderen",
        url: "/",
      },
    ],
  },
].map((item) => <MaterialLink {...item} />);
