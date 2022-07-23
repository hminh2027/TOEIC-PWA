import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Toeic PWA',
    description:
      'A pwa that supports learning and practicing for the toeic exam',
    version: '1.0',
    path: 'api/docs',
  },
  security: {
    expiresIn: '1h',
    refreshIn: '60d',
  },
  redis: {
    uri: 'REDIS_URI=redis://localhost:6379',
  },
};

export default (): Config => config;
