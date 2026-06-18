import { UserRole } from "../enum/role.enum";


export interface JwtPayload {
    email: string;
    role: UserRole;
  }
  