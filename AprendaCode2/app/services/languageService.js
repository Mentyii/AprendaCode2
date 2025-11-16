// /services/languageService.js
import { PythonContent } from "./modules/pythonModules";
import { JavascriptContent } from "./modules/javascriptModules";
import { SQLContent } from "./modules/sqlModules";
import { HTMLContent } from "./modules/htmlModules";
import { CSSContent } from "./modules/cssModules";


export const languageService = {
  getLanguage(langId) {
    const languages = {
      python: PythonContent,
      javascript: JavascriptContent,
      sql: SQLContent,
      html: HTMLContent,
      css: CSSContent
       
    };

    return languages[langId] || null;
  },

  getModule(langId, moduleId) {
    const language = this.getLanguage(langId);
    if (!language) return null;

    return language.modules.find(m => m.id === moduleId) || null;
  },

  getNextModule(langId, moduleId) {
    const language = this.getLanguage(langId);
    const index = language.modules.findIndex(m => m.id === moduleId);
    return language.modules[index + 1] || null;
  },

  getPrevModule(langId, moduleId) {
    const language = this.getLanguage(langId);
    const index = language.modules.findIndex(m => m.id === moduleId);
    return language.modules[index - 1] || null;
  }
};
