import clsx from "clsx";

export type MaterialProps = {
  url: string;
  animate: boolean;
  size: "small" | "medium" | "large";
  tint: "20" | "40" | "60" | "80" | "120";
};

export const Material = (props: MaterialProps) => {
  const { size, animate, url } = props;

  const classes = {
    wrapper: clsx(
      `material material--${size}`,
      { "bg-identity-tint-120": props.tint === "120" },
      { "bg-identity-tint-80": props.tint === "80" },
      { "bg-identity-tint-60": props.tint === "60" },
      { "bg-identity-tint-40": props.tint === "40" },
      { "bg-identity-tint-20": props.tint === "20" },
      { material__animate: animate }
    ),
  };

  return (
    <div className="material-container">
      <a className={classes.wrapper}>
        <img
          src={url}
          alt=""
          onError={(e) => (e.currentTarget.style["display"] = "none")}
        />
      </a>
    </div>
  );
};
