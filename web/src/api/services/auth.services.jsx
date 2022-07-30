import { api } from '../axios';

export const login = async (body) => {
  return await api.post('/auth/login', body);
};
