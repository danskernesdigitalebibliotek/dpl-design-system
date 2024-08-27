export type SearchResultInfoProps = {
  linkName: string;
  linkTotalResults: string;
};

export const SearchResultInfo = ({
  linkName,
  linkTotalResults,
}: SearchResultInfoProps) => {
  return (
    <h2 className="content-list-page__subheading">
      Vis i stedet resultater fra{" "}
      <a className="link-tag text-body-medium-medium" href="/">
        {linkName}
      </a>{" "}
      ({linkTotalResults})
    </h2>
  );
};
