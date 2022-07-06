import { useState } from "react";
import { ButtonUI } from "../../Library/Buttons/button-ui/ButtonUI";
import { Material, MaterialProps } from "../../Library/material/Material";

export type MaterialCardProps = {
  title: string;
  description: string;
  isLiked: boolean;
  material: MaterialProps;
};

export const MaterialCard: React.FC<MaterialCardProps> = ({
  title,
  description,
  isLiked,
  material,
}) => {
  const [isItLiked, setIsItLiked] = useState(isLiked);
  const handleClick = () => {
    setIsItLiked(!isItLiked);
  };

  return (
    <div className="material-card">
      <div className="material-card__icon">
        <ButtonUI
          onClick={handleClick}
          ariaLabel="bookmark material"
          content={{
            kind: "CHILDREN",
          }}
        >
          {/* To toggle the like-state we need the svg to be inline.  */}
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9322 10.3449L16.9283 10.3487L10.1776 17.1758C10.0798 17.2747 9.91991 17.2747 9.82206 17.1758L3.07772 10.354L3.07774 10.354L3.07374 10.35C1.51615 8.79812 0.75 7.03441 0.75 5.36082C0.75 3.95039 1.2289 2.80751 2.01024 2.01966C2.79104 1.23235 3.92287 0.75 5.32246 0.75C6.18981 0.75 6.85479 0.882485 7.43004 1.13946C8.00719 1.39728 8.54059 1.80117 9.11674 2.40989C9.1944 2.49194 9.2735 2.57794 9.35845 2.67265L9.43671 2.76131L9.99303 3.3916L10.556 2.76724L10.6362 2.67825L10.8875 2.40506C11.462 1.79881 11.9941 1.39634 12.5699 1.13922C13.1449 0.882408 13.8098 0.75 14.6771 0.75C16.0767 0.75 17.2087 1.23237 17.9896 2.01971C18.771 2.80759 19.25 3.95046 19.25 5.36082C19.25 7.03465 18.4838 8.79831 16.9322 10.3449Z"
              strokeWidth="1.5"
              className={
                isItLiked
                  ? "bg-identity-primary border-identity-primary"
                  : "border-secondary-gray"
              }
            />
          </svg>
        </ButtonUI>
      </div>
      <div className="material-card__material">
        <Material {...material} />
      </div>
      <div className="material-card__texts">
        <p className="material-card__title">{title}</p>
        <p className="material-card__description">{description}</p>
      </div>
    </div>
  );
};
