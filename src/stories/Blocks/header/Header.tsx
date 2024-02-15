import { useEffect, useState } from "react";
import Logo from "../../Library/logo/Logo";
import Pagefold from "../../Library/pagefold/Pagefold";

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
                  }}
                >
                  <img
                    src="icons/basic/icon-menu.svg"
                    alt="List of bookmarks"
                  />
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
                      className="header__menu-navigation-link  hide-linkstyle"
                    >
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header__menu-profile header__button">
              <a href="/" className="hide-linkstyle">
                {signedIn && haveNotification && (
                  <div className="header__notification bg-signal-alert" />
                )}
                <img src="icons/basic/icon-profile.svg" alt="Profile" />
                {signedIn && (
                  <span className="text-small-caption">{username}</span>
                )}
              </a>
            </div>
            <div className="header__menu-bookmarked header__button">
              <a href="/">
                <img src="icons/basic/icon-heart.svg" alt="List of bookmarks" />
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
                <img
                  className="header__menu-search-icon"
                  src="icons/basic/icon-search.svg"
                  alt="search icon"
                />
              </form>
              <img
                className="header__menu-dropdown-icon"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                src="icons/collection/ExpandMore.svg"
                alt="expand dropdown icon"
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
            <img
              src="icons/basic/icon-watch-static.svg"
              className="mb-8"
              alt="clock icon"
            />
            <span className="text-small-caption">Fredag</span>
            <span className="text-small-caption">28 Maj</span>
          </div>
        </div>
      </header>
    </>
  );
};
