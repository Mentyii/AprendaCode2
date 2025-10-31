import TopicEntity from "../entities/TopicEntity";
const TOPICS = [
  { id: "t_js_intro", languageId: "lang_js", titulo: "Introdução", ordem: 1 },
  { id: "t_js_estruturas", languageId: "lang_js", titulo: "Estruturas", ordem: 2 },
  { id: "t_sql_intro", languageId: "lang_sql", titulo: "Introdução", ordem: 1 },
  { id: "t_sql_estruturas", languageId: "lang_sql", titulo: "Estruturas", ordem: 2 },
];
export default {
  listByLanguage(languageId) {
    return TOPICS.filter(t => t.languageId === String(languageId))
                 .sort((a,b)=>a.ordem-b.ordem)
                 .map(TopicEntity.fromDto);
  }
};