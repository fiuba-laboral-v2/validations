import { EmptyNameError, InvalidBusinessName } from "../Errors";

const validateBusinessName = businessName => {
  const regex = /^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/;
  if (businessName.length === 0) throw new EmptyNameError();
  if (!regex.test(businessName)) throw new InvalidBusinessName(businessName);
};

export { validateBusinessName };
