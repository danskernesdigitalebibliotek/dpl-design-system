import { useEffect } from "react";
import { ReactComponent as CloseSidebarIcon } from "../Icons/icon-close-large/icon-close-large.svg";
import { MenuItemsProps } from "../header-menu-list/HeaderMenuListData";
import MenuItemList from "../header-menu-list/HeaderMenuList";

export type HeaderSidebarNavProps = {
  menuLinks: MenuItemsProps[];
  menuOpen?: "open" | "closed";
  isStorybookContext?: boolean;
};

const HeaderSidebarNav: React.FC<HeaderSidebarNavProps> = ({
  menuLinks,
  menuOpen = "closed",
  isStorybookContext = false,
}) => {
  useEffect(() => {
    /* eslint-disable-next-line global-require */
    require("./header-sidebar-nav-js");
  }, []);

  return (
    <div
      className="header-sidebar-nav"
      data-open={menuOpen}
      // The sidebar normally isn't displayed on larger screens (otherwise it's
      // accessible using keyboard on desktop), but we want to show it in Storybook.
      style={isStorybookContext ? { display: "block" } : undefined}
    >
      <div className="header-sidebar-nav__background-wrapper">
        <div className="header-sidebar-nav__menu-wrapper">
          <div
            className="header-sidebar-nav__close-menu-button"
            id="js-header-sidebar-nav__close-menu-button"
            tabIndex={0}
            role="button"
            aria-label="Close menu"
          >
            <CloseSidebarIcon aria-hidden="true" />
          </div>
          <nav aria-label="Sidebar site navigation">
            <MenuItemList menuItems={menuLinks} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebarNav;
