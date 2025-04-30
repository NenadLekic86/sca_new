import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './locales/en/en.json';
import srLang from './locales/sr/sr.json';

const resources = {
  en: {
    translation: enLang,
  },
  sr: {
    translation: srLang,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    debug: true // This will help us see if there are any initialization issues
  });

export default i18n;