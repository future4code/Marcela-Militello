export type AuthenticationData = {
   id: string
}

export class User {

   constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string
   ) { }
   public getId = () => this.id;
   public getName = () => this.name;
   public getEmail = () => this.email;
   public getPassword = () => this.password;
}

export type inputUser = {
   name: string,
   email: string,
   password: string
}

export type outputUser = {
   token: string
}

export interface addFriends {
   id: string,
   token: string
}