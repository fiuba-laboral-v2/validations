import { EmptyNameError } from "../Errors";

const validateEmptyString = (aString: string) => {
  if (aString.length === 0) throw new EmptyNameError();
};

export { validateEmptyString };
