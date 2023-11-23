import { FC } from "react";
import RowButtons from "../Buttons/row-button/RowButtons";
import ArrowLink from "../links/arrow-link/ArrowLink";

type ArticleHeaderProps = {
  title: string;
  subtitle: string;
  library: string;
  author: string;
  date: string;
};

const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  subtitle,
  library,
  author,
  date,
}) => {
  return (
    <header className="article-header">
      <ArrowLink label="Go back" className="article-header__back-link" />
      <h1 className="text-header-h1 article-header__title">{title}</h1>
      <p className="text-subtitle article-header__subtitle">{subtitle}</p>
      <p className="article-header__info text-body-small-regular">
        <span>{library}</span>
        <a href="/">
          <span className="link-tag text-body-small-regular">{author}</span>
        </a>
        <span className="article-header__date">{date}</span>
      </p>
      <RowButtons labels={["Netmedier", "Licenser", "This is hiddden"]} />
    </header>
  );
};

export default ArticleHeader;
