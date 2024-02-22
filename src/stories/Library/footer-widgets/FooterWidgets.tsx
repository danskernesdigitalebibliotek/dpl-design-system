import { FC } from "react";
import { Dropdown, DropdownItem } from "../dropdown/Dropdown";
import Logo from "../logo/Logo";

type FooterWidgetsType = {
  footerLanguages: DropdownItem[];
};

const FooterWidgets: FC<FooterWidgetsType> = ({ footerLanguages }) => {
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
