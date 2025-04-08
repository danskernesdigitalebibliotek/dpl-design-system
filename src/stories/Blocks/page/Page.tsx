import { FC } from "react";
import Hero, { HeroProps } from "../../Library/Heros/hero/Hero";
import Paragraph from "../../Library/paragraph/Paragraph";
import HorizontalTermLine, {
  HorizontalTermLineProps,
} from "../../Library/horizontal-term-line/HorizontalTermLine";

type PageProps = {
  hero?: HeroProps;
  tags?: string[];
};

const Page: FC<PageProps> = ({ hero, tags }) => {
  const tagData: HorizontalTermLineProps | null = tags?.length
    ? {
        title: "Tags",
        linkList: tags.map((tag) => ({
          text: tag,
          url: "#",
        })),
      }
    : null;

  return (
    <article>
      <section className="paragraphs">
        {hero && (
          <Paragraph modifier="hero">
            <Hero
              image={hero.image}
              placeholderText={hero.placeholderText}
              contentType={hero.contentType}
              date={hero.date}
              title={hero.title}
              description={hero.description}
              descriptionItems={hero.descriptionItems}
            />
          </Paragraph>
        )}
      </section>

      {tagData && (
        <div className="page__tags">
          <HorizontalTermLine collapsible={false} {...tagData} />
        </div>
      )}
    </article>
  );
};

export default Page;
