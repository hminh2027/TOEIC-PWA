import { Post } from 'src/modules/posts/models/post.model';
// import { Role } from '@prisma/client';

// registerEnumType(Role, {
//   name: 'Role',
//   description: 'User role',
// });

export class User {
  email: string;
  firstname?: string;
  lastname?: string;
  concu: string;
  // role: Role;
  posts: Post[];
  password: string;
}
