export interface ContentPerson {
  display: string;
  nameSort: string;
  firstName: string | null;
  lastName: string;
  attributeToName: string | null;
}

export interface ContentCorporation {
  display: string;
}

export interface ContentCreators {
  persons?: ContentPerson[];
  corporations?: ContentCorporation[];
}

export interface ContentTitle {
  display: string;
}

export interface ContentSublevel {
  title: ContentTitle;
  contributors?: string[] | null;
  playingTime?: string | null;
  sublevel?: ContentSublevel[] | null;
}

export interface ContentEntry {
  title: ContentTitle;
  creators?: ContentCreators;
  contributors?: string[] | null;
  playingTime?: string | null;
  sublevel?: ContentSublevel[] | null;
}

export interface Content {
  heading: string;
  type: string | null;
  raw: string | null;
  entries: ContentEntry[] | null;
}

export interface MaterialContentsProps {
  contents: Content[];
  defaultOpen?: boolean;
}
