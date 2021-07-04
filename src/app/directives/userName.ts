import { Directive } from '@angular/core';

import {
    Validator,
    FormControl,
    ValidatorFn,
    NG_VALIDATORS
} from '@angular/forms';

import { validateUserName } from '../validators/usernameValidator';


@Directive({
    selector: '[userName][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting:  UserNameValidator,
            multi: true
        }
    ]
})
export class UserNameValidator implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateUserName();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}