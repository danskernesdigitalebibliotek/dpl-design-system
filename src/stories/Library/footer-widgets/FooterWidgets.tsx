import { footerLanguages } from "../../Blocks/footer/footer-content";
import { Dropdown } from "../dropdown/Dropdown";
import Logo from "../logo/Logo";

const FooterWidgets = () => {
  return (
    <div className="footer-widgets">
      <Dropdown
        list={footerLanguages}
        ariaLabel="dropdown"
        arrowIcon="triangles"
      />
      <Logo fallback={false} libraryName="" altText="logo" />
    </div>
  );
};

export default FooterWidgets;
