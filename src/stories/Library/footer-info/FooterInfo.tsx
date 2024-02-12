const FooterInfo = () => {
  return (
    <div className="footer-info">
      <ul className="footer-info__links">
        <li>
          <a href="" className="footer-info__link">
            Behandling af persondata
          </a>
        </li>
        <li>
          <a href="/" className="footer-info__link">
            Servicedeklaration
          </a>
        </li>
        <li>
          <a href="/" className="footer-info__link">
            Relement
          </a>
        </li>
        <li>
          <a href="/" className="footer-info__link">
            Tilgængelighed
          </a>
        </li>
      </ul>

      <ul className="footer-info__icons">
        <li>
          <a href="/">
            <img
              src="icons/social/icon-social-facebook.svg"
              alt="Facebook link"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src="icons/social/icon-social-instagram.svg"
              alt="Instagram link"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src="icons/social/icon-social-youtube.svg"
              alt="Youtube link"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src="icons/social/icon-social-spotify.svg"
              alt="Spotify link"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterInfo;
