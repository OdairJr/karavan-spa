export class Error {
  errorMessage: string;
  propertyName: string;
}

export class ErrorModel {
  success: boolean;
  errors: Error[] = new Array<Error>();
}
