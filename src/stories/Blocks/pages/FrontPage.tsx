import { FC } from "react";
import Hero, { HeroProps } from "../../Library/hero/Hero";

type FrontPageProps = HeroProps;

const FrontPage: FC<FrontPageProps> = ({
  image,
  type,
  date,
  title,
  description,
}) => {
  return (
    <section>
      <Hero
        image={image}
        type={type}
        date={date}
        title={title}
        description={description}
      />
    </section>
  );
};

export default FrontPage;
