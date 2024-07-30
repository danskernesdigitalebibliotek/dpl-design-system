import { useEffect, useState } from "react";
import clsx from "clsx";
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

export const Header = ({
  signedIn,
  haveNotification,
  username,
  inputPlaceholder,
  openDropdown,
}: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(openDropdown);

  useEffect(() => {
    require("./header-sticky");
    require("./header-state");
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo-desktop">
          <Logo
            hasImage
            libraryName="Hjørring"
            libraryPlace="Bibliotekerne"
            altText="PromoTitle image of library"
          />
        </div>

        <div className="header__menu">
          <nav
            className="header__menu-first"
            aria-label="Primary site navigation"
          >
            <div>
              <div className="header__menu-navigation-mobile">
                <button
                  id="header-sidebar-nav__toggle"
                  className="header__button header__button--right-border"
                  aria-controls="sidebarNav"
                  aria-expanded="false"
                >
                  <Pagefold
                    isInheriting={false}
                    isAContainer={false}
                    size="small"
                    className="header__menu-navigation-pagefold"
                  >
                    <MenuIcon />
                  </Pagefold>
                </button>
                <div className="header__menu-navigation-logo">
                  <Logo
                    hasImage
                    libraryName="Lyngby-Taarbæk"
                    libraryPlace="Bibliotekerne"
                    altText="PromoTitle image of library"
                  />
                </div>
              </div>
              <MenuItemList menuItems={menuItems} />
            </div>
            <button className="header__button header__button--left-border btn-ui">
              {signedIn && haveNotification && (
                <div className="header__button-notification bg-signal-alert" />
              )}
              <ProfileIcon
                className="header__button-icon"
                aria-label="go to user profile"
              />
              <span className="header__button-text">
                {signedIn ? username : "Login"}
              </span>
            </button>
            <div className="header__button-responsive-switch">
              <a
                href="/"
                className="header__button header__button--left-border"
              >
                <WatchStaticIcon
                  className="header__button-icon"
                  aria-label="go to opening hours"
                />
                <span className="header__button-text">Opening hours</span>
              </a>
              <a
                href="/"
                className="header__button header__button--left-border"
              >
                <HeartIcon
                  className="header__button-icon"
                  aria-label="go to favorites list"
                />
                <span className="header__button-text">Liked</span>
              </a>
            </div>
          </nav>
          <div className="header__menu-second">
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
                className={clsx("header__menu-dropdown-icon", {
                  "header__menu-dropdown-icon--expanded": isDropdownOpen,
                })}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="header__menu-dropdown">
                  <ul>
                    <li>
                      <a
                        className="header__menu-dropdown-item hide-linkstyle"
                        href="/advanced-search"
                      >
                        Avanceret søgning
                      </a>
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
