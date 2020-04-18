import { validateEmptyString } from "../src";
import { EmptyNameError } from "../src/Errors";

describe("validateEmptyString", () => {
  it("sould throw an error if string is empty", () => {
    expect(() => validateEmptyString("")).toThrow(EmptyNameError);
  });

  it("should not throw an error if name is valid", () => {
    expect(() => validateEmptyString("Devartis")).not.toThrow();
  });
});
