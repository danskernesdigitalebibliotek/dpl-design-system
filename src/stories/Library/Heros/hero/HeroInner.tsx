import React from "react";
import Tag from "../../tag/Tag";
import { ReactComponent as ArrowLargeRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";
import ListDescription, {
  ListData,
} from "../../Lists/list-description/ListDescription";

export type HeroInnerProps = {
  contentType?: string;
  date?: string;
  title: string;
  description?: string;
  descriptionItems?: ListData;
  cta?: string;
  tag?: string;
  arrow?: boolean;
  price?: React.ReactNode;
};

const HeroInner: React.FunctionComponent<HeroInnerProps> = ({
  contentType,
  date,
  title,
  description,
  descriptionItems,
  cta,
  tag,
  arrow,
  price,
}) => {
  return (
    <div className="hero__inner">
      {tag && (
        <div className="hero__tag">
          <Tag hasBackground size="large">
            {tag}
          </Tag>
        </div>
      )}

      <div className="hero__details">
        {contentType && (
          <span className="hero__details__type">{contentType}</span>
        )}
        {contentType && date && "|"}
        <time className="hero__details__date">{date}</time>
      </div>
      <h1 className="hero__title">{title}</h1>
      {price && <div className="hero__price">{price}</div>}
      {description && (
        <div className="hero__description">
          <p>{description} </p>

          {arrow && (
            <div>
              <ArrowLargeRight />
            </div>
          )}
        </div>
      )}
      {cta && (
        <div className="hero__cta">
          <a href="/" className="btn-primary btn-filled btn-large">
            {cta}
          </a>
        </div>
      )}

      {descriptionItems && (
        <ListDescription
          className="list-description--hero"
          data={descriptionItems}
        />
      )}
    </div>
  );
};

export default HeroInner;
