import React from "react";
import MaterialDescription from "../material-description/material-description";

import MaterialHeader from "../material-header/material-header";

export interface MaterialPageProps {
  title: string;
  author: string;
  periodikum?: boolean;
  ctaText?: string;
  description?: string;
}

const MaterialPage: React.FC<MaterialPageProps> = ({
  title,
  author,
  periodikum,
  ctaText,
  description,
}) => {
  return (
    <div className="material-page">
      <MaterialHeader
        title={title}
        author={author}
        periodikum={periodikum}
        ctaText={ctaText}
      />
      <MaterialDescription description={description} />
    </div>
  );
};

export default MaterialPage;
