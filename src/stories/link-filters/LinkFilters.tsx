import { Links } from "../links/Links";

export type LinkFilter = {
  title: string;
  href?: string;
  counter: string;
};

export type LinkFiltersProps = {
  filters: Array<LinkFilter>;
};

export const LinkFilters = (props: LinkFiltersProps) => {
  return (
    <div className="link-filters-container">
      {props.filters.map((item, index) => (
        <div key={index} className="link-filters-tag-wrapper">
          {item.href ? (
            <Links
              href={item.href}
              linkText={item.title}
              classNames="link-filters-tag"
            />
          ) : (
            <span className="text-links uppercase">{item.title}</span>
          )}

          <span className="link-filters-counter">{item.counter}</span>
        </div>
      ))}
    </div>
  );
};
