import { UserModel } from 'src/modules/users/models/user.model';

export class Post {
  title: string;
  content: string;
  published: boolean;
  author: UserModel;
}
