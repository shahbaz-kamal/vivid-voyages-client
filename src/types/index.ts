import type { ComponentType } from "react";

export type {
  IsendOtp,
  ILogin,
  IVerifiedOtp,
  ILoginResponse,
} from "./auth.type";

export interface IResponse<T> {
  StatusCodes: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItems {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "GUIDE";
