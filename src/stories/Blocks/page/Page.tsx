import { FC } from "react";
import Hero, { HeroProps } from "../../Library/hero/Hero";

type PageProps = {
  hero?: HeroProps;
};

const Page: FC<PageProps> = ({ hero }) => {
  return (
    <article>
      {hero && (
        <Hero
          image={hero.image}
          type={hero.type}
          date={hero.date}
          title={hero.title}
          description={hero.description}
        />
      )}
    </article>
  );
};

export default Page;
