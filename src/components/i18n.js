import i18next from "i18next";
import { langs } from '../lib/i18n';
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

const defaultLanguage = langs[0];

const customPathDetector = {
  name: 'customPath',

  lookup(options) {
    let found;
    if (typeof window !== 'undefined') {
      const language = window.location.pathname.match(/\/([a-zA-Z-]{2})\//g);
      if (language instanceof Array) {
        found = language[0].replace(/\//g, '');
      }
    }
    return found || defaultLanguage;
  }
};

const lngDetector = new LngDetector();
lngDetector.addDetector(customPathDetector);

const resources = {
  en: {
    translation: require("../../static/locales/en/translation.json"),
    menu: require("../../static/locales/en/menu.json")
  },
  es: {
    translation: require("../../static/locales/es/translation.json"),
    menu: require("../../static/locales/es/menu.json")
  }
};

i18next
  .use(lngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: false,

    // preload: langs,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    detection: {
      order: ['customPath']
    },

    ns: [
      'translation',
      'menu'
    ],

    preload: langs
  });

  export default i18next;
