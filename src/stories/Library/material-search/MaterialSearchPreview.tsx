import { useState, useEffect } from "react";
import Cover from "../cover/Cover";
import { PreviewData } from "./MaterialSearchExampleData";
import MaterialSearchLoading from "./MaterialSearchLoading"; // Assuming this is the correct import

interface MaterialSearchPreviewProps {
  displayMaterial: boolean;
}

const MaterialSearchPreview = ({
  displayMaterial,
}: MaterialSearchPreviewProps) => {
  const [fictiveLoading, setFictiveLoading] = useState(false);

  useEffect(() => {
    if (displayMaterial) {
      setFictiveLoading(true);
      const timer = setTimeout(() => {
        setFictiveLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [displayMaterial]);

  if (fictiveLoading) {
    return (
      <div className="material-search__preview">
        <div className="material-search__preview-loading">
          <MaterialSearchLoading loadingText="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className="material-search__preview">
      {displayMaterial ? (
        <div className="material-search__preview-material">
          <Cover
            src={PreviewData.coverUrl}
            animate
            size="large"
            displaySize="small"
          />
          <div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Title:</span>
              <span className="material-search__preview-detail">
                {PreviewData.title}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Author:</span>
              <span className="material-search__preview-detail">
                {PreviewData.author}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">
                Publication Year:
              </span>
              <span className="material-search__preview-detail">
                {PreviewData.publicationYear}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Source:</span>
              <span className="material-search__preview-detail">
                {PreviewData.source}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Work Id:</span>
              <span className="material-search__preview-detail">
                {PreviewData.workId}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="material-search__preview-empty">
          No material selected
        </div>
      )}
    </div>
  );
};

export default MaterialSearchPreview;
