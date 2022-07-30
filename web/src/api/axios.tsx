import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  Authorization: '',
};

const HEADERS_MUlTIPLE_PART = {
  ...HEADERS,
  'Content-Type': 'multipart/form-data; boundary=something',
  Accept: 'multipart/form-data',
};

const BASE_URL = process.env.API_URL;

export const getURL = (url: string) => {
  if (url.startsWith('http')) {
    return url;
  } else if (url.startsWith('https')) {
    return url;
  }
  return BASE_URL + url;
};

export const api = {
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

  delete: (url: string) => {
    return axios.delete(getURL(url), {
      headers: HEADERS,
    });
  },

  postMultiplePart: (url: string, params = {}) => {
    return axios.post(getURL(url), params, {
      headers: HEADERS_MUlTIPLE_PART,
    });
  },
};
