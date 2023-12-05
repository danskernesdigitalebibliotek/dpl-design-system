import clsx from "clsx";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";
import { IconType, LinkType } from "./LinkTypes";

export type LinksProps = {
  href: string;
  linkText: string;
  linkType: LinkType;
};

const linkTypeAttributes: {
  [key in LinkType]: {
    target: "_self" | "_blank";
    icon: IconType;
    folder: "basic" | "collection";
  };
} = {
  internal: { target: "_self", icon: "ArrowBack", folder: "collection" },
  external: {
    target: "_blank",
    icon: "icon-external-link",
    folder: "basic",
  },
  download: { target: "_blank", icon: "Ebook", folder: "collection" },
  search: { target: "_self", icon: "SearchBooks", folder: "collection" },
};

export const LinkWithIcon = ({ href, linkText, linkType }: LinksProps) => {
  const { target, icon, folder } = linkTypeAttributes[linkType];

  const linkIconClass = clsx({
    "link-with-icon__icon--rotate-180": linkType === "internal",
  });

  return (
    <a
      href={href}
      target={target}
      className={clsx("link-with-icon arrow__hover--right-large")}
    >
      <div className={clsx("link-with-icon__icon", linkIconClass)}>
        <img className="invert" src={`icons/${folder}/${icon}.svg`} alt="" />
      </div>
      {linkText}
      <ArrowLargeRight />
    </a>
  );
};
