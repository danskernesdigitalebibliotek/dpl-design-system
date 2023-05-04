import clsx from "clsx";

export type CoverProps = {
  src: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  tint?: "20" | "40" | "80" | "100" | "120";
  coverUrl?: string;
  description?: string;
};

const Cover = (props: CoverProps) => {
  const { size, animate, src, tint, coverUrl, description } = props;

  type TintClassesType = {
    [key: string]: string;
  };
  const tintClasses: TintClassesType = {
    default: "bg-identity-tint-120",
    "120": "bg-identity-tint-120",
    "100": "bg-identity-tint-100",
    "80": "bg-identity-tint-80",
    "40": "bg-identity-tint-40",
    "20": "bg-identity-tint-20",
  };

  const classes = {
    wrapper: clsx(`cover cover--${size}`, tintClasses[tint || "default"], {
      cover__animate: animate,
    }),
  };

  const materialCover = src && <img src={src} alt={description || ""} />;

  return (
    <div className="cover-container">
      {/**
       * Images inside links must have an non-empty alt text to meet accessibility requirements.
       * Only render the cover as a link if we have both an url and a description.
       */}
      {coverUrl && description ? (
        <a href={coverUrl} className={classes.wrapper}>
          {materialCover}
        </a>
      ) : (
        <span className={classes.wrapper}>{materialCover}</span>
      )}
    </div>
  );
};

export default Cover;
