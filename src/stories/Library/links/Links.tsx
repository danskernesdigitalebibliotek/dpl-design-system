import clsx from "clsx";

export type LinksProps = {
  href: string;
  linkText: string;
  classNames?: string;
  target?: string;
  excludeLinkTagClass?: boolean;
};

export const Links = ({
  href,
  linkText,
  classNames,
  target,
  excludeLinkTagClass = false,
}: LinksProps) => {
  const classes = clsx(
    {
      "link-tag": !excludeLinkTagClass,
    },
    classNames
  );
  return (
    <a {...(target ? { target } : {})} href={href} className={classes}>
      {linkText}
    </a>
  );
};
