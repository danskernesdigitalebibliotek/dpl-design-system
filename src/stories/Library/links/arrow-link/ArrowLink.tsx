import clsx from "clsx";
import { ReactComponent as ArrowSmallLeft } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-left.svg";

type ArrowLinkProps = {
  label: string;
  className: string;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({ label, className }) => {
  return (
    <a
      href="/"
      className={clsx("arrow arrow__hover--left-small arrow-link", className)}
    >
      <div className="text-links arrow-link__text">{label}</div>
      <ArrowSmallLeft />
    </a>
  );
};

export default ArrowLink;
