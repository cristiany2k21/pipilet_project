import Language from '../language';

const initialState = {
  "language": Language[0]
}

export default function ChooseLanguage(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      let language = {};

      Language.forEach(item => {
        if (item.lan === action.country)
          language = item
      })
      return {
        language
      }

    }
    default: {
      return state;
    }
  }
}