import { useEffect } from "react";
import { Logo } from "../logo/Logo";
import { Pagefold } from "../pagefold/Pagefold";

export type HeaderProps = {
  signedIn: boolean;
  haveNotification: boolean;
  username: string;
};

export const Header = (props: HeaderProps) => {
  const { signedIn, haveNotification, username } = props;

  useEffect(() => {
    require("./initheader");
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-logo--desktop">
          <a className="header-logo--desktop--link" href="/">
            <Logo
              fallback={false}
              libraryName="Hjørring"
              altText="Logo image of libary"
            />
          </a>
        </div>

        <div className="header-menu">
          <nav className="header-menu--first">
            <div>
              <div className="header-menu--navigation--mobile">
                <Pagefold
                  inherit={false}
                  container={false}
                  size="small"
                  classes="header-menu--navigation--button header-button"
                  compProps={{
                    id: "header-menu--open",
                    onClick: () => window.eventHeader(),
                  }}
                >
                  <img
                    src={`icons/basic/icon-menu.svg`}
                    alt="List of bookmarks"
                  />
                </Pagefold>
                <div className="header-menu--navigation--logo">
                  <Logo
                    fallback={true}
                    libraryName="Lyngby-Taarbæk"
                    altText="Logo image of libary"
                  />
                </div>
              </div>
              <ul className="header-menu--navigation">
                {list.map((i) => (
                  <li className="header-menu--navigation--item">
                    <a
                      href={i.href}
                      className="header-menu--navigation--link text-body-medium-regular hide-linkstyle"
                    >
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`header-menu--profile header-button`}>
              <a href="/" className="hide-linkstyle">
                {signedIn && haveNotification && (
                  <div className="header--notification bg-signal-alert" />
                )}
                <img src={`icons/basic/icon-profile.svg`} alt="Profile" />
                {signedIn && (
                  <span className="text-small-caption">{username}</span>
                )}
              </a>
            </div>
            <div className="header-menu--bookmarked header-button">
              <a href="/">
                <img
                  src={`icons/basic/icon-heart.svg`}
                  alt="List of bookmarks"
                />
              </a>
            </div>
          </nav>
          <div className="header-menu--second">
            <div className="header-menu--search">
              <input
                className="header-menu--search--input text-body-medium-regular"
                type="text"
                placeholder="Søg blandt bibliotekets materialer"
              />
              <img
                className="header-menu--search--icon"
                src={`icons/basic/icon-search.svg`}
                alt="search icon"
              />
            </div>
          </div>
        </div>

        <div className="header-clock">
          <Pagefold inherit={false} container={false} size="medium" />
          <div className="header-clock--items">
            <img
              src={`icons/basic/icon-watch-static.svg`}
              className="mb-8"
              alt="clock icon"
            />
            <span className="text-small-caption">Fredag</span>
            <span className="text-small-caption">28 Maj</span>
          </div>
        </div>
      </header>
      <div id="header-overlay" onClick={() => window.eventHeader()}>
        <div className="header-overlay--main">
          <img
            id="header-menu--close"
            src={`icons/basic/icon-cross-medium.svg`}
          />
          <ul className="header-overlay--menu">
            {list.map((i) => (
              <li className="header-overlay--menu--item">
                <a
                  href={i.href}
                  className="header-overlay--menu--link text-body-large hide-linkstyle"
                >
                  {i.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-overlay--backdrop" />
      </div>
    </div>
  );
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

declare global {
  interface Window {
    eventHeader: () => void;
  }
}
