import Modal from "../Modal";
import { ReactComponent as InfomediaIcon } from "../../../../public/icons/logo/infomedia-logo.svg";

export type InfomediaProps = {
  showModal: boolean;
  title: string;
  text: string;
  hedLine: string;
  byLine: string;
  paper: string;
  dateLine: string;
  footerText: string;
};

export const Infomedia = ({
  title,
  text,
  showModal,
  hedLine,
  byLine,
  paper,
  dateLine,
  footerText,
}: InfomediaProps) => {
  return (
    <Modal shownModal={showModal} classNames="">
      <article className="infomedia-article">
        <InfomediaIcon className="infomedia-logo" />
        <h2 className="infomedia-headline">{title}</h2>
        <p className="infomedia-hedline">{hedLine}</p>
        <p className="infomedia-byline">{byLine}</p>

        <div className="infomedia-meta">
          <span>{paper}</span>
          <span>{dateLine}</span>
        </div>

        <div
          className="infomedia-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: text }}
        />

        <footer className="infomedia-footer">
          <p className="infomedia-copyright">{footerText}</p>
        </footer>
      </article>
    </Modal>
  );
};
