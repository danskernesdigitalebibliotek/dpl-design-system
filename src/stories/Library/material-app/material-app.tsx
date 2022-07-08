import React from "react";

import MaterialHeader from "../material-header/material-header";

export interface MaterialAppProps {
  title: string;
  author: string;
  periodikum?: boolean;
  ctaText?: string;
}

const MaterialApp: React.FC<MaterialAppProps> = ({
  title,
  author,
  periodikum,
  ctaText,
}) => {
  return (
    <div className="material-app">
      <MaterialHeader
        title={title}
        author={author}
        periodikum={periodikum}
        ctaText={ctaText}
      />
    </div>
  );
};

export default MaterialApp;
