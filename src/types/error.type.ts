import { ErrorCode } from "../constants/error.constant";

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];
