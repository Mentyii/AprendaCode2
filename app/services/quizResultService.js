import QuizResultEntity from "../entities/QuizResultEntity";
let RESULTS = [];
function uid(){ try { return (Date.now().toString(36)+Math.random().toString(36).slice(2)); } catch(e) { return String(Date.now()); } }
export default {
  save({ quizId, userId, acertos, total, percentual = null, realizadoEm = new Date() }) {
    const dto = { id: uid(), quizId, userId, acertos, total, percentual, realizadoEm };
    const entity = QuizResultEntity.fromDto(dto);
    RESULTS.push(entity);
    return entity;
  },
  getLastByQuiz(quizId, userId) {
    const arr = RESULTS.filter(r => r.quizId === String(quizId) && r.userId === String(userId));
    return arr.length ? arr[arr.length - 1] : null;
  },
  getStatsByLanguage(languageId, userId) {
    const userResults = RESULTS.filter(r => r.userId === String(userId));
    if (!userResults.length) return { tentativas: 0, melhor: 0, media: 0 };
    const tentativas = userResults.length;
    const melhor = Math.max(...userResults.map(r => r.percentual));
    const media = Math.round(userResults.reduce((s,r)=>s+r.percentual,0)/tentativas);
    return { tentativas, melhor, media };
  }
};