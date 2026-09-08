import type { Chapter } from "./chapter.js";
import type { Manga } from "./manga.js";
import type { Page } from "./page.js";

export interface MangaSource {
  readonly id: string;
  readonly name: string;

  search(query: string): Promise<Manga[]>;
  getManga(id: string): Promise<Manga>;
  getChapters(id: string): Promise<Chapter[]>;
  getPages(chapterId: string): Promise<Page[]>;
}
