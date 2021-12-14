import { Links } from "../links/Links";

export type LinkFiltersProps = {
  filters: Array<{
    title: string;
    href: string;
    counter: string;
  }>;
};

export const LinkFilters = (linkFilters: LinkFiltersProps) => {
  return (
    <div className="link-filters-container">
      {list.map((item) => (
        <div className="link-filters-tag-wrapper">
          <Links
            href={item.href}
            linkText={item.title}
            classNames="link-filters-tag"
          />
          <span className="link-filters-counter">{item.counter}</span>
        </div>
      ))}
    </div>
  );
};

const list = [
  {
    title: "Foredrag",
    href: "",
    counter: "24",
  },
  {
    title: "Børn",
    href: "",
    counter: "16",
  },
  {
    title: "Kunst og kreativitet",
    href: "",
    counter: "7",
  },
  {
    title: "Bøger til din ferie",
    href: "",
    counter: "48",
  },
  {
    title: "Læs dig gennem danmark",
    href: "",
    counter: "14",
  },
];
