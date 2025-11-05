import QuestionEntity from "../entities/QuestionEntity";
const QUESTIONS = [
  { 
    id: "js_q1", 
    quizId: "q_js",
    enunciado: "Qual tipo de dado ...?", 
    opcoes: ["A","B","C","D"], 
    corretaIndex: 3, 
    explicacao: "..." 
  },

  { 
    id: "sql_q1", 
    quizId: "q_sql", 
    enunciado: "O que faz SELECT ...?", 
    opcoes: ["A","B","C","D"], 
    corretaIndex: 0, 
    explicacao: "..." 
  },
  
];
export default {
  listByQuiz(quizId) {
    return QUESTIONS.filter(q => q.quizId === String(quizId))
                    .map(QuestionEntity.fromDto);
  }
};