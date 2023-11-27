import clsx from "clsx";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconTypes, LinkTypes } from "./LinkTypes";

export type LinksProps = {
  href: string;
  linkText: string;
  linkType: LinkTypes;
};

const linkTypeAttributes: {
  [key in LinkTypes]: {
    target: "_self" | "_blank";
    icon: IconTypes;
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
    "rotate-180": linkType === "internal",
  });

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={clsx(
        "link-with-icon text-body-medium-regular arrow__hover--right-small"
      )}
    >
      <div className={clsx("link-icon bg-identity-primary", linkIconClass)}>
        <img className="invert" src={`icons/${folder}/${icon}.svg`} alt="" />
      </div>
      {linkText}
      <ArrowSmallRight />
    </a>
  );
};
