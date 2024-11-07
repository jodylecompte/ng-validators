import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const DateRangeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return null;
};
