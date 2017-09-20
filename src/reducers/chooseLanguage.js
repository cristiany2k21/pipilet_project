import Language from '../services/website-languages';
import { CHANGE_LANGUAGE } from '../constants/language';

const initialState = {
	...Language[0]
};

export default function ChooseLanguage(state = initialState, action) {
	switch (action.type) {
	case CHANGE_LANGUAGE: {
		let language = {};

		Language.forEach(item => {
			if (item.lan === action.country) {
				language = item;
			}
		});
		return {
			...language
		};

	}

	default: {
		return state;
	}
	}
}
