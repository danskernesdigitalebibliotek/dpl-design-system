import Pagefold from "../../Library/pagefold/Pagefold";
import { Accordion } from "../../Library/accordion/Accordion";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Logo } from "../../Library/logo/Logo";
import { Links } from "../../Library/links/Links";
import { FooterColumn } from "./FooterColumn";
import list from "../../Library/accordion/accordionList";
import { ReactComponent as FacebookIcon } from "../../../public/icons/social/icon-social-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../public/icons/social/icon-social-instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../public/icons/social/icon-social-youtube.svg";
import { ReactComponent as SpotifyIcon } from "../../../public/icons/social/icon-social-spotify.svg";

const dropdownList = [
  {
    title: "DK",
    href: "/",
  },
  {
    title: "SEK",
    href: "/",
  },
  {
    title: "ENG",
    href: "/",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="hide-visually">Globale links</h2>
      {/* Footer mobile */}
      <div className="footer__mobile">
        <Pagefold isInheriting isAContainer size="small">
          <div>
            <h3 className="text-header-h4 mb-16">Åbningstider</h3>
            <p className="text-body-medium-regular mb-24">
              Bibliotekerne lorem ipsum consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore.
            </p>
            <div className="footer__column-link mb-48">
              <Links href="/" linkText="Se bibliotekernes åbningstider" />
            </div>
          </div>
          <Accordion list={list} />
          <div className="footer__widgets mt-48">
            <Dropdown
              list={dropdownList}
              ariaLabel="dropdown"
              arrowIcon="triangles"
            />
            <Logo fallback={false} libraryName="" altText="logo" />
          </div>
          <div className="footer__separator mt-24" />
          <div className="footer__site-info mt-24">
            <div className="footer__site-info-links">
              <ul>
                <li>
                  <a href="" className="footer__site-info-link">
                    Behandling af persondata
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__site-info-link">
                    Servicedeklaration
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__site-info-link">
                    Relement
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__site-info-link">
                    Tilgængelighed
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__site-info-icons mt-32">
              <a href="/" aria-label="follow link to our Facebook">
                <FacebookIcon />
              </a>
              <a href="/" aria-label="follow link to our Instagram">
                <InstagramIcon />
              </a>
              <a href="/" aria-label="follow link to our Youtube channel">
                <YoutubeIcon />
              </a>
              <a href="/" aria-label="follow link to our Spotify">
                <SpotifyIcon />
              </a>
            </div>
          </div>
        </Pagefold>
      </div>

      {/* Footer tablet/desktop */}
      <div className="footer__desktop">
        <Pagefold isInheriting isAContainer size="medium">
          <div className="footer__column-wrapper">
            <div className="footer__column">
              <h3 className="text-header-h4 mb-16">Åbningstider</h3>
              <div className="footer__column">
                <p className="text-body-medium-regular">
                  Bibliotekerne lorem ipsum consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore.
                </p>
                <div className="footer__column-link">
                  <Links href="/" linkText="Se bibliotekernes åbningstider" />
                </div>
              </div>
            </div>
            <FooterColumn
              title="Om bibliotekerne"
              links={[
                "Brug af bibliotekerne",
                "Erstatninger og gebyrer",
                "Opret bruger",
                "Biblioteket - A til Å",
                "Internetadgang",
                "Print, scan og kopi",
                "Booking af lokaler",
                "Nyhedsbrev",
              ]}
            />
            <FooterColumn
              title="Online tilbud"
              links={[
                "Litteratursiden",
                "Bibliotek.dk",
                "eReolen",
                "Filmstriben",
              ]}
            />
            <div className="footer__column">
              <h3 className="text-header-h4 mb-16">Kontakt</h3>
              <p className="text-body-medium-regular">
                Lyngby-Taarbæk Bibliotekerne <br />
                Lyngby Hovedgade 28 <br />
                2800 Kgs. Lyngby <br />
                <br />
                <a className="footer__column-phone" href="tel:4545973700">
                  +45 45 97 37 00
                </a>
                <br />
                Man - fre / Kl. 10-16 <br />
              </p>
              <div className="footer__column-link">
                <Links href="/" linkText="info@ltk.dk" />
              </div>
            </div>
            <FooterColumn
              title="Text"
              links={[
                "Lorem ipsum a la lorem ip",
                "Bibliotekerne lorem",
                "Labore ipsum",
                "Adipisci velit le lorem",
              ]}
            />
            <FooterColumn
              title="Text"
              links={[
                "Lorem ipsum a la lorem ip",
                "Bibliotekerne lorem",
                "Labore ipsum",
                "Adipisci velit le lorem",
              ]}
            />
            <FooterColumn
              title="Text"
              links={[
                "Lorem ipsum a la lorem ip",
                "Bibliotekerne lorem",
                "Labore ipsum",
                "Adipisci velit le lorem",
              ]}
            />
          </div>

          <div className="footer__widgets mt-80">
            <Dropdown
              list={dropdownList}
              ariaLabel="dropdown"
              arrowIcon="triangles"
            />
            <Logo fallback={false} libraryName="" altText="logo" />
          </div>

          <div className="footer__separator" />

          <div className="footer__site-info">
            <div className="footer__site-info-icons">
              <a href="/" aria-label="follow link to our Facebook">
                <FacebookIcon />
              </a>
              <a href="/" aria-label="follow link to our Instagram">
                <InstagramIcon />
              </a>
              <a href="/" aria-label="follow link to our Youtube channel">
                <YoutubeIcon />
              </a>
              <a href="/" aria-label="follow link to our Spotify">
                <SpotifyIcon />
              </a>
            </div>
            <div className="footer__site-info-links color-secondary-gray">
              <a href="/" className="footer__site-info-link">
                Behandling af persondata
              </a>
              <a href="/" className="footer__site-info-link">
                Servicedeklaration
              </a>
              <a href="/" className="footer__site-info-link">
                Relement
              </a>
              <a href="/" className="footer__site-info-link">
                Tilgængelighed
              </a>
            </div>
          </div>
        </Pagefold>
      </div>
    </footer>
  );
};

export default Footer;
