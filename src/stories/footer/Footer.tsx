import React from "react";
import { Pagefold } from "../pagefold/Pagefold";
import { Accordion } from "../accordion/Accordion";
import { Dropdown } from "../dropdown/Dropdown";
import { Logo } from "../logo/Logo";

export const Footer = () => {
  const accordionList = ["Om Bibliotekerne", "Online tilbud", "Kontakt"].map(
    (header) => ({
      header,
      content: [
        {
          title: "Brug bibliotekerne",
          href: "/",
        },
        {
          title: "Erstatninger og gebyrer",
          href: "/",
        },
        {
          title: "Opret bruger",
          href: "/",
        },
        {
          title: "Biblioteket - A til Å",
          href: "/",
        },
        {
          title: "Internetadgang",
          href: "/",
        },
        {
          title: "Print, scan og kopi",
          href: "/",
        },
        {
          title: "Booking af lokaler",
          href: "/",
        },
        {
          title: "Nyhedsbrev",
          href: "/",
        },
      ],
    })
  );

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

  return (
    <div className="footer">
      {/* Footer mobile */}
      <div className="footer--mobile">
        <Pagefold inherit={true} container={true} size={"medium"}>
          <div>
            <h4 className="text-header-h4 mb-16">Åbningstider</h4>
            <p className="text-body-medium-regular mb-24">
              Bibliotekerne lorem ipsum consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore.
            </p>
            <div className="footer-column--link mb-48">
              <a href="/">Se bibliotekernes åbningstider</a>
            </div>
          </div>
          <Accordion list={accordionList} />
          <div className="footer-widgets mt-48">
            <Dropdown list={dropdownList} ariaLabel="dropdown" />
            <Logo fallback={false} libraryName={""} altText={"logo"} />
          </div>
          <div className="footer-separator mt-24"></div>
          <div className="footer-site-info mt-24">
            <div className="footer-site-info--links">
              <ul>
                <li>
                  <a href="" className="footer-site-info--link">
                    Behandling af persondata
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-site-info--link">
                    Servicedeklaration
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-site-info--link">
                    Relement
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-site-info--link">
                    Tilgængelighed
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-site-info--icons mt-32">
              <a href="/"><img src={`icons/social/icon-social-facebook.svg`} alt="Facebook link" /></a>
              <a href="/"><img src={`icons/social/icon-social-instagram.svg`} alt="Instagram link" /></a>
              <a href="/"><img src={`icons/social/icon-social-youtube.svg`} alt="Youtube link" /></a>
              <a href="/"><img src={`icons/social/icon-social-spotify.svg`} alt="Spotify link" /></a>
            </div>
          </div>
        </Pagefold>
      </div>

      {/* Footer tablet/desktop */}
      <div className="footer--desktop">
        <Pagefold inherit={true} container={true} size={"medium"}>
          <div className="footer-column-wrapper">
            <div className="footer-column">
              <h4 className="text-header-h4 mb-16">Åbningstider</h4>
              <div className="footer-column">
                <p className="text-body-medium-regular">
                  Bibliotekerne lorem ipsum consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore.
                </p>
                <div className="footer-column--link">
                  <a href="/">Se bibliotekernes åbningstider</a>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4">Om bibliotekerne</h4>
              <ul>
                <li className="footer-column--link">
                  <a href="/">Brug af bibliotekerne</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Erstatninger og gebyrer</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Opret bruger</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Biblioteket - A til Å</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Internetadgang</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Print, scan og kopi</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Booking af lokaler</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Nyhedsbrev</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4">Online tilbud</h4>
              <ul>
                <li className="footer-column--link">
                  <a href="/">Litteratursiden</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Bibliotek.dk</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">eReolen</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Filmstriben</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4 mb-16">Kontakt</h4>
              <p className="text-body-medium-regular">
                Lyngby-Taarbæk Bibliotekerne <br />
                Lyngby Hovedgade 28 <br />
                2800 Kgs. Lyngby <br />
                <br />
                +45 45 97 37 00 <br />
                Man - fre / Kl. 10-16 <br />
              </p>
              <div className="footer-column--link">
                <a href="/">info@ltk.dk</a>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4">Text</h4>
              <ul>
                <li className="footer-column--link">
                  <a href="/">Lorem ipsum a la lorem ip</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Bibliotekerne lorem </a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Labore ipsum</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Adipisci velit le lorem</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4">Text</h4>
              <ul>
                <li className="footer-column--link">
                  <a href="/">Lorem ipsum a la lorem ip</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Bibliotekerne lorem </a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Labore ipsum</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Adipisci velit le lorem</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-header-h4">Text</h4>
              <ul>
                <li className="footer-column--link">
                  <a href="/">Lorem ipsum a la lorem ip</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Bibliotekerne lorem </a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Labore ipsum</a>
                </li>
                <li className="footer-column--link">
                  <a href="/">Adipisci velit le lorem</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-widgets mt-80">
            <Dropdown list={dropdownList} ariaLabel="dropdown" />
            <Logo fallback={false} libraryName={""} altText={"logo"} />
          </div>

          <div className="footer-separator"></div>

          <div className="footer-site-info">
            <div className="footer-site-info--icons">
              <a href="/"><img src={`icons/social/icon-social-facebook.svg`} alt="Facebook link" /></a>
              <a href="/"><img src={`icons/social/icon-social-instagram.svg`} alt="Instagram link" /></a>
              <a href="/"><img src={`icons/social/icon-social-youtube.svg`} alt="Youtube link" /></a>
              <a href="/"><img src={`icons/social/icon-social-spotify.svg`} alt="Spotify link" /></a>
            </div>
            <div className="footer-site-info--links">
              <a href="/" className="footer-site-info--link">
                Behandling af persondata
              </a>
              <a href="/" className="footer-site-info--link">
                Servicedeklaration
              </a>
              <a href="/" className="footer-site-info--link">
                Relement
              </a>
              <a href="/" className="footer-site-info--link">
                Tilgængelighed
              </a>
            </div>
          </div>
        </Pagefold>
      </div>
    </div>
  );
};
