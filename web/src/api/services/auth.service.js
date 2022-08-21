import { BaseService } from './base.service';

class AuthService extends BaseService {
  login(data) {
    return this.http
      .post(`${this.basePath}/login`, data)
      .then((res) => res.data);
  }
}

export default new AuthService('auth');
