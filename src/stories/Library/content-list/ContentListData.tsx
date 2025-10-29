import { ContentListItemStatuses } from "../content-list-item-status/ContentListItemStatus";
import { ContentListItemProps } from "../content-list-item/ContentListItem";
import ImageCredited from "../image-credited/ImageCredited";

const contentListData: ContentListItemProps[] = [
  {
    eventSeriesId: "a",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "Foredrag",
    title: "Kunst og kultur i middelalderen",
    description: "En dybdegåendenalysef kunst og kultur i middelalderen.",
    location: "Vesterbro Bibliotek og Kulturhus",
    price: "50 - 100 kr",
    href: "/",
    date: "2023-01-10",
    time: "15:00 - 17:00",
    status: ContentListItemStatuses.OCCURRED,
  },
  {
    eventSeriesId: "b",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "arrangement",
    title: "Fars Legestue",
    description: "Kom forbi til hygge i Fars Legestue",
    location: "Hovedeblibloteket",
    price: "60 KR",
    href: "/",
    date: "2023-01-12",
    time: "18:00 - 20:00",
  },
  {
    eventSeriesId: "b",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "arrangement",
    title: "Fars Legestue",
    description: "Kom forbi til hygge i Fars Legestue",
    location: "Hovedeblibloteket",
    price: "60 KR",
    href: "/",
    date: "2023-01-13",
    time: "18:00 - 20:00",
    status: ContentListItemStatuses.CANCELLED,
  },
  {
    eventSeriesId: "b",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "arrangement",
    title: "Fars Legestue",
    description: "Kom forbi til hygge i Fars Legestue",
    location: "Hovedeblibloteket",
    price: "60 KR",
    href: "/",
    date: "2023-01-14",
    time: "18:00 - 20:00",
  },
  {
    eventSeriesId: "b",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "arrangement",
    title: "Fars Legestue",
    description: "Kom forbi til hygge i Fars Legestue",
    location: "Hovedeblibloteket",
    price: "60 KR",
    href: "/",
    date: "2023-01-15",
    time: "18:00 - 20:00",
    status: ContentListItemStatuses.CANCELLED,
  },
  {
    eventSeriesId: "a",
    placeholderText: "Placeholder tekst",
    tagText: "Foredrag",
    title: "Kunst og kultur i middelalderen",
    description: "En dybdegåendenalysef kunst og kultur i middelalderen.",
    location: "Kulturhuset",
    price: "50 - 100 kr",
    href: "/",
    date: "2023-01-20",
    time: "15:00 - 17:00",
    status: ContentListItemStatuses.SOLD_OUT,
  },
  {
    eventSeriesId: "a",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    tagText: "Foredrag",
    title: "Kunst og kultur i middelalderen",
    description: "En dybdegåendenalysef kunst og kultur i middelalderen.",
    location: "Kulturhuset",
    price: "50 - 100 kr",
    href: "/",
    date: "2023-01-21",
    time: "15:00 - 17:00",
  },
  {
    eventSeriesId: "a",
    placeholderText: "Placeholder tekst",
    tagText: "Foredrag",
    title: "Kunst og kultur i middelalderen",
    description: "En dybdegåendenalysef kunst og kultur i middelalderen.",
    location: "Kulturhuset",
    price: "50 - 100 kr",
    href: "/",
    date: "2023-01-25",
    time: "15:00 - 17:00",
  },
  {
    eventSeriesId: "b",
    placeholderText: "Placeholder tekst",
    tagText: "arrangement",
    title: "Fars Legestue",
    description: "Kom forbi til hygge i Fars Legestue",
    location: "Hovedeblibloteket",
    price: "60 KR",
    href: "/",
    date: "2023-01-30",
    time: "18:00 - 20:00",
    status: ContentListItemStatuses.NOT_FOR_SALE,
  },
]
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  })
  .map((event, index, items) => {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString("da-DK", {
      // weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const isStacked =
      index > 0 &&
      items[index].eventSeriesId === items[index - 1].eventSeriesId;

    return {
      ...event,
      date: formattedDate,
      isStacked,
    };
  });

export default contentListData;
