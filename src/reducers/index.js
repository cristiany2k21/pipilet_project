import { combineReducers } from 'redux';
import ChooseLanguage from './chooseLanguage'
import SelectFlagSong from './selectFlagSong'
import SelectLanguageNumbers from './selectLanguageNumbers'

export default combineReducers({
  ChooseLanguage,
  SelectFlagSong,
  SelectLanguageNumbers
});