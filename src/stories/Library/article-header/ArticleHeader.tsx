import { FC } from "react";
import RowButtons from "../Buttons/row-button/RowButtons";
import ArrowLink from "../links/arrow-link/ArrowLink";
import { Tag } from "../tag/Tag";

type ArticleHeaderProps = {
  title: string;
  subtitle: string;
  tag?: string;
  author: string;
  date: string;
};

const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  subtitle,
  tag,
  author,
  date,
}) => {
  return (
    <header className="article-header">
      <ArrowLink label="Go back" className="article-header__back-link" />
      {tag && (
        <div className="article-header__tags">
          <Tag size="large" hasBackground>
            {tag}
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
      <RowButtons labels={["Netmedier", "Licenser", "This is hiddden"]} />
    </header>
  );
};

export default ArticleHeader;
