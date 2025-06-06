import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../../public/locales/en.json';
import siTranslations from '../../public/locales/si.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translations: enTranslations },
        si: { translations: siTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
});

export default i18n;