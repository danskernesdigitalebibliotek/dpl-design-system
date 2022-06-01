export type SearchResultTitleProps = {
  title: string;
  total: string;
};

export const SearchResultTitle = ({ title, total }: SearchResultTitleProps) => {
  return (
    <h1 className="text-header-h2 search-result-title">
      {`Viser resultater for “${title}” (${total})`}
    </h1>
  );
};
