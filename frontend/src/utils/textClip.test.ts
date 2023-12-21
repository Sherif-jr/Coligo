import textClip from "./textClip";
import { describe, expect, it } from "vitest";

describe("TextClip", () => {
  it("should return an empty string when called with no arguments.", () => {
    expect(textClip(undefined, 5)).toBe("");
  });
  it("should return the same string if its length is less than chars parameter.", () => {
    expect(textClip("yes", 5)).toBe("yes");
  });
  it("should return a string with the length of the chars parameter + '...'", () => {
    expect(textClip("it works!", 5)).toBe("it wo...");
  });
});
