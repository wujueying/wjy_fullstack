import { CHANGE_LANGUAGE, LanguageActionTypes, ADD_LANGUAGE } from './languageAction'
import i18n from 'i18next'

interface LanguageState {
  language: 'en' | 'zh';
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export default (state = defaultState, action: LanguageActionTypes) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
          i18n.changeLanguage(action.payload)
          return { ...state, language: action.payload };
        case ADD_LANGUAGE:
          return { ...state, languageList: [...state.languageList, action.payload] };
        default: 
          return state
      }    
}
