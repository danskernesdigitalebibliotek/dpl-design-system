import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export type SimpleLinkProps = {
  linkText: string;
  href: string;
  target: "_blank" | "_self";
};

const SimpleLink = ({ linkText, href, target = "_self" }: SimpleLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className="simple-link arrow__hover--right-small"
    >
      {linkText}
      <ArrowSmallRight />
    </a>
  );
};
export default SimpleLink;
