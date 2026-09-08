import type { MangaSource } from "./models/source.js";

export class SourceManager {
  private readonly sources = new Map<string, MangaSource>();

  register(source: MangaSource): void {
    if (this.sources.has(source.id)) {
      throw new Error(`A source with id "${source.id}" is already registered.`);
    }

    this.sources.set(source.id, source);
  }

  get(sourceId: string): MangaSource {
    const source = this.sources.get(sourceId);

    if (!source) {
      throw new Error(`Source "${sourceId}" is not registered.`);
    }

    return source;
  }

  list(): MangaSource[] {
    return [...this.sources.values()];
  }

  has(sourceId: string): boolean {
    return this.sources.has(sourceId);
  }
}
