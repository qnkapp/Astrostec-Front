import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const verifySameEmail: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('email');
    const sameEmail = control.get('sameEmail');
  
    return email && sameEmail && email.value != sameEmail.value ? { isNotSameEmail: true } : null;
  };

  @Directive({
    selector: '[appVerifySameEmail]',
    providers: [{ provide: NG_VALIDATORS, useExisting: VerifySameEmailDirective, multi: true }]
  })
  export class VerifySameEmailDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return verifySameEmail(control);
    }
  }