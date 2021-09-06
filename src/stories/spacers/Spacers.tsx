import React from "react";
import "../../styles/css/base.css";

export type SpacersProps = {
    spacer: "string",
  };
  
  export const Spacers = (props: SpacersProps) => {
    const { spacer } = props;

    return (
      <div>
        <div className={`spacer-${props.spacer}`}>
            <p className="text-header-h1">Text example</p>
        </div>
      </div>
    );
  };
