import { IUser } from "./IUser";

export interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}
