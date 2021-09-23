import React from "react";

type LinksProps = {
  href: string;
  linkText: string;
};

export const Links = (props: LinksProps) => {
  const { href, linkText } = props;

  return (
    <a href={href} className="link-tag">
      {linkText}
    </a>
  );
};
