import { useEffect, useState } from "react";
import Logo from "../../Library/logo/Logo";
import MenuItemList from "../../Library/header-menu-list/HeaderMenuList";
import { menuItems } from "../../Library/header-menu-list/HeaderMenuListData";
import { ReactComponent as SearchIcon } from "../../../public/icons/basic/icon-search.svg";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as MenuIcon } from "../../../public/icons/basic/icon-menu.svg";
import { ReactComponent as ProfileIcon } from "../../../public/icons/basic/icon-profile.svg";
import { ReactComponent as HeartIcon } from "../../../public/icons/basic/icon-heart.svg";
import { ReactComponent as WatchStaticIcon } from "../../../public/icons/basic/icon-watch-static.svg";
import Pagefold from "../../Library/pagefold/Pagefold";
import HeaderSidebarNav from "../../Library/header-sidebar-nav/header-sidebar-nav";

export type HeaderProps = {
  signedIn: boolean;
  haveNotification: boolean;
  username: string;
  inputPlaceholder: string;
  openDropdown: boolean;
};

export const Header = (props: HeaderProps) => {
  const {
    signedIn,
    haveNotification,
    username,
    inputPlaceholder,
    openDropdown,
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(openDropdown);

  useEffect(() => {
    require("./header-sticky");
    require("./header-state");
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo-desktop">
          <a className="header__logo-desktop-link" href="/">
            <Logo
              fallback={false}
              libraryName="Hjørring"
              altText="PromoTitle image of libary"
            />
          </a>
        </div>

        <div className="header__menu">
          <nav
            className="header__menu-first"
            aria-label="Primary site navigation"
          >
            <div>
              <div className="header__menu-navigation-mobile">
                <Pagefold
                  isInheriting={false}
                  isAContainer={false}
                  size="small"
                  className="header__menu-navigation-button header__button"
                  compProps={{
                    id: "header-sidebar-nav__toggle",
                    "aria-controls": "sidebarNav",
                    "aria-expanded": "false",
                    role: "button",
                    tabIndex: 0,
                  }}
                >
                  <MenuIcon />
                </Pagefold>
                <div className="header__menu-navigation-logo">
                  <Logo
                    fallback
                    libraryName="Lyngby-Taarbæk"
                    altText="PromoTitle image of libary"
                  />
                </div>
              </div>
              <MenuItemList menuItems={menuItems} />
            </div>
            <div className="header__menu-profile header__button">
              <a href="/" className="hide-linkstyle">
                {signedIn && haveNotification && (
                  <div className="header__notification bg-signal-alert" />
                )}
                <ProfileIcon aria-label="go to user profile" />
                {signedIn && (
                  <span className="text-small-caption">{username}</span>
                )}
              </a>
            </div>
            <div className="header__menu-bookmarked header__button">
              <a href="/">
                <HeartIcon aria-label="go to favorites list" />
              </a>
            </div>
          </nav>
          <div>
            <div className="header__menu-search">
              <form className="header__menu-search-form">
                <input
                  className="header__menu-search-input text-body-medium-regular"
                  type="text"
                  placeholder={inputPlaceholder}
                />
                <SearchIcon className="header__menu-search-icon" />
              </form>
              <ExpandMoreIcon
                className="header__menu-dropdown-icon"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="header__menu-dropdown">
                  <ul>
                    <li className="header__menu-dropdown-item">
                      Avanceret søgning
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="header__clock">
          <Pagefold isInheriting={false} isAContainer={false} size="medium" />
          <a href="#" className="header__clock-items">
            <WatchStaticIcon className="mb-8" />
            <span className="text-small-caption">Opening hours</span>
          </a>
        </div>
      </header>
      <HeaderSidebarNav menuLinks={menuItems} />
    </>
  );
};
