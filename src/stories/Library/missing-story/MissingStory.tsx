import React from "react";

type MissingStoryProps = {
  name: "";
  description: "";
};

export const MissingStory = (props: MissingStoryProps) => {
  const { name } = props;
  return (
    <div className="missing-story">{name} has not been implemented yet...</div>
  );
};

export default MissingStory;
