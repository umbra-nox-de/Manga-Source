import { describe, expect, it } from "vitest";
import { SourceManager } from "../src/core/source-manager.js";
import type { MangaSource } from "../src/core/models/source.js";

const testSource: MangaSource = {
  id: "test-source",
  name: "Test Source",
  async search() {
    return [];
  },
  async getManga() {
    throw new Error("Not implemented");
  },
  async getChapters() {
    return [];
  },
  async getPages() {
    return [];
  }
};

describe("SourceManager", () => {
  it("registers and retrieves a source", () => {
    const manager = new SourceManager();

    manager.register(testSource);

    expect(manager.get("test-source")).toBe(testSource);
    expect(manager.has("test-source")).toBe(true);
  });

  it("lists registered sources", () => {
    const manager = new SourceManager();

    manager.register(testSource);

    expect(manager.list()).toEqual([testSource]);
  });

  it("rejects duplicate source ids", () => {
    const manager = new SourceManager();

    manager.register(testSource);

    expect(() => manager.register(testSource)).toThrow(
      'A source with id "test-source" is already registered.'
    );
  });

  it("throws when a source does not exist", () => {
    const manager = new SourceManager();

    expect(() => manager.get("missing")).toThrow(
      'Source "missing" is not registered.'
    );
  });
});
