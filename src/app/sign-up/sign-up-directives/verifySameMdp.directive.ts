import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const verifySameMdp: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const mdp = control.get('mdp');
  const sameMdp = control.get('sameMdp');

  return mdp && sameMdp && mdp.value != sameMdp.value ? { isNotSameMdp: true } : null;
};

@Directive({
  selector: '[appVerifySameMdp]',
  providers: [{ provide: NG_VALIDATORS, useExisting: VerifySameMdpDirective, multi: true }]
})
export class VerifySameMdpDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return verifySameMdp(control);
  }
}