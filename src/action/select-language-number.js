import { SELECT_LANGUAGE_NUMBER } from '../constants/language';

export const selectLanguageNumber = language => ({
  type: SELECT_LANGUAGE_NUMBER,
  language
})