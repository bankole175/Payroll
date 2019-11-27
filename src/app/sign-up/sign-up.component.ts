import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  details: FormGroup;

  constructor(fb: FormBuilder) {
    this.details = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: [''],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]

    });
  }

  saveUserDetails(): void {
    console.log('Form Submitted', this.details.value);
  }

}
