// This is copy/pasted from dpl-react because no design story was made for this view.

// TODO: Should be converted to react components.
const FeeList: React.FC = () => {
  return (
    <div className="fee-list-page" data-cy="fee-list-page">
      <h1 data-cy="fee-list-headline" className="text-header-h1 my-32">
        Gebyrer &amp; erstatninger
      </h1>
      <div data-cy="fee-list-body">
        <div className="fee-list-body__text">
          Overdue fees and replacement costs that were created before 27/10/2020
          can still be paid on this page.
        </div>
        <div className="fee-list-body__payment-info-link">
          <a
            href="https://unsplash.com/photos/NEJcmvLFcws"
            rel="noreferrer"
            className="link-tag"
          >
            See our fees and replacement costs
          </a>
        </div>
      </div>
      <div className="fee-list-body__payment-button">
        <a
          data-cy="fee-payment-button"
          href="https://google.com/"
          rel="noreferrer"
          className="btn-primary btn-outline btn-small arrow__hover--right-small hide-linkstyle"
        >
          Go to payment page
          <img
            className="btn-icon"
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 2.25C20.9182 2.25 21.6712 2.95711 21.7442 3.85647L21.75 4V20C21.75 20.9182 21.0429 21.6712 20.1435 21.7442L20 21.75H9C8.08183 21.75 7.32881 21.0429 7.2558 20.1435L7.25 20V16C7.25 15.5858 7.58579 15.25 8 15.25C8.3797 15.25 8.69349 15.5322 8.74315 15.8982L8.75 16V20C8.75 20.1183 8.83223 20.2175 8.94268 20.2434L9 20.25H20C20.1183 20.25 20.2175 20.1678 20.2434 20.0573L20.25 20V4C20.25 3.88165 20.1678 3.78251 20.0573 3.7566L20 3.75H9C8.88165 3.75 8.78251 3.83223 8.7566 3.94268L8.75 4V8C8.75 8.41421 8.41421 8.75 8 8.75C7.6203 8.75 7.30651 8.46785 7.25685 8.10177L7.25 8V4C7.25 3.08183 7.95711 2.32881 8.85647 2.2558L9 2.25H20ZM13.4535 8.57412L13.5303 8.64124L16.3588 11.4697C16.6272 11.7382 16.6496 12.1596 16.4259 12.4535L16.3588 12.5303L13.5303 15.3588C13.2374 15.6517 12.7626 15.6517 12.4697 15.3588C12.2012 15.0903 12.1788 14.6689 12.4025 14.3749L12.4697 14.2981L14.017 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.6203 2.53215 11.3065 2.89823 11.2568L3 11.25H14.017L12.4697 9.7019C12.2012 9.43342 12.1788 9.01202 12.4025 8.71805L12.4697 8.64124C12.7382 8.37276 13.1596 8.35038 13.4535 8.57412Z' fill='black'/%3e %3c/svg%3e"
            alt=""
          />
        </a>
      </div>
      <div>
        <div className="fee-list" data-cy="fee-list">
          <div className="dpl-list-buttons">
            <h2 data-cy="list-header" className="dpl-list-buttons__header">
              Betales på biblioteket
              <span className="dpl-list-buttons__power">7</span>
            </h2>
          </div>
          <button
            type="button"
            className="list-reservation my-32 list-reservation--stacked"
          >
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543858090/bogportalen.dk/9788771840018.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Spørgsmål : mellem identitet og differens
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Pia Lauritzen (2016)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5130641931
                </p>
                <p
                  className="text-small-caption color-secondary-gray mt-8"
                  data-cy="stack-size"
                >
                  + 1 andre materialer
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 12 kr.</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="list-reservation my-32 list-reservation--stacked"
          >
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1605729044/bogportalen.dk/9788249515608.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">Om høsten</h3>
                  <p className="text-small-caption color-secondary-gray">
                    Karl Ove Knausgård (2015)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5082317637
                </p>
                <p
                  className="text-small-caption color-secondary-gray mt-8"
                  data-cy="stack-size"
                >
                  + 1 andre materialer
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 15 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1575217448/bogportalen.dk/9788771849127.jpg"
                    alt="Om fiskerierhvervet i Danmark og danskernes forbrug af fisk, med fokus på de sidste 100 år."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">Fisk til folket</h3>
                  <p className="text-small-caption color-secondary-gray">
                    Kenn Tarbensen (2019)
                  </p>
                  <p className="text-small-caption color-secondary-gray">
                    100 danmarkshistorier
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5262821661
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 36 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1597406399/bogportalen.dk/9788772372303.jpg"
                    alt="Beretning om perioden, hvor Italien blev epicenteret for Covid-19 i Europa. For alle, der ønsker en uddybende beskrivelse af, hvad der psykologisk, økonomisk og sundhedsmæssigt er sket under den første del af Corona-krisen i Europa, specielt i Italien."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Coronavirus : den nye normalitet - hvad oplever vi, og hvad
                    vil ændre sig?
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Af Elvira Conca og Paola Lovisetti Scamihorn (2020)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5321562150
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 29 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543888408/bogportalen.dk/9788793128576.jpg"
                    alt="I tekster, der spænder fra reportage over essaystikken og til det lyriske, skriver Susan Simonsen (f. 1987) om sit liv og oplevelser samt en beskrivelse af de politiske arbejdsprocesser og den politiske kultur på Christiansborg."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Det underdanige og det magtfulde : essays
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Susan Simonsen (f. 1987) (2017)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5133955927
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 32.75 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                  &nbsp;
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">
                    playstation 4
                  </div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Le Tour de France - season 2017 (Playstation 4)
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    {" "}
                    (2017)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5168886677
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (fornyet for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 16. 01. 2024</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 12 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543888408/bogportalen.dk/9788793128576.jpg"
                    alt="I tekster, der spænder fra reportage over essaystikken og til det lyriske, skriver Susan Simonsen (f. 1987) om sit liv og oplevelser samt en beskrivelse af de politiske arbejdsprocesser og den politiske kultur på Christiansborg."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Det underdanige og det magtfulde : essays
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Susan Simonsen (f. 1987) (2017)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5133955927
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr for fjernlån
                  </div>
                  <p className="text-small-caption">Oprettet 16. 01. 2024</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 1 kr.</p>
              </div>
            </div>
          </button>
          <div className="fee-list-bottom">
            <div className="fee-list-bottom__actions">
              <p className="text-small-caption color-secondary-gray">
                Har du allerede betalt? Der kan gå op til 72 timer før
                betalingen registreres i vores systemer
              </p>
              <p className="text-body-small-medium mt-16">I alt: 137.75</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div data-cy="fee-list">
          <div className="dpl-list-buttons">
            <h2 data-cy="list-header" className="dpl-list-buttons__header">
              Betales på Mit betalingsoverblik
              <span className="dpl-list-buttons__power">6</span>
            </h2>
          </div>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1610030849/bogportalen.dk/9788702307030.jpg"
                    alt="Er dinosaurerne virkeligt borte for altid, eller gemmer nogle af dem sig stadig rundt omkring i vores natur? Måske ser du en andeøgle på stranden eller en lille flyvende øglefugl på foderbrættet? Flot billedbog for alle natur- og dinofans fra ca. 5 år."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">
                    billedbog
                  </div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Drengen med fornemmelse for dinosaurer
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Joakim Engel (2021)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5323847021
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 13 kr.</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="list-reservation my-32 list-reservation--stacked"
          >
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small bg-identity-tint-120">
                  &nbsp;
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">
                    tidsskrift
                  </div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">Burda</h3>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5140815642
                </p>
                <p
                  className="text-small-caption color-secondary-gray mt-8"
                  data-cy="stack-size"
                >
                  + 1 andre materialer
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 14 kr.</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="list-reservation my-32 list-reservation--stacked"
          >
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543627762/bogportalen.dk/9788741000923.jpg"
                    alt="En samlet læsning der søger at give svar på de centrale spørgsmål for forståelsen af Johannesevangeliet."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Johannesevangeliets klarhed : en læsning for præster og
                    andre nysgerrige
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Troels Engberg-Pedersen (2017)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5133934202
                </p>
                <p
                  className="text-small-caption color-secondary-gray mt-8"
                  data-cy="stack-size"
                >
                  + 1 andre materialer
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Gebyr (for sent)
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 13 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543846278/bogportalen.dk/9788712035756.jpg"
                    alt="En beskrivelse af 119 fuglearter, samtlige land- og havpattedyr og 220 plantearter på Island med islandske, norske og svenske artsnavne."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">Islands dyr og planter</h3>
                  <p className="text-small-caption color-secondary-gray">
                    Af Benny Génsbøl og Jon Feilberg (2003)
                  </p>
                  <p className="text-small-caption color-secondary-gray">
                    Gad &amp; natur
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 3278911410
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 33.75 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1543892539/bogportalen.dk/9788702022995.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    Jødedom : tro og livsforståelse
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Bent Melchior (2004)
                  </p>
                  <p className="text-small-caption color-secondary-gray">
                    Troens verden
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 3840926582
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 36 kr.</p>
              </div>
            </div>
          </button>
          <button type="button" className="list-reservation my-32">
            <div className="list-reservation__material">
              <div>
                <div className="cover cover--size-small cover--aspect-small">
                  <img
                    className="cover__img"
                    src="https://res.cloudinary.com/dandigbib/image/upload/t_ddb_cover_small/v1600477520/bogportalen.dk/9788772373140.jpg"
                    alt="En glimrende bog, som kan anbefales til alle, der ønsker at blive klogere på forholdet til andre mennesker, herunder fx parhold. For læsere, som interesserer sig for selvudvikling og psykologi."
                  />
                </div>
              </div>
              <div className="list-reservation__information">
                <div>
                  <div className="status-label status-label--outline">bog</div>
                </div>
                <div className="list-reservation__about">
                  <h3 className="text-header-h4">
                    At opdage den anden : med det ubevidste på arbejde mellem to
                  </h3>
                  <p className="text-small-caption color-secondary-gray">
                    Jane Bykær (2020)
                  </p>
                </div>
                <p className="text-small-caption color-secondary-gray">
                  Materialenummer 5324307984
                </p>
              </div>
            </div>
            <div className="list-reservation__status">
              <div>
                <div className="list-reservation__deadline">
                  <div className="status-label status-label--danger">
                    Erstatning
                  </div>
                  <p className="text-small-caption">Oprettet 30. 11. 2023</p>
                </div>
              </div>
              <div className="list-reservation__fee">
                <p className="text-body-medium-regular">Gebyr 36.25 kr.</p>
              </div>
            </div>
          </button>
          <div className="fee-list-bottom">
            <div className="fee-list-bottom__paymenttypes">&nbsp;</div>
            <div className="fee-list-bottom__actions">
              <p className="text-small-caption color-secondary-gray">
                Har du allerede betalt? Der kan gå op til 72 timer før
                betalingen registreres i vores systemer
              </p>
              <p className="text-body-small-medium mt-16">I alt: 146</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeList;
