import { Role } from '@prisma/client';

export class User {
  email: string;
  username: string;
  avatar?: string;
  role: Role;
  password?: string;
}
