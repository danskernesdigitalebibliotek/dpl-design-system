import { FC } from "react";
import Hero, { HeroProps } from "../../Library/Heros/hero/Hero";
import Paragraph from "../../Library/paragraph/Paragraph";

type PageProps = {
  hero?: HeroProps;
};

const Page: FC<PageProps> = ({ hero }) => {
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
    </article>
  );
};

export default Page;
