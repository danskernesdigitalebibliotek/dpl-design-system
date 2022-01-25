export type MaterialProps = {
  url: string;
  animate: boolean;
  size: "small" | "medium" | "large";
};

const placeholderBg = [
  "bg-identity-tint-120",
  "bg-identity-tint-80",
  "bg-identity-tint-60",
  "bg-identity-tint-40",
  "bg-identity-tint-20",
];

export const Material = (props: MaterialProps) => {
  // If Material does not have an img, show a random bg-color for each card.
  const bg = placeholderBg[(Math.random() * placeholderBg.length) | 0];
  return (
    <div className="material-container">
      <a
        className={`material material--${props.size} ${bg} ${
          props.animate ? "material__animate" : ""
        }`}
      >
        <img src={props.url} alt="" onError={(e) => (e.currentTarget.style["display"] = "none")} />
      </a>
    </div>
  );
};
