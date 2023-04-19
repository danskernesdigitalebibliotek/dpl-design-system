export type SearchResultZeroProps = {
  searchHelpTitle?: string;
  linkName: string;
};

export const SearchResultZero = ({
  searchHelpTitle,
  linkName,
}: // totalResults,
SearchResultZeroProps) => {
  return (
    <div className="text-body-medium-regular mt-24 mb-112 search-result-zero">
      <p>{searchHelpTitle}</p>
      <br />
      <p> Har du brug for hjælp?</p>
      <p>
        Spørg os på biblioteket eller få hjælp på <a href="/">{linkName}</a>
      </p>
    </div>
  );
};
