type CardListInfoBoxProps = {
  title?: string;
  html?: string;
  buttonText?: string;
};

const CardListInfoBox = ({ title, html, buttonText }: CardListInfoBoxProps) => {
  return (
    <div className="card-list-info-box pagefold-parent--medium">
      <div className="pagefold-triangle--medium pagefold-inherit-parent" />

      <div className="card-list-info-box__icon cover cover--size-small cover--aspect-small" />
      <div className="card-list-info-box__content">
        <div className="card-list-info-box__text">
          <h3 className="card-list-info-box__title text-header-h4 mb-8">
            {title}
          </h3>
          <div
            className="text-body-small-regular"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html || "" }}
          />
        </div>

        {buttonText && (
          <div className="card-list-info-box__button-wrapper">
            <a
              href="/advanced-search"
              className="btn-primary btn-outline btn-xsmall"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardListInfoBox;
