import LessonEntity from "../entities/LessonEntity";
const LESSONS = [
  { id: "l_js_intro_1", topicId: "t_js_intro", titulo: "O que é JS?", ordem: 1, conteudo: "..." },
  { id: "l_js_intro_2", topicId: "t_js_intro", titulo: "Sintaxe básica", ordem: 2, conteudo: "..." },
  { id: "l_sql_intro_1", topicId: "t_sql_intro", titulo: "O que é SQL?", ordem: 1, conteudo: "..." },
];
export default {
  listByTopic(topicId) {
    return LESSONS.filter(l => l.topicId === String(topicId))
                  .sort((a,b)=>a.ordem-b.ordem)
                  .map(LessonEntity.fromDto);
  },
  getNextLesson(currentLessonId) {
    const cur = LESSONS.find(l => l.id === String(currentLessonId));
    if (!cur) return null;
    const siblings = LESSONS.filter(l => l.topicId === cur.topicId).sort((a,b)=>a.ordem-b.ordem);
    const idx = siblings.findIndex(l => l.id === cur.id);
    return idx >= 0 && idx < siblings.length - 1 ? LessonEntity.fromDto(siblings[idx+1]) : null;
  }
};