import { Links, LinksProps } from "../../links/Links";

interface ListEmptyProps {
  text: string;
  links?: LinksProps[];
}

const ListEmpty = ({ text, links }: ListEmptyProps) => {
  return (
    <div className="dpl-list-empty">
      {text}
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
