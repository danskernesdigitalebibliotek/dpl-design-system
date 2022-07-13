interface IconButtonProps {
  src: string;
}
const IconButton: React.FC<IconButtonProps> = ({ src }) => {
  return (
    <button className="dpl-icon-button" type="button">
      <img src={src} alt="" />
    </button>
  );
};

export default IconButton;
