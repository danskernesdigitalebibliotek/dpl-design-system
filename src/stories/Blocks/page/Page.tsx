import { FC } from "react";
import Paragraph from "../../Library/paragraph/Paragraph";
import HorizontalTermLine, {
  HorizontalTermLineProps,
} from "../../Library/horizontal-term-line/HorizontalTermLine";

import {
  Page as Hero,
  PageArgs as HeroArgs,
} from "../../Library/hero/Hero.stories";

type PageProps = {
  tags?: string[];
};

const Page: FC<PageProps> = ({ tags }) => {
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
        <Paragraph modifier="hero">
          <Hero {...HeroArgs} />
        </Paragraph>
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
