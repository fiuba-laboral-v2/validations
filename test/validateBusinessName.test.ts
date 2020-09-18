import { validateBusinessName } from "../src";
import { EmptyNameError, NameWithDigitsError } from "../src/Errors";

describe("validateBusinessName", () => {
  it("raise an error if name is empty", () => {
    expect(() => validateBusinessName("")).toThrow(EmptyNameError);
  });

  it("does not raise and error for long names", () => {
    const longName = "Devartissssssssssssssssssssssssssssssssss";
    expect(() => validateBusinessName(longName)).not.toThrow();
  });

  it("should not raise and error if name has digits", () => {
    expect(() => validateBusinessName("Google34")).not.toThrow(NameWithDigitsError);
  });

  it("should not raise an error if name is valid", () => {
    expect(() => validateBusinessName("Devartis")).not.toThrow();
  });

  it("should not raise an error if name has valid symbols", () => {
    expect(() => validateBusinessName("Devártis&()_+%_-+\/.,{}[]'`\"")).not.toThrow();
  });

  it("should raise an error if name has invalid symbols", () => {
    expect(() => validateBusinessName("Devartis#@%^")).toThrow();
  });
});
