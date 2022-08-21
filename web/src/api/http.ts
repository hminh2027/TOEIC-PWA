import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  Authorization: '',
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getURL = (url: string) => {
  if (url.startsWith('http') || url.startsWith('https')) return url;
  return BASE_URL + url;
};

const setAccessToken = (accessToken: string) => {
  HEADERS.Authorization = `Bearer ${accessToken}`;
};
const setRefreshToken = (refreshToken: string) => {
  console.log(refreshToken);
  HEADERS.cookie = refreshToken;
};

const clearToken = () => {
  delete HEADERS.Authorization;
  delete HEADERS_MUlTIPLE_PART.Authorization;
  delete HEADERS.cookie;
  delete HEADERS_MUlTIPLE_PART.cookie;
};

const http = {
  get: (url: string, params = {}) => {
    return axios.get(getURL(url), {
      headers: HEADERS,
      params,
    });
  },

  post: (url: string, body = {}, params = {}) => {
    return axios.post(getURL(url), body, {
      headers: HEADERS,
      params,
    });
  },

  patch: (url: string, params = {}) => {
    return axios.patch(getURL(url), params, {
      headers: HEADERS,
    });
  },

  put: (url: string, params = {}) => {
    return axios.put(getURL(url), params, {
      headers: HEADERS,
    });
  },

  delete: (url: string) => {
    return axios.delete(getURL(url), {
      headers: HEADERS,
    });
  },
};

export { setAccessToken, setRefreshToken, clearToken, http };
