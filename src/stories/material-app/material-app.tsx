import React from "react";

import MaterialHeader from "../material-header/material-header";

export interface MaterialAppProps {
  title: string;
  author: string;
  periodikum?: boolean;
}

const MaterialApp: React.FC<MaterialAppProps> = ({
  title,
  author,
  periodikum,
}) => {
  return (
    <div className="material-app">
      <MaterialHeader title={title} author={author} periodikum={periodikum} />
    </div>
  );
};

export default MaterialApp;
