import Modal from "../Modal";
import { ReactComponent as InfomediaIcon } from "../../../../public/icons/logo/infomedia-logo.svg";

export type InfomediaProps = {
  showModal: boolean;
  title: string;
  text: string;
};

export const Infomedia = (props: InfomediaProps) => {
  const { title, text, showModal } = props;
  return (
    <Modal shownModal={showModal} classNames="">
      <article className="infomedia-article">
        <InfomediaIcon className="infomedia-logo" />
        <h2 className="infomedia-headline">{title}</h2>
        <div
          className="infomedia-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </article>
    </Modal>
  );
};
