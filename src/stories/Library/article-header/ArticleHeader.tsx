import { FC } from "react";
import ArrowLink from "../links/arrow-link/ArrowLink";
import { Tag } from "../tag/Tag";
import HorizontalTermLine, {
  HorizontalTermLineProps,
} from "../horizontal-term-line/HorizontalTermLine";

export type ArticleHeaderProps = {
  title: string;
  subtitle: string;
  category?: string;
  author: string;
  date: string;
  tags: string[];
};

const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  subtitle,
  category,
  author,
  date,
  tags,
}) => {
  const tagData: HorizontalTermLineProps = {
    title: "Tags",
    linkList: tags.map((tag) => {
      return { text: tag, url: "#" };
    }),
  };
  return (
    <header className="article-header">
      <ArrowLink label="Go back" className="article-header__back-link" />
      {category && (
        <div className="article-header__categories">
          <Tag size="large" hasBackground>
            {category}
          </Tag>
        </div>
      )}
      <h1 className="article-header__title">{title}</h1>
      <p className="article-header__subtitle">{subtitle}</p>
      <p className="article-header__info">
        Af
        <a href="/" className="article-header__author">
          {author}
        </a>
        <time className="article-header__date">{date}</time>
      </p>
      <div className="article-header__tags">
        <HorizontalTermLine collapsible={false} {...tagData} />
      </div>
    </header>
  );
};

export default ArticleHeader;
