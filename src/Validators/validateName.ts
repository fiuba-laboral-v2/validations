import { LongNameError, NameWithDigitsError } from "../Errors";
import { validateEmptyString } from "../Validators";

const validateName = name => {
  validateEmptyString(name);
  if (name.length >= LongNameError.maximumNameLength) throw new LongNameError();
  if (/\d/.test(name)) throw new NameWithDigitsError();
};

export { validateName };
