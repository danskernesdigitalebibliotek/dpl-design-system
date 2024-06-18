type Sizes = "xsmall" | "small" | "medium" | "large" | "xlarge";
type DisplaySizes = "2xsmall" | Sizes;

export type CoverProps = {
  src: string;
  animate: boolean;
  size: Sizes;
  displaySize?: DisplaySizes;
  tint?: "20" | "40" | "80" | "100" | "120";
  coverUrl?: string;
  alt?: string;
  shadow?: "small" | "medium";
  ariaLabel?: string;
};
