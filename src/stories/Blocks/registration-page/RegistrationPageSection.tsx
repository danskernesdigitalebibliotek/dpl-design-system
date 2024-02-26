import { Links } from "../../Library/links/Links";
import { Button } from "../../Library/Buttons/button/Button";

const RegistrationPageSection = () => {
  return (
    <section className="left-aligned-page__subsection">
      <h2 className="left-aligned-page__headline">Adult registration</h2>
      <p className="left-aligned-page__subsection-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Links href="/" linkText="Go read more here" classNames="mr-16" />
      <Links href="/" linkText="Or at this webpage" classNames="mr-16" />
      <p className="left-aligned-page__subsection-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button
        buttonType="none"
        label="Register an adult here"
        size="large"
        variant="filled"
      />
    </section>
  );
};

export default RegistrationPageSection;
