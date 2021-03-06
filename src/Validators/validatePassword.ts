import PasswordValidator from "password-validator";
import {
  LongPasswordError,
  PasswordWithoutLowercaseError,
  PasswordWithoutUppercaseError,
  ShortPasswordError,
  PasswordWithoutDigitsError,
  PasswordWithSpacesError
} from "../Errors";

const minLength = 10;
const maxLength = 100;

const schema = new PasswordValidator()
  .is().min(minLength)
  .is().max(maxLength)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().not().spaces();

const validatePassword = (password: string) => {
  const failedRules = schema.validate(password, { list: true }) as string[];

  if (failedRules.includes("min")) throw new ShortPasswordError(minLength);
  if (failedRules.includes("max")) throw new LongPasswordError(maxLength);
  if (failedRules.includes("uppercase")) throw new PasswordWithoutUppercaseError();
  if (failedRules.includes("lowercase")) throw new PasswordWithoutLowercaseError();
  if (failedRules.includes("digits")) throw new PasswordWithoutDigitsError();
  if (failedRules.includes("spaces")) throw new PasswordWithSpacesError();
};

export { validatePassword };
