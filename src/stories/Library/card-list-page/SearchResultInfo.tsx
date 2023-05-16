export type SearchResultInfoProps = {
  linkName: string;
  linkTotalResults: string;
};

export const SearchResultInfo = ({
  linkName,
  linkTotalResults,
}: SearchResultInfoProps) => {
  return (
    <h2 className="text-body-medium-regular search-result-info">
      Vis i stedet resultater fra{" "}
      <a className="link-tag text-body-medium-medium" href="/">
        {linkName}
      </a>{" "}
      ({linkTotalResults})
    </h2>
  );
};
