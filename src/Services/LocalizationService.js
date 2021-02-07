import en from '../Localizations/localization.en.json';
import de from '../Localizations/localization.de.json';
import hu from '../Localizations/localization.hu.json';

const localizations = {
    en, de, hu
};

const defaultLocalization = 'en';
const LS = window.localStorage;

const Translate = (label) => {
    let language = LS.getItem('localization');
    if (!language) {
        var navigatorLang = navigator.language || navigator.userLanguage;
        console.log('navigatorLang', navigatorLang);
        LS.setItem('localization', defaultLocalization)
    }

    let text = label;
    if (localizations[language][label] !== undefined) {
        text = localizations[language][label];
    }
    return text;
};
export default Translate;
