import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AdvancedSearchV2 from "./AdvancedSearchV2";
import { prepareSearchData } from "./cql-utils";

const meta: Meta<typeof AdvancedSearchV2> = {
  title: "Blocks / Advanced Search V2",
  component: AdvancedSearchV2,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    showSummary: {
      control: "boolean",
      description: "Show search summary instead of form",
    },
    showResults: {
      control: "boolean",
      description: "Show search results",
    },
    showReset: {
      control: "boolean",
      description: "Show reset button",
    },
    showFilters: {
      control: "boolean",
      description: "Show facet filters in results",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdvancedSearchV2>;

export const Default: Story = {
  args: {},
};

// Define search data once using CQL terms and filters
const searchData = prepareSearchData(
  [
    {
      term: "term.default",
      query: "harry",
      operator: "and",
    },
    {
      term: "term.title",
      query: "potter",
      operator: "not",
    },
    {
      term: "term.creator",
      query: "rowling",
      operator: "and",
    },
  ],
  [
    {
      label: "Format",
      facetField: "phrase.specificmaterialtype",
      selectedValues: ["bog", "artikel"],
      availableValues: [
        { label: "bog", count: 1718 },
        { label: "film (dvd)", count: 155 },
        { label: "musik (cd)", count: 151 },
        { label: "artikel", count: 128 },
        { label: "diverse", count: 94 },
      ],
    },
    {
      label: "Forfatter / ophav",
      facetField: "phrase.creator",
      selectedValues: [],
      availableValues: [
        { label: "harry schmidt", count: 128 },
        { label: "franz liszt (1811-1886)", count: 94 },
        { label: "harry kunz", count: 25 },
        { label: "harry westermann", count: 25 },
        { label: "harry pross", count: 24 },
      ],
    },
    {
      label: "Emne",
      facetField: "phrase.subject",
      selectedValues: [],
      availableValues: [
        { label: "engelske film", count: 121 },
        { label: "franz liszt (1811-1886)", count: 93 },
        { label: "composers -- correspondence", count: 92 },
        { label: "slesvig", count: 89 },
        { label: "sønderjyllands amtskommune", count: 88 },
      ],
    },
  ],
);

export const WithMultipleSuggests: Story = {
  args: {
    searchData,
  },
};

export const WithResultsAndSummary: Story = {
  args: {
    showResults: true,
    showSummary: true,
    searchData,
  },
};

export const WithExtraTitlesToggled: Story = {
  args: {
    showResults: true,
    searchData: {
      ...searchData,
      toggles: {
        onShelf: false,
        onlyExtraTitles: true,
      },
    },
  },
};
