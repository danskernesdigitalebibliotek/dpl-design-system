import clsx from "clsx";

export type CoverProps = {
  url: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  tint?: "20" | "40" | "60" | "80" | "120";
  coverUrl?: string;
  coverDescription?: string;
};

export const Cover = (props: CoverProps) => {
  const { size, animate, url, tint, coverUrl, coverDescription } = props;

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
    wrapper: clsx(`cover cover--${size}`, tintClasses[tint || "default"], {
      cover__animate: animate,
    }),
  };

  const materialCover = url && <img src={url} alt={coverDescription || ""} />;

  return (
    <div className="cover-container">
      {/**
       * Images inside links must have an non-empty alt text to meet accessibility requirements.
       * Only render the cover as a link if we have both an url and a description.
       */}
      {coverUrl && coverDescription ? (
        <a href={coverUrl} className={classes.wrapper}>
          {materialCover}
        </a>
      ) : (
        <span className={classes.wrapper}>{materialCover}</span>
      )}
    </div>
  );
};
