
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateUserName() : ValidatorFn {
    return (c: AbstractControl ) => {
        const isValid = c.value === 'amazon';
        if (isValid) {
            return null;
        } else {
            return {
                userName: {
                    valid: false
                }
            }
        }
    }
}