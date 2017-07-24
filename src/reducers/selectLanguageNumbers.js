import Language from '../services/number';
import { SELECT_LANGUAGE_NUMBER } from '../constants/language';

export default function SelectLanguageNumbers(state = Language["french"], action) {
  switch (action.type) {
    case SELECT_LANGUAGE_NUMBER: {
      const language = action.language;
      console.log('-------------> selectLanguageNumbers.js -------------> ');
      return Language[`${language}`]
    }
    default: {
      return state;
    }
  }
}