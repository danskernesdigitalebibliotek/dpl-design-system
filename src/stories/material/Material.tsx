import clsx from "clsx";

export type MaterialProps = {
  url: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large";
  tint?: "20" | "40" | "60" | "80" | "120";
  materialUrl?: string;
  materialDescription?: string;
};

export const Material = (props: MaterialProps) => {
  const { size, animate, url, tint, materialUrl, materialDescription } = props;

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

  const materialCover = url && (
    <img src={url} alt={materialDescription || ""} />
  );

  return (
    <div className="material-container">
      {/**
       * Images inside links must have an non-empty alt text to meet accessibility requirements.
       * Only render the material as a link if we have both an url and a description.
       */}
      {materialUrl && materialDescription ? (
        <a href={materialUrl} className={classes.wrapper}>
          {materialCover}
        </a>
      ) : (
        <span className={classes.wrapper}>{materialCover}</span>
      )}
    </div>
  );
};
