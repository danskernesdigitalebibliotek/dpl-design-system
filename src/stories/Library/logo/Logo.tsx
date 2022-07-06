import "../../../styles/css/base.css";
import logo from "./logo.png";

type LogoProps = {
  fallback: boolean;
  libraryName: string;
  altText: string;
};

export const Logo = (props: LogoProps) => {
  const { fallback, libraryName, altText } = props;

  return fallback ? (
    <div className="logo-fallback">
      <p className="logo-fallback__text-name">{libraryName}</p>
      <p className="logo-fallback__text-libraries">Bibliotekerne</p>
    </div>
  ) : (
    <div>
      <img className="logo" src={logo} alt={altText} />
    </div>
  );
};

export default Logo;
