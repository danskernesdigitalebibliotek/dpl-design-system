import { FC } from "react";
import ArticleHeader, {
  ArticleHeaderProps,
} from "../../Library/article-header/ArticleHeader";
import { ArticleParagraphs } from "../../Library/paragraphs/Paragraphs";

type ArticleProps = ArticleHeaderProps;

const Article: FC<ArticleProps> = ({
  title,
  subtitle,
  category,
  author,
  date,
  tags,
}) => {
  return (
    <article className="article">
      <ArticleHeader
        title={title}
        subtitle={subtitle}
        category={category}
        author={author}
        date={date}
        tags={tags}
      />
      <ArticleParagraphs />
    </article>
  );
};

export default Article;
