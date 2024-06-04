import { AvailabilityStatusType } from "../../availability-label/types";
import { ButtonSize } from "../Buttons/button/types";

export type PageFoldType = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: ButtonSize;
  type?: "success" | "alert";
  className?: string;
  status?: AvailabilityStatusType;
};
