import React from "react";
import MaterialContent from "./MaterialContent";
import { MaterialContentsProps } from "./types";

const MaterialContents: React.FC<MaterialContentsProps> = ({ contents }) => {
  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <>
      {contents.map((contentEntity, index) => (
        <MaterialContent key={index} contentEntity={contentEntity} />
      ))}
    </>
  );
};

export default MaterialContents;
