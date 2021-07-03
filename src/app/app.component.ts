import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-forms';

  formModel = {
    username: '',
    email: '',
    password: ''
  }

  formError = '';

  submitMyData(formData: NgForm) {
    debugger
    this.formError = '';

    const {
      name,
      email,
      password
    } = formData.form.value;

    // I can do a validation of values, before even I submit the data to the server

    if (this.validateInput(name, email, password)) {
      // Make an API call

    } else {
      // show the error to the user
      this.formError = "Inputs not valid !!"
    }
  }


  validateInput(name: string, email: string, password: string) {
    if (name.length < 6 || name.length > 25) {
      return false;
    }
    if (email.length < 8 || email.length > 50) {
      return false;
    }
    if (password.length < 4 || password.length > 50) {
      return false;
    }
    return true;
  }

}
