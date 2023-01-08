import { Button } from "../Buttons/button/Button";

interface ResultPagerProps {
  currentResults: number;
  totalResults: number;
}

const ResultPager = ({ currentResults, totalResults }: ResultPagerProps) => {
  const total = totalResults.toLocaleString("da-Dk");
  return (
    <div className="result-pager">
      <p className="text-small-caption result-pager__title">
        {`Viser ${currentResults} ud af ${total} resultater`}
      </p>
      <Button
        label="VIS FLERE"
        disabled={false}
        buttonType="none"
        collapsible={false}
        size="medium"
        variant="outline"
      />
    </div>
  );
};

export default ResultPager;
