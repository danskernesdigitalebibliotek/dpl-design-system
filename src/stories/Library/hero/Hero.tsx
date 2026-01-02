import React, { ReactNode } from "react";
import clsx from "clsx";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

import Tag from "../tag/Tag";
import MediaContainer from "../media-container/MediaContainer";

export type HeroProps = {
  image?: ReactNode;
  type?: string;
  date?: string;
  title: string;
  description?: string;
  items?: Array<{ label?: string; values: Array<string> }>;
  cta?: string;
  url?: string;
  tag?: string;
  placeholderText?: string;
};

const Hero: React.FunctionComponent<HeroProps> = ({
  image,
  tag,
  date,
  type,
  title,
  description,
  items,
  cta,
  url,
  placeholderText,
}) => {
  const classes = clsx("hero", {
    "hero--no-image": !image,
  });

  const ArrowLink = url && !cta;
  const ContentWrapper = ArrowLink ? "a" : "div";
  const ContentClasses = clsx("hero__content", {
    arrow: ArrowLink,
    "arrow__hover--right-large": ArrowLink,
  });

  return (
    <div className={classes}>
      <div className="hero__image">
        <MediaContainer placeholderText={placeholderText} media={image} />
      </div>

      <ContentWrapper
        className={ContentClasses}
        {...(ArrowLink ? { href: url } : {})}
      >
        {tag && (
          <Tag hasBackground size="large">
            {tag}
          </Tag>
        )}

        {(type || date) && (
          <div className="hero__meta">
            {type && (
              <span className="hero__type">
                {type}
                {date && " | "}
              </span>
            )}
            <time className="hero__date">{date}</time>
          </div>
        )}

        <h1 className="hero__title">{title}</h1>

        {description && <div>{description}</div>}

        {items && (
          <dl className="hero__items">
            {items.map((item) => (
              <>
                <dt>{item.label}</dt>
                <dd>
                  {item.values.map((value) => (
                    <span>{value}</span>
                  ))}
                </dd>
              </>
            ))}
          </dl>
        )}

        {url && (
          <div className="hero__cta">
            {cta ? (
              <a href="/" className="btn-primary btn-filled btn-large">
                {cta}
              </a>
            ) : (
              <ArrowLargeRight />
            )}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Hero;
