import { User } from 'src/modules/users/models/user.model';

export class Post {
  title: string;
  content: string;
  published: boolean;
  author: User;
}
