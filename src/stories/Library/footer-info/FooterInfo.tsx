import { FC } from "react";

export type FooterSocialMediaType = {
  href: string;
  alt: string;
  icon: string;
};

export type FooterInfoLinksType = {
  href: string;
  label: string;
};

type FooterInfoType = {
  footerInfoLinks: FooterInfoLinksType[];
  footerSocialMedia: FooterSocialMediaType[];
};

const FooterInfo: FC<FooterInfoType> = ({
  footerInfoLinks,
  footerSocialMedia,
}) => {
  return (
    <div className="footer-info">
      <ul className="footer-info__links">
        {footerInfoLinks.map(({ href, label }, i) => (
          <li key={i}>
            <a href={href} className="footer-info__link">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="footer-info__icons">
        {footerSocialMedia.map(({ href, alt, icon }, i) => (
          <li key={i}>
            <a href={href} className="footer-info__icon">
              <img src={icon} alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
