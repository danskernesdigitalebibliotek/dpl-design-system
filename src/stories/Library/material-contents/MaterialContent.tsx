import React, { useState } from "react";
import EntryItem from "./EntryItem";
import { ReactComponent as ExpandIcon } from "../../../public/icons/collection/ExpandMore.svg";
import { Content } from "./types";

const INITIAL_ENTRIES_TO_SHOW = 10;
const CONTENT_TYPES_WITH_SHOW_ALL = ["MUSIC_TRACKS", "ARTICLES"] as const;

const shouldShowAllButton = (contentType?: string | null): boolean => {
  if (!contentType) return false;
  return (CONTENT_TYPES_WITH_SHOW_ALL as readonly string[]).includes(
    contentType,
  );
};

interface MaterialContentProps {
  contentEntity: Content;
  defaultOpen?: boolean;
}

const MaterialContent: React.FC<MaterialContentProps> = ({
  contentEntity,
  defaultOpen = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasShowAllFunctionality = shouldShowAllButton(contentEntity.type);
  if (!contentEntity.entries && !contentEntity.raw) {
    return null;
  }

  const shouldLimitEntries = hasShowAllFunctionality && !isExpanded;
  const entriesToShow = shouldLimitEntries
    ? INITIAL_ENTRIES_TO_SHOW
    : contentEntity.entries?.length || 0;

  return (
    <section className="material-content">
      <h2 className="material-content__heading">{contentEntity.heading}</h2>

      {contentEntity.raw && (
        <p className="material-content__raw">{contentEntity.raw}</p>
      )}

      {contentEntity.entries && contentEntity.entries.length > 0 && (
        <>
          <ol className="material-content__list material-content__list--level-1">
            {contentEntity.entries
              .slice(0, entriesToShow)
              .map((entry, entryIndex) => (
                <EntryItem
                  key={entryIndex}
                  entry={entry}
                  defaultOpen={defaultOpen}
                />
              ))}
          </ol>

          {hasShowAllFunctionality &&
            contentEntity.entries.length > INITIAL_ENTRIES_TO_SHOW && (
              <button
                type="button"
                className={`material-content__show-more ${
                  isExpanded ? "material-content__show-more--expanded" : ""
                }`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span className="link-tag material-content__show-more-text">
                  {isExpanded
                    ? `Show less`
                    : `Show all (${contentEntity.entries.length})`}
                </span>
                <ExpandIcon className="material-content__show-more-icon" />
              </button>
            )}
        </>
      )}
    </section>
  );
};

export default MaterialContent;
