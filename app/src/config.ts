import { Application } from './declarations';

export const config: Record<string, any> = {
  host: 'localhost',
  port: 3030,
  paginate: {
    'default': 10,
    max: 1000,
  },
};

export default (app: Application) => {
  Object.keys(config).forEach(key => app.set(key, config[key]));
};
