import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  googleLogin(user) {
    if (!user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user,
    };
  }
}
