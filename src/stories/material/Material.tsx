import clsx from "clsx";

export type MaterialProps = {
  url: string;
  animate: boolean;
  size: "small" | "medium" | "large";
  tint?: "20" | "40" | "60" | "80" | "120";
};

export const Material = (props: MaterialProps) => {
  const { size, animate, url, tint } = props;

  type TintClassesType = {
    [key: string]: string;
  };
  const tintClasses: TintClassesType = {
    default: "bg-identity-tint-120",
    "120": "bg-identity-tint-120",
    "80": "bg-identity-tint-80",
    "60": "bg-identity-tint-60",
    "40": "bg-identity-tint-40",
    "20": "bg-identity-tint-20",
  };

  const classes = {
    wrapper: clsx(
      `material material--${size}`,
      tintClasses[tint || "default"],
      {
        material__animate: animate,
      }
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
