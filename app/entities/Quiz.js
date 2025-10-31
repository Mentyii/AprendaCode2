// app/entities/Quiz.js
export default class Quiz {
    constructor(id, language, questions) {
      this.id = id;                 // número identificador do quiz
      this.language = language;     // ex: "JavaScript", "Python"
      this.questions = questions;   // array de objetos de perguntas
    }
  }