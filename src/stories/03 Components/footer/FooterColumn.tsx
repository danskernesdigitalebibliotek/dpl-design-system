import { Links } from "../../01 Atoms/links/Links";

type FooterColumnProps = {
  title: string;
  links: string[];
};

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="footer-column">
      <h3 className="text-header-h4">{title}</h3>
      <ul>
        {links.map((link) => (
          <li className="footer-column--link">
            <Links href={"/"} linkText={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
