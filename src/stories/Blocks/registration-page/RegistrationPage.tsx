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
    <article className="article">
      <header className="article-header">
        <h1 className="article-header__title">{headline}</h1>
        <p className="article-header__subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </header>

      <section className="paragraphs">
        <div className="paragraphs__item paragraphs__item--language_selector">
          <IconTextLink
            link="/"
            text="Read in English"
            icon="england"
            classNames="paragraphs__item--language_selector__link"
          />
        </div>
        <div className="paragraphs__item paragraphs__item--user_registration_section">
          {!singleSection && (
            <div className="paragraphs-item paragraphs__item--user_registration_section__button_row">
              <p>Make a profile for:</p>
              <Links
                href="#the-anchor"
                linkText="Adult"
                classNames="paragraphs__item--user_registration_section__button"
              />
              <Links
                href="#the-anchor2"
                linkText="Under age of 18"
                classNames="paragraphs__item--user_registration_section__button"
              />
            </div>
          )}
          <RegistrationPageSection />
          {!singleSection && (
            <>
              <RegistrationPageSection /> <RegistrationPageSection />
            </>
          )}
        </div>
      </section>
    </article>
  );
};

export default RegistrationPage;
