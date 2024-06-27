import React from "react";
import MaterialSearchBaseError from "./MaterialSearchBaseError";

const WorkNotFoundError: React.FC = () => {
  return (
    <MaterialSearchBaseError>
      <div className="material-search__error-content">
        <p className="material-search__error-description">
          The material that was previously selected is no longer available in
          the system. Either delete this entry or search for a new material to
          replace it.
        </p>
      </div>
    </MaterialSearchBaseError>
  );
};

export default WorkNotFoundError;
