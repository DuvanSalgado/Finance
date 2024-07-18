import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minCharValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const cleanedValue = control.value.replace(/[$.\s]/g, '');

    return cleanedValue.length < minLength
      ? {
          minlength: {
            requiredLength: minLength,
            actualLength: cleanedValue.length,
          },
        }
      : null;
  };
}
