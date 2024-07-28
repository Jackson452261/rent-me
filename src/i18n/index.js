import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en_US from './lang/en_US.json';
import zh_TW from './lang/zh_TW.json';
import { getLanguage } from '@/utils/localStorage';
 
const resources = {
  en_US: {
    translation: en_US,
  },
  zh_TW: {
    translation: zh_TW,
  },
};

i18n.use(initReactI18next).init({
  resources,  
  fallbackLng: 'en_US',  
  lng: getLanguage() || 'zh_TW', // 預設語言
  interpolation: {
    // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
    escapeValue: false,
  },
});

export default i18n;