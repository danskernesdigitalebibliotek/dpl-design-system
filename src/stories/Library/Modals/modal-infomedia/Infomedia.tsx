import Modal from "../Modal";

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
        <img
          className="infomedia-logo"
          src="icons/logo/infomedia-logo.svg"
          alt=""
        />
        <h2>{title}</h2>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </article>
    </Modal>
  );
};
