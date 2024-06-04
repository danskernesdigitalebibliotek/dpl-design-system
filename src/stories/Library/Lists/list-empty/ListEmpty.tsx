import { Links, LinksProps } from "../../links/Links";

interface ListEmptyProps {
  text: string;
  links?: LinksProps[];
  className: string;
}

const ListEmpty = ({ text, links, className }: ListEmptyProps) => {
  return (
    <div className={`dpl-list-empty ${className ?? ""}`}>
      <p>{text}</p>
      {links && (
        <div className="dpl-list-empty__links">
          {links.map((item, index) => (
            <div key={index} className="dpl-list-empty__link-item">
              <Links
                linkText={item.linkText}
                href={item.href}
                classNames={item.classNames}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListEmpty;
