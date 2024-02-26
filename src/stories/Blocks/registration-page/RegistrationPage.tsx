import IconTextLink from "../../Library/icon-text-link/IconTextLink";
import { Links } from "../../Library/links/Links";
import RegistrationPageSection from "./RegistrationPageSection";

export interface RegistrationPageProps {
  headline: string;
  singleSection?: boolean;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  headline,
  singleSection = false,
}) => {
  return (
    <div className="left-aligned-page">
      <h1 className="left-aligned-page__title">{headline}</h1>
      <p className="left-aligned-page__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="left-aligned-page__switch-languages">
        <IconTextLink
          link="/"
          text="Read in English"
          icon="england"
          classNames="left-aligned-page__switch-language"
        />
        <IconTextLink
          link="/"
          text="Læs på dansk"
          icon="denmark"
          classNames="left-aligned-page__switch-language"
        />
      </div>
      {!singleSection && (
        <>
          <p className="left-aligned-page__quick-links">Make a profile for:</p>
          <Links
            href="/"
            linkText="Adult"
            classNames="left-aligned-page__quick-link"
          />
          <Links
            href="/"
            linkText="Under age of 18"
            classNames="left-aligned-page__quick-link"
          />
          <Links
            href="/"
            linkText="Companies"
            classNames="left-aligned-page__quick-link"
          />
        </>
      )}
      <RegistrationPageSection />
      {!singleSection && (
        <>
          <RegistrationPageSection /> <RegistrationPageSection />
        </>
      )}
    </div>
  );
};

export default RegistrationPage;
