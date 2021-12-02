import React from "react";

type StoryPlaceholder = {
  name: '',
};

export const StoryPlaceholder = (props: StoryPlaceholder) => {
  const {name} = props;
  return (
    <div className="story-placeholder">{name} has not been implemented yet...</div>
  );
};
