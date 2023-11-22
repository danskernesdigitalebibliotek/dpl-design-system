import { FC } from "react";
import ArticleHeader from "../../Library/article-header/ArticleHeader";

type ArticleProps = {
  title: string;
  subtitle: string;
  library: string;
  author: string;
  date: string;
};

const Article: FC<ArticleProps> = ({
  title,
  subtitle,
  library,
  author,
  date,
}) => {
  return (
    <article className="article">
      <ArticleHeader
        title={title}
        subtitle={subtitle}
        author={author}
        library={library}
        date={date}
      />
    </article>
  );
};

export default Article;
