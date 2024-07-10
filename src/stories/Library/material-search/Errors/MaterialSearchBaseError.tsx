import React from "react";
import { ReactComponent as WarningIcon } from "../../../../public/icons/basic/icon-warning.svg";

interface MaterialSearchBaseErrorProps {
  children: React.ReactNode;
}

const MaterialSearchBaseError: React.FC<MaterialSearchBaseErrorProps> = ({
  children,
}) => {
  return (
    <div className="material-search__error">
      <div className="material-search__error-header">
        <WarningIcon className="material-search__error-icon" />
        <h3 className="material-search__error-header-text">
          This material is outdated.
        </h3>
      </div>
      {children}
    </div>
  );
};

export default MaterialSearchBaseError;
