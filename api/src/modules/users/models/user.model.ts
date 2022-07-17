import { Post } from 'src/modules/posts/models/post.model';
import { Role } from '@prisma/client';

// registerEnumType(Role, {
//   name: 'Role',
//   description: 'User role',
// });

export class User {
  email: string;
  firstname?: string;
  lastname?: string;
  // @Field(() => Role)
  role: Role;
  posts: Post[];
  // @HideField()
  password: string;
}
