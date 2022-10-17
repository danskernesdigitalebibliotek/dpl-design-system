import { useState } from "react";
import { clsx } from "clsx";

const FacetTag = ({ tag }: { tag: string }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      onClick={() => setSelected(!selected)}
      className={clsx("facet-tag", selected && "facet-tag--selected")}
    >
      {tag}
    </button>
  );
};

export default FacetTag;
