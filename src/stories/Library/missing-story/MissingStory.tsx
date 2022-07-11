import React from "react";

type MissingStory = {
  name: "";
  description: "";
};

export const MissingStory = (props: MissingStory) => {
  const { name } = props;
  return (
    <div className="missing-story">{name} has not been implemented yet...</div>
  );
};
