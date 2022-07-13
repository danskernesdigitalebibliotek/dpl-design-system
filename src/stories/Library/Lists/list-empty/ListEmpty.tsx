interface ListEmptyProps {
  text: string;
}

const ListEmpty = ({ text }: ListEmptyProps) => {
  return <div className="dpl-list-empty">{text}</div>;
};

export default ListEmpty;
