import { environment } from "src/environments/environment"

const base_url = environment.base_url;

export class User{

  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public img?: string,
    public google?: boolean,
    public role?: string,
    public uid?: string
  ){}

    getImage(){

      //Img for google login
      if(this.img?.includes('https')) {
        return this.img;
      }

      //Img for user login
      if(!this.img){
        return `${base_url}/upload/users/no-image`;
      } else {
        return `${base_url}/upload/users/${this.img}`;
      }
    }

}
