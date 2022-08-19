import { Button } from "../Buttons/button/Button";

interface ResultPagerProps {
  currentResults: string;
  totalResults: string;
}

const ResultPager = ({ currentResults, totalResults }: ResultPagerProps) => {
  return (
    <div className="result-pager">
      <p className="text-small-caption result-pager__title">
        {`Viser ${currentResults} ud af ${totalResults} resultater`}
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
