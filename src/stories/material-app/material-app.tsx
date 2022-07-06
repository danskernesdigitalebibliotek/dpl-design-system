import React from "react";

import MaterialHeader from "../material-header/material-header";

export interface MaterialAppProps {
  title: string;
  author: string;
}

const MaterialApp: React.FC<MaterialAppProps> = ({
  title,
  author,
  periodikum,
}) => {
  return (
    <div className="material-app">
      <MaterialHeader title={title} author={author} />
    </div>
  );
};

export default MaterialApp;
