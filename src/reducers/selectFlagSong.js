import Language from '../services/website-languages';

const initialState = {
  "language": Language[0]
}

export default function SelectFlagSong(state = initialState, action) {
  switch (action.type) {
    case "COUNTRY_SELECTED_SONG": {
      const country = action.country;

      console.log('country ------> ', country);
      return Object.assign({}, state, state.language.songPageContent.flag = {
        selected: country
      })
    }
    default: {
      return state;
    }
  }
}