import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['pablo', [Validators.required, Validators.minLength(3)]],
    email: ['pablo@email.com', [Validators.required, Validators.email]],
    password: ['pablo', [Validators.required]],
    password2: ['pablo', [Validators.required]], //To repeat the password
    therms: [false, [Validators.required]], //The checkbox of the accept the therms

  },
    //In the validators you must return functions
  {
    validators: this.equalsPasswords('password1', 'password2')
  });

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router
              ) { }

  createUser(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    // if(this.registerForm.invalid){
    //   return;
    // }

    //Post of the user
    this.userService.createUsers(this.registerForm.value)
                    .subscribe(
                      {
                        next: resp =>
                        {
                          console.log('User created');
                          console.log(resp);
                          this.router.navigateByUrl('/');
                        },
                        error: (err) =>
                        {
                          console.log(err);
                          Swal.fire('Error', err.error.msg, 'error');
                        },
                      },
                    );
  }

  notValidField(field: string): boolean{
    if(this.registerForm.get(field)?.invalid && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }

  notValidPassword(){
    const password1 = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;

    if((password1 !== password2) && this.formSubmitted){
      return true; //true cause of the passwords are not equals
    } else {
      return false;
    }
  }

  acceptTherms(){
    return !this.registerForm.get('therms')?.value && this.formSubmitted;
  }

  equalsPasswords(password1: string, password2: string){
    return (formGroup: FormGroup) => {
      const password1Control = formGroup.get(password1);
      const password2Control = formGroup.get(password2);

      if(password1Control?.value === password2Control?.value){
        password2Control?.setErrors(null);
      } else {
        password2Control?.setErrors({err: true});
      }
    }
  }

}
