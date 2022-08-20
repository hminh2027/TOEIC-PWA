import { hashPassword } from '../../src/common/utils/hash';
import { CreateUserInput } from '../../src/modules/users/dto/create-user.input';

const password = hashPassword('123456');

export const usersList: CreateUserInput[] = [
  {
    email: 'user1@gmail.com',
    username: 'user1',
    password,
    avatar: '',
  },
  {
    email: 'user2@gmail.com',
    username: 'user2',
    password,
    avatar: '',
  },
];
