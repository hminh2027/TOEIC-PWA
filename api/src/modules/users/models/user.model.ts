import { Role } from '@prisma/client';

export class UserModel {
  id?: string;
  email: string;
  username: string;
  avatar?: string;
  role: Role;
  password?: string;
}
