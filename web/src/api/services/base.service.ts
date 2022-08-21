import { http } from '../http';

export class BaseService {
  // basePath = post
  protected basePath: string;
  protected http;

  constructor(basePath: string) {
    this.basePath = basePath;
    this.http = http;
  }

  getAll() {
    return this.http.get(this.basePath);
  }

  get() {
    return this.http.get(`${this.basePath}`).then((res) => res.data);
  }

  getOne(id: string) {
    return this.http.get(`${this.basePath}${id}`).then((res) => res.data);
  }

  create(data: any, options: any) {
    return this.http.post(this.basePath, data, options).then((res) => res.data);
  }

  update(id: string, data: any) {
    return this.http.put(`${this.basePath}${id}`, data).then((res) => res.data);
  }

  patch(id: string, data: any) {
    return this.http
      .patch(`${this.basePath}${id}`, data)
      .then((res) => res.data);
  }

  delete(id: string) {
    return this.http.delete(`${this.basePath}${id}`);
  }
}
