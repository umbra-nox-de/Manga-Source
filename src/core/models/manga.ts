export interface Manga {
  id: string;
  sourceId: string;
  title: string;
  description?: string;
  cover?: string;
  genres?: string[];
  url: string;
}
