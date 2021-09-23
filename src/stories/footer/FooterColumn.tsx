import React from "react";
import { Links } from "../links/Links";

type FooterColumnProps = {
  title: string;
  links: string[];
};

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="footer-column">
      <h4 className="text-header-h4">{title}</h4>
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
