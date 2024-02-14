import { useEffect, useState } from "react";
import { Logo } from "../../Library/logo/Logo";
import Pagefold from "../../Library/pagefold/Pagefold";
import { ReactComponent as SearchIcon } from "../../../public/icons/basic/icon-search.svg";
import { ReactComponent as ExpandMoreIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { ReactComponent as MenuIcon } from "../../../public/icons/basic/icon-menu.svg";
import { ReactComponent as ProfileIcon } from "../../../public/icons/basic/icon-profile.svg";
import { ReactComponent as HeartIcon } from "../../../public/icons/basic/icon-heart.svg";
import { ReactComponent as WatchStaticIcon } from "../../../public/icons/basic/icon-watch-static.svg";
import { ReactComponent as CrossIcon } from "../../../public/icons/basic/icon-cross-medium.svg";

export type HeaderProps = {
  signedIn: boolean;
  haveNotification: boolean;
  username: string;
  inputPlaceholder: string;
  openDropdown: boolean;
};

const list = [
  {
    title: "Det sker",
    href: "/",
  },
  {
    title: "Biblioteker & åbningstider",
    href: "/",
  },
  {
    title: "Digitale tilbud",
    href: "/",
  },
  {
    title: "Litteratur",
    href: "/",
  },
  {
    title: "Børn & forældre",
    href: "/",
  },
];

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
    require("./header-toggle");
    require("./header-sticky");
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo-desktop">
          <a
            className="header__logo-desktop-link"
            href="/"
            aria-label="PromoTitle image of libary"
          >
            <Logo
              fallback={false}
              libraryName="Hjørring"
              altText="PromoTitle image of libary"
            />
          </a>
        </div>

        <div className="header__menu">
          <nav className="header__menu-first">
            <div>
              <div className="header__menu-navigation-mobile">
                <Pagefold
                  isInheriting={false}
                  isAContainer={false}
                  size="small"
                  className="header__menu-navigation-button header__button"
                  compProps={{
                    id: "header__menu--open",
                    onClick: () => window.eventHeader(),
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
              <ul className="header__menu-navigation">
                {list.map((i) => (
                  <li className="header__menu-navigation-item">
                    <a
                      href={i.href}
                      className="header__menu-navigation-link text-body-medium-regular hide-linkstyle"
                    >
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="header__menu-profile header__button btn-ui"
              type="button"
              aria-label="Open user menu"
            >
              {signedIn && haveNotification && (
                <div className="header__notification bg-signal-alert" />
              )}
              <ProfileIcon />
              {signedIn && (
                <span className="text-small-caption">{username}</span>
              )}
            </button>
            <div className="header__menu-bookmarked header__button">
              <a href="/" aria-label="go to your favorites list">
                <HeartIcon />
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
          <div className="header__clock-items">
            <WatchStaticIcon className="mb-8" />
            <span className="text-small-caption">Fredag</span>
            <span className="text-small-caption">28 Maj</span>
          </div>
        </div>
      </header>
      <div id="header__overlay" onClick={() => window.eventHeader()}>
        <div className="header__overlay-main">
          <CrossIcon id="header__menu--close" />
          <ul className="header__overlay-menu">
            {list.map((i) => (
              <li className="header__overlay-menu-item">
                <a
                  href={i.href}
                  className="header__overlay-menu-link text-body-large hide-linkstyle"
                >
                  {i.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__overlay-backdrop" />
      </div>
    </>
  );
};

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
