export interface ErrorValidationRegister {
  status: number;
  errors: Error;
}

export interface Error {
  EmailAddress: string[];
  FullName: string[];
  UserName: string[];
  Password: string[];
}
