import React from "react";
import MaterialDescription from "../material-description/material-description";

import MaterialHeader from "../material-header/material-header";

export interface MaterialAppProps {
  title: string;
  author: string;
  periodikum?: boolean;
  ctaText?: string;
  materialDescription?: string;
}

const MaterialApp: React.FC<MaterialAppProps> = ({
  title,
  author,
  periodikum,
  ctaText,
  materialDescription,
}) => {
  return (
    <div className="material-app">
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

export default MaterialApp;
