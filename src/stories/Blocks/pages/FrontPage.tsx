import { FC } from "react";
import Hero, { HeroProps } from "../../Library/hero/Hero";

type FrontPageProps = HeroProps;

const FrontPage: FC<FrontPageProps> = ({ image, date, title, description }) => {
  return (
    <section>
      <Hero image={image} date={date} title={title} description={description} />
    </section>
  );
};

export default FrontPage;
