import { useState } from "react";

const FacetBrowserTag = ({ tag }: { tag: string }) => {
  const [selected, setselected] = useState(false);
  return (
    <button
      onClick={() => setselected(!selected)}
      className={`facet-browser-tag ${
        selected && "facet-browser-tag--selected"
      }`}
    >
      {tag}
    </button>
  );
};

export default FacetBrowserTag;
