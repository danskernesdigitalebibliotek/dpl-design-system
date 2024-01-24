import { FC } from "react";
import ArticleHeader from "../../Library/article-header/ArticleHeader";
import { ArticleParagraphs } from "../../Library/paragraphs/Paragraphs";

type ArticleProps = {
  title: string;
  subtitle: string;
  tag: string;
  author: string;
  date: string;
};

const Article: FC<ArticleProps> = ({ title, subtitle, tag, author, date }) => {
  return (
    <article className="article">
      <ArticleHeader
        title={title}
        subtitle={subtitle}
        tag={tag}
        author={author}
        date={date}
      />
      <ArticleParagraphs />
    </article>
  );
};

export default Article;
