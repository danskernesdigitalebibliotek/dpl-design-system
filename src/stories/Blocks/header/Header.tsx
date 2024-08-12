import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../../Library/logo/Logo";
import MenuItemList from "../../Library/header-menu-list/HeaderMenuList";
import { menuItems } from "../../Library/header-menu-list/HeaderMenuListData";
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
          <Logo
            hasImage
            libraryName="Hjørring"
            libraryPlace="Bibliotekerne"
            altText="PromoTitle image of libary"
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
                  className="header__menu-navigation-button header__button"
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
                {!signedIn && <span className="text-small-caption">Login</span>}
              </a>
            </div>
            <div className="header__menu-bookmarked header__button">
              <a href="/">
                <HeartIcon aria-label="go to favorites list" />
                <span className="text-small-caption">Liked</span>
              </a>
            </div>
          </nav>
          <div>
            <div className="header__menu-search">
              <input
                className="header__menu-search-input text-body-medium-regular"
                type="text"
                placeholder={inputPlaceholder}
              />
              <input
                type="image"
                src="icons/basic/icon-search.svg"
                alt="search-button"
                className="header__menu-search-icon"
              />
              <button
                type="button"
                className={clsx("header__menu-dropdown-icon", {
                  "header__menu-dropdown-icon--expanded": isDropdownOpen,
                })}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                tabIndex={0}
                aria-label="dropdown with advanced search"
                aria-expanded={isDropdownOpen}
                aria-controls="search-header-dropdown"
              >
                <img src="icons/collection/ExpandMore.svg" alt="" />
              </button>
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
