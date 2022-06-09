export type SearchResultTitleProps = {
  title: string;
  totalResults: string;
};

export const SearchResultTitle = ({
  title,
  totalResults,
}: SearchResultTitleProps) => {
  return (
    <h1 className="text-header-h2 mb-16 search-result-title">
      {`Viser resultater for “${title}” (${totalResults})`}
    </h1>
  );
};
