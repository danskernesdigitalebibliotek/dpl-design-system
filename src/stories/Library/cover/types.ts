export type CoverProps = {
  src: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  tint?: "20" | "40" | "80" | "100" | "120";
  coverUrl?: string;
  alt?: string;
  shadow?: "small" | "medium";
  ariaLabel?: string;
};
