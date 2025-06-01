import type { PageLoad } from './$types';
import data from './data.json';

export const load: PageLoad = () => {
  return data;
};
