import { Links } from "../../Library/links/Links";

const RegistrationPageSection = () => {
  return (
    <div
      id="the-anchor"
      className="rich-text paragraphs__item--user_registration_section__body"
    >
      <h2 className="paragraphs__item--user_registration_section__title">
        Adult registration
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        <a href="/">Go read more here</a> <a href="/">Or at this webpage</a>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Links
        href="/"
        linkText="Register an adult here"
        classNames="paragraphs__item--user_registration_section__link btn-primary btn-filled btn-large"
      />
    </div>
  );
};

export default RegistrationPageSection;
