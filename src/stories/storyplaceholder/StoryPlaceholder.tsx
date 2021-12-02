import React from "react";

type StoryPlaceholder = {
  name: '',
};

export const StoryPlaceholder = (props: StoryPlaceholder) => {
  const {name} = props;
  return (
    <div style={{color: "red"}}>{name} is not implemented yet...</div>
  );
};
