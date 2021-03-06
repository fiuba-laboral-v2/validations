import { SalaryRangeError } from "../Errors";

const validateSalaryRange = (minimumSalary: number, maximumSalary: number) => {
  if (minimumSalary > maximumSalary) throw new SalaryRangeError();
};

export { validateSalaryRange };
