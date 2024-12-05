import { ReactComponent as LinkSvg } from "../../../../public/icons/collection/Link.svg";
import { ReactComponent as FacebookSvg } from "../../../../public/icons/social/icon-social-facebook.svg";

export type ButtonShareProps = {
  href: string;
  textFacebook: string;
  textCopy: string;
};

export const ButtonShare = ({
  href,
  textFacebook,
  textCopy,
}: ButtonShareProps) => {
  return (
    <div className="button-share">
      <div className="button-share button-share--fixed">
        <a
          href={href}
          aria-label="Del denne side på Facebook"
          className="button-share__button button-share__button--fixed"
        >
          <FacebookSvg role="img" aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(href)}
          aria-label="Kopier denne side til udklipsholderen"
          className="button-share__button button-share__button--fixed"
        >
          <LinkSvg role="img" aria-hidden="true" />
        </button>
      </div>
      <a
        href={href}
        aria-label="Del denne side på Facebook"
        className="button-share__button"
      >
        <FacebookSvg role="img" aria-hidden="true" />
        {textFacebook}
      </a>
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(href)}
        aria-label="Kopier denne side til udklipsholderen"
        className="button-share__button"
      >
        <LinkSvg role="img" aria-hidden="true" />
        {textCopy}
      </button>
    </div>
  );
};
