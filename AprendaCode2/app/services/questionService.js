// src/services/questionService.js

// Banco de questões centralizado
const QUIZZES = {
  python: [
    {
      q: "O que é uma lista em Python?",
      options: ["Um tipo mutável", "Uma função", "Um loop"],
      correct: 0,
      explain: "Listas são tipos mutáveis que armazenam coleções ordenadas de itens.",
    },
    {
      q: 'O que faz "len([1,2,3])"?',
      options: ["3", "2", "Erro"],
      correct: 0,
      explain: "A função len() retorna o número de elementos da lista, que neste caso é 3.",
    },
    {
      q: "Qual símbolo é usado para comentários em Python?",
      options: ["//", "#", ""],
      correct: 1,
      explain: "Em Python, utilizamos o símbolo # para iniciar um comentário de uma linha.",
    },
    {
      q: "Como exibir uma mensagem na tela?",
      options: ["echo()", "console.log()", "print()"],
      correct: 2,
      explain: "A função print() é utilizada para exibir dados na saída padrão (tela).",
    },
    {
      q: "Qual operador é usado para exponenciação?",
      options: ["^", "**", "exp"],
      correct: 1,
      explain: "O operador ** é usado para elevar um número a uma potência (ex: 2**3 = 8).",
    },
  ],

  javascript: [
    {
      q: "Qual palavra-chave declara uma variável?",
      options: ["int", "let", "define"],
      correct: 1,
      explain: 'Usamos "let" (além de var e const) em JavaScript para declarar variáveis.',
    },
    {
      q: 'typeof "Olá" retorna?',
      options: ['"string"', '"text"', '"word"'],
      correct: 0,
      explain: 'O operador typeof retorna o tipo do dado. Texto entre aspas é uma "string".',
    },
    {
      q: "Como exibir algo no console do navegador?",
      options: ["print()", "console.log()", "System.out"],
      correct: 1,
      explain: "console.log() é o método padrão para depuração e exibição de dados no console JS.",
    },
    {
      q: "Qual símbolo representa o operador lógico 'OU'?",
      options: ["&&", "||", "!"],
      correct: 1,
      explain: "O símbolo || (duas barras verticais) representa o operador lógico OU (OR).",
    },
    {
      q: "Qual a forma correta de criar um array?",
      options: ["var x = []", "var x = {}", "var x = ()"],
      correct: 0,
      explain: "Colchetes [] são usados para definir arrays literais em JavaScript.",
    },
  ],

  sql: [
    {
      q: "Qual comando é usado para selecionar dados em SQL?",
      options: ["SELECT", "SHOW", "GET"],
      correct: 0,
      explain: "SELECT é o comando padrão usado para extrair dados de um banco de dados.",
    },
    {
      q: "O que o comando WHERE faz?",
      options: ["Filtra resultados", "Cria tabelas", "Ordena resultados"],
      correct: 0,
      explain: "A cláusula WHERE é usada para filtrar registros que satisfazem uma condição específica.",
    },
    {
      q: "Qual comando adiciona novos dados a uma tabela?",
      options: ["ADD", "INSERT INTO", "UPDATE"],
      correct: 1,
      explain: "INSERT INTO é o comando utilizado para inserir novas linhas em uma tabela.",
    },
    {
      q: "Como ordenar os resultados de uma consulta?",
      options: ["ORDER BY", "SORT BY", "GROUP BY"],
      correct: 0,
      explain: "ORDER BY é usado para classificar o resultado em ordem crescente ou decrescente.",
    },
    {
      q: "Qual comando remove linhas de uma tabela?",
      options: ["REMOVE", "DROP", "DELETE"],
      correct: 2,
      explain: "DELETE é usado para apagar registros existentes em uma tabela.",
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
      explain: "HTML (Linguagem de Marcação de Hipertexto) é o padrão para criar páginas web.",
    },
    {
      q: "Qual tag define um parágrafo?",
      options: ["<div>", "<p>", "<h1>"],
      correct: 1,
      explain: "A tag <p> define um bloco de parágrafo em HTML.",
    },
    {
      q: "Qual atributo define o endereço de um link?",
      options: ["src", "link", "href"],
      correct: 2,
      explain: "O atributo href (Hypertext Reference) especifica o destino da tag <a>.",
    },
    {
      q: "Qual é a tag para o maior título?",
      options: ["<h6>", "<head>", "<h1>"],
      correct: 2,
      explain: "<h1> define o cabeçalho mais importante (nível 1).",
    },
    {
      q: "Qual tag cria uma lista não ordenada (com bolinhas)?",
      options: ["<ol>", "<ul>", "<li>"],
      correct: 1,
      explain: "<ul> (Unordered List) cria uma lista onde a ordem não importa, usando marcadores.",
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
      explain: "CSS (Folhas de Estilo em Cascata) é usado para estilizar elementos HTML.",
    },
    {
      q: "Qual propriedade muda a cor do texto?",
      options: ["background-color", "font-color", "color"],
      correct: 2,
      explain: 'A propriedade "color" define a cor da fonte do texto.',
    },
    {
      q: "Como alterar o tamanho da fonte?",
      options: ["text-size", "font-size", "size"],
      correct: 1,
      explain: "A propriedade font-size define o tamanho do texto.",
    },
    {
      q: "Qual símbolo seleciona um ID no CSS?",
      options: [".", "#", "@"],
      correct: 1,
      explain: "O símbolo # (hash) é usado para selecionar elementos com um ID específico.",
    },
    {
      q: "Como deixar o texto em negrito?",
      options: ["font-weight: bold", "style: bold", "font: thick"],
      correct: 0,
      explain: "A propriedade font-weight controla a espessura da fonte; 'bold' deixa em negrito.",
    },
  ],
};

// Serviço para obter quizzes
export function getQuizById(id) {
  // Retorna o quiz ou um array vazio para evitar erros se o ID não existir
  return QUIZZES[id] || [];
}