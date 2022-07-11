import { Links } from "../links/Links";

export type LinkFilter = {
  title: string;
  href?: string;
  counter: string;
};

export type LinkFiltersProps = {
  filters: Array<LinkFilter>;
};

export const LinkFilters: React.FC<LinkFiltersProps> = ({ filters }) => {
  return (
    <div className="link-filters">
      {filters.map((item, index) => (
        <div key={index} className="link-filters__tag-wrapper">
          {item.href ? (
            <Links
              href={item.href}
              linkText={item.title}
              classNames="link-tag link-filters__tag"
            />
          ) : (
            <span className="link-filters__title text-links">{item.title}</span>
          )}

          <span className="link-filters__counter">{item.counter}</span>
        </div>
      ))}
    </div>
  );
};
