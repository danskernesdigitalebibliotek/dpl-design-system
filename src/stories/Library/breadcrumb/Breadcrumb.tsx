import { IconArrow } from "../Arrows/icon-arrow-ui/ArrowUI";

export type BreadcrumbProps = {
  text: string;
};
export const Breadcrumb = ({ text }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <IconArrow size="small" direction="left" hover>
        <a href="/" className="arrow__link" aria-label="Arrow link">
          <p className="text-links">{text}</p>
        </a>
      </IconArrow>
    </div>
  );
};
