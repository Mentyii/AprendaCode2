import ProgressEntity from "../entities/ProgressEntity";
let PROG = [];
function uid(){ try { return (Date.now().toString(36)+Math.random().toString(36).slice(2)); } catch(e) { return String(Date.now()); } }
export default {
  markVisited({ userId, lessonId }) {
    const existing = PROG.find(p => p.userId === String(userId) && p.lessonId === String(lessonId));
    if (existing) { existing.ultimaVisitaEm = new Date(); return existing; }
    const dto = { id: uid(), userId, lessonId, status: "em_andamento", ultimaVisitaEm: new Date(), tempoGastoSeg: 0 };
    const entity = ProgressEntity.fromDto(dto);
    PROG.push(entity); return entity;
  },
  markCompleted({ userId, lessonId }) {
    const p = this.markVisited({ userId, lessonId }); p.status = "concluida"; return p;
  },
  getByLanguage(languageId, userId) {
    return { totalLessons: 0, concluídas: 0, percentual: 0 };
  }
};