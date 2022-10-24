import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  public profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
   }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    });
  }

  updateProfile(){
    console.log(this.profileForm.value);

    this.userService.updateUser(this.profileForm.value)
                    .subscribe(resp => {
                      console.log(resp);
                    })

  }

}
