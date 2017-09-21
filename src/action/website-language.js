import { CHANGE_LANGUAGE } from '../constants/language';

export const changeWebsiteLanguage = (language) => ({
	type: CHANGE_LANGUAGE,
	country: language
});
