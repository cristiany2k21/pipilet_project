import { LOAD_CONTINENT } from '../constants/cook';

export const loadContinent = continent => ({
  type: LOAD_CONTINENT,
  continent
})