import { ReactComponent as InfoIcon } from "../../../public/icons/basic/icon-info.svg";

export type PromoBarIconType = "none" | "info";

export type PromoBarIconProps = {
  type: PromoBarIconType;
};

export const PromoBarIcon: React.FunctionComponent<PromoBarIconProps> = ({
  type,
}) => {
  if (type === "info") {
    return <InfoIcon />;
  }
  return null;
};
