import { DESMOS_API_KEY } from './desmos-key';

export const environment = {
  production: true,
  desmosApiKey: DESMOS_API_KEY, // set in desmos-key.ts (gitignored)
  desmosApiVersion: 'v1.11'
};
