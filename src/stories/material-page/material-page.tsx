import React from "react";
import MaterialDescription from "../material-description/material-description";

import MaterialHeader from "../material-header/material-header";

export interface MaterialPageProps {
  title: string;
  author: string;
  periodikum?: boolean;
  ctaText?: string;
  materialDescription?: string;
}

const MaterialPage: React.FC<MaterialPageProps> = ({
  title,
  author,
  periodikum,
  ctaText,
  materialDescription,
}) => {
  return (
    <div className="material-page">
      <MaterialHeader
        title={title}
        author={author}
        periodikum={periodikum}
        ctaText={ctaText}
      />
      <MaterialDescription materialDescription={materialDescription} />
    </div>
  );
};

export default MaterialPage;
