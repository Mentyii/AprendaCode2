// src/services/questionService.js

// Banco de questões centralizado
const QUIZZES = {
  python: [
    {
      q: "O que é uma lista em Python?",
      options: ["Um tipo mutável", "Uma função", "Um loop"],
      correct: 0,
      explain: "Listas são tipos mutáveis que armazenam coleções ordenadas.",
    },
    {
      q: 'O que faz "len([1,2,3])"?',
      options: ["3", "2", "Erro"],
      correct: 0,
      explain: "len() retorna o tamanho da lista, no caso, 3.",
    },
  ],

  javascript: [
    {
      q: "Qual palavra-chave declara uma variável?",
      options: ["int", "let", "define"],
      correct: 1,
      explain: 'Usamos "let" (ou var/const) em JavaScript para declarar variáveis.',
    },
    {
      q: 'typeof "Olá" retorna?',
      options: ['"string"', '"text"', '"word"'],
      correct: 0,
      explain: 'typeof "Olá" retorna "string".',
    },
  ],

  sql: [
    {
      q: "Qual comando é usado para selecionar dados em SQL?",
      options: ["SELECT", "SHOW", "GET"],
      correct: 0,
      explain: "SELECT é usado para buscar dados de uma tabela.",
    },
    {
      q: "O que o comando WHERE faz?",
      options: ["Filtra resultados", "Cria tabelas", "Ordena resultados"],
      correct: 0,
      explain: "WHERE serve para aplicar filtros em consultas SQL.",
    },
  ],

  html: [
    {
      q: "O que significa HTML?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Transfer Markup Logic",
      ],
      correct: 0,
      explain: "HTML significa HyperText Markup Language.",
    },
    {
      q: "Qual tag define um parágrafo?",
      options: ["<div>", "<p>", "<h1>"],
      correct: 1,
      explain: "A tag <p> define parágrafos em HTML.",
    },
  ],

  css: [
    {
      q: "O que significa CSS?",
      options: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Syntax",
      ],
      correct: 0,
      explain: "CSS significa Cascading Style Sheets.",
    },
    {
      q: "Qual propriedade muda a cor do texto?",
      options: ["background-color", "font-color", "color"],
      correct: 2,
      explain: 'A propriedade "color" define a cor do texto.',
    },
  ],
};

// Serviço para obter quizzes
export function getQuizById(id) {
  return QUIZZES[id] || [];
}
