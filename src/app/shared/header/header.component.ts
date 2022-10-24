import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public imgUrl?: any;
  public user: any;

  constructor(private userService: UserService) {
    this.imgUrl = userService.user?.getImage();
    this.user = userService.user;
   }

  logout(){
    this.userService.logout();
  }

}
