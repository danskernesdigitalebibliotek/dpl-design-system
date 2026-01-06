import React from "react";
import MaterialContent from "./MaterialContent";
import { MaterialContentsProps } from "./types";

const MaterialContents: React.FC<MaterialContentsProps> = ({
  contents,
  defaultOpen = false,
}) => {
  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <>
      {contents.map((contentEntity, index) => (
        <MaterialContent
          key={index}
          contentEntity={contentEntity}
          defaultOpen={defaultOpen}
        />
      ))}
    </>
  );
};

export default MaterialContents;
