import { SELECT_LANGUAGE_COLOR } from '../constants/language';

export const selectLanguageColor = language => ({
  type: SELECT_LANGUAGE_COLOR,
  language
})