import React from "react";
import clsx from "clsx";
import { PromoBarIcon, PromoBarIconType } from "./PromoBarIcon";

type PromoBarProps = {
  text: string;
  type?: PromoBarIconType;
  sticky?: boolean;
  theme?: "none" | "dark";
};

const PromoBar: React.FunctionComponent<PromoBarProps> = ({
  type,
  text,
  sticky,
  theme,
}) => {
  return (
    <section
      className={clsx("promo-bar px-35", {
        "promo-bar--sticky": sticky,
        "promo-bar--dark": theme === "dark",
      })}
    >
      {type && <PromoBarIcon type={type} />}
      <p className="text-small-caption">{text}</p>
    </section>
  );
};

export default PromoBar;
