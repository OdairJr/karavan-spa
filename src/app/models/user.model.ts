export class User {
  name: string;
  email: string;
  password: string;
  accessToken?: string;
}

export class Login {
  email: string;
  password: string;
}
