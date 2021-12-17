import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en/translationEn.json' // English
import translationHi from './locales/hi/translationHi.json' // Hindi
import translationMa from './locales/ma/translationMa.json' // Marathi
import translationBa from './locales/ba/translationBa.json' // Bangali
import translationTe from './locales/te/translationTe.json' // Telgu

const resources = {
    en: {
        translation: translationEn
    },
    hi: {
        translation: translationHi
    },
    ma: {
        translation: translationMa
    },
    ba: {
        translation: translationBa
    },
    te: {
        translation: translationTe
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
