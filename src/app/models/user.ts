export class User {
  constructor(
      public username: string,
      public password: string,
      public email: string,
      public full_name?: string) {
  }
}
