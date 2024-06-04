export type BreadcrumbProps = {
  items: { link?: string; text: string }[];
};
export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb" role="navigation">
      {items.map((item) => {
        return item.link ? (
          <a href={item.link}>{item.text}</a>
        ) : (
          <span>{item.text}</span>
        );
      })}
    </nav>
  );
};
