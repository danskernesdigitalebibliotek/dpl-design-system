export type PromoBarIconType = "none" | "info";

export type PromoBarIconProps = {
  type: PromoBarIconType;
};

export const PromoBarIcon: React.FunctionComponent<PromoBarIconProps> = ({
  type,
}) => {
  if (type === "info") {
    return <img src="icons/basic/icon-info.svg" alt="" />;
  }
  return null;
};
