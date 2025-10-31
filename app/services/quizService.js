// app/services/QuizService.js
import Quiz from "../entities/Quiz";

const QuizService = {
  getAllQuizzes: () => {
    return [
      new Quiz(1, "JavaScript", [
        {
          question: "O que é uma variável em JavaScript?",
          options: [
            "Um tipo de dado",
            "Um espaço na memória para armazenar valores",
            "Uma função de retorno",
            "Um operador lógico"
          ],
          correctAnswer: 1
        },
        {
          question: "Qual comando exibe algo no console?",
          options: ["echo()", "print()", "console.log()", "display()"],
          correctAnswer: 2
        }
      ]),
      new Quiz(2, "Python", [
        {
          question: "Qual símbolo é usado para comentar uma linha?",
          options: ["//", "#", "/* */", "--"],
          correctAnswer: 1
        },
        {
          question: "Como declarar uma função em Python?",
          options: [
            "function myFunc():",
            "func myFunc():",
            "def myFunc():",
            "fn myFunc():"
          ],
          correctAnswer: 2
        }
      ])
    ];
  },

  getQuizByLanguage: (language) => {
    const quizzes = QuizService.getAllQuizzes();
    return quizzes.find(q => q.language.toLowerCase() === language.toLowerCase());
  }
};

export default QuizService;