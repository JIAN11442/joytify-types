import { HttpCode } from "../constants/http.constant";

export type HttpStatusCode = (typeof HttpCode)[keyof typeof HttpCode];
