import { ErrorCodeType, HttpStatusCode } from "../types";

export class AppError extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    public message: string,
    public errorCode?: ErrorCodeType,
    public firebaseUID?: string | null,
    public awsUrl?: string[] | null
  ) {
    super(message);
  }
}
