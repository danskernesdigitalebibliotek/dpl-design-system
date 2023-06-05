export type PageFoldType = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  type?: "success" | "alert";
  className?: string;
  status?: "selected" | "available" | "unavailable";
};
