import { FC } from "react";
import Pagefold from "../../Library/pagefold/Pagefold";
import { DropdownItem } from "../../Library/dropdown/Dropdown";
import FooterAccordions from "../../Library/footer-accordions/FooterAccordions";
import FooterColumns from "../../Library/footer-colums/FooterColumns";
import FooterInfo, {
  FooterInfoLinksType,
  FooterSocialMediaType,
} from "../../Library/footer-info/FooterInfo";
import FooterSeparator from "../../Library/footer-separator/FooterSeparator";
import FooterWidgets from "../../Library/footer-widgets/FooterWidgets";
import { FooterColumnType } from "../../Library/footer-colums/FooterColumn";

export type FooterType = {
  footerContent: FooterColumnType[];
  footerLanguages: DropdownItem[];
  footerSocialMedia: FooterSocialMediaType[];
  footerInfoLinks: FooterInfoLinksType[];
};

const Footer: FC<FooterType> = ({
  footerContent,
  footerLanguages,
  footerSocialMedia,
  footerInfoLinks,
}) => {
  return (
    <footer className="footer">
      <h2 className="hide-visually">Globale links</h2>
      {/* Footer mobile */}
      <Pagefold
        className="footer__mobile"
        isInheriting
        isAContainer
        size="small"
      >
        <FooterAccordions footerContent={footerContent} />
        <FooterWidgets footerLanguages={footerLanguages} />
        <FooterSeparator />
        <FooterInfo
          footerSocialMedia={footerSocialMedia}
          footerInfoLinks={footerInfoLinks}
        />
      </Pagefold>

      {/* Footer tablet/desktop */}
      <Pagefold
        className="footer__desktop"
        isInheriting
        isAContainer
        size="medium"
      >
        <FooterColumns footerContent={footerContent} />
        <FooterWidgets footerLanguages={footerLanguages} />
        <FooterSeparator />
        <FooterInfo
          footerSocialMedia={footerSocialMedia}
          footerInfoLinks={footerInfoLinks}
        />
      </Pagefold>
    </footer>
  );
};

export default Footer;
