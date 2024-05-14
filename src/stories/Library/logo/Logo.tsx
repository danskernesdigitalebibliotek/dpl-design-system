import "../../../styles/css/base.css";
import clsx from "clsx";
import logo from "./logo.png";

export type LogoProps = {
  hasImage: boolean;
  libraryName: string;
  libraryPlace?: string;
  altText: string;
};

const Logo = ({ hasImage, libraryName, libraryPlace, altText }: LogoProps) => {
  return (
    <a href="/" className="logo" aria-label="Gå til forsiden">
      <figure className="logo__content">
        {hasImage && <img src={logo} alt={altText} />}
        <div
          className={clsx("logo__description", {
            "logo__description--has-image": hasImage,
          })}
        >
          <p className="logo__library-name">{libraryName}</p>
          {libraryPlace && <p>{libraryPlace}</p>}
        </div>
      </figure>
    </a>
  );
};

export default Logo;
