import React from "react";

export type ReviewProps = {
  numberOfReviews: number;
  metaHeadline: string;
  hearts: 1 | 2 | 3 | 4 | 5 | 6;
  headline: string;
  body?: string;
  linkText: string;
  linkLink?: string;
};

export const Review: React.FC<ReviewProps> = ({
  numberOfReviews,
  metaHeadline,
  hearts,
  headline,
  body,
  linkText,
  linkLink,
}) => {
  const filledHeartsArray = Array.from({ length: hearts }, (_, i) => i + 1);
  const emptyHeartsArray = Array.from({ length: 6 - hearts }, (_, i) => i + 1);
  const reviewsArray = Array.from({ length: numberOfReviews }, (_, i) => i + 1);
  return (
    <ul className="reviews">
      {reviewsArray.map((reviewNumber) => {
        return (
          <li className="review text-small-caption" key={reviewNumber}>
            <div className="review__meta mb-8">{metaHeadline}</div>
            <div className="mb-4">
              {filledHeartsArray.map((value) => {
                return (
                  <img
                    key={value}
                    src="icons/basic/icon-heart-filled.svg"
                    alt="icon-heart-filled"
                    className="review__heart"
                  />
                );
              })}
              {emptyHeartsArray.map((value) => {
                return (
                  <img
                    key={value}
                    src="icons/basic/icon-heart-grey.svg"
                    alt="icon-heart-grey"
                    className="review__heart"
                  />
                );
              })}
            </div>
            <div className="review__headline mb-8">{headline}</div>
            {body && <p className="review__body mb-8">{body}</p>}
            {linkText && (
              <a href={linkLink}>
                <div className="link-tag text-small-caption mb-8">
                  {linkText}
                </div>
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Review;
