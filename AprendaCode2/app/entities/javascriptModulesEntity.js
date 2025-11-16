// /services/modules/javascriptModules.js

export const JavascriptContent = {
  id: "javascript",
  name: "JavaScript",
  icon: "📜",
  home: "topicosView",

  modules: [
    // INTRO
    {
      id: "intro",
      title: "📜 Introdução ao JavaScript",

      content: [
        {
          type: "card",
          title: "O que é JavaScript?",
          paragraphs: [
            "JavaScript é uma linguagem de programação utilizada principalmente para criar páginas web interativas.",
            "Ela roda diretamente no navegador e também no back-end através do Node.js."
          ],
          list: [
            "Manipulação do DOM",
            "Criação de interfaces dinâmicas",
            "Desenvolvimento de servidores (Node.js)",
            "Aplicações Mobile (React Native)",
          ]
        },
        {
          type: "card",
          title: "Onde o JavaScript roda?",
          paragraphs: [
            "JS roda em navegadores como Chrome, Edge, Firefox e Safari.",
            "Também roda em servidores utilizando Node.js."
          ]
        }
      ],

      navigation: {
        next: "basico",
        previous: null,
        home: "topicosView",
      }
    },

    // BÁSICO
    {
      id: "basico",
      title: "🔤 Básico do JavaScript",

      content: [
        {
          type: "card",
          title: "Sintaxe básica",
          paragraphs: [
            "Cada instrução deve terminar com ponto e vírgula (;), porém é opcional.",
            "JavaScript diferencia maiúsculas e minúsculas (case-sensitive)."
          ]
        },
        {
          type: "card",
          title: "Comentários",
          paragraphs: [
            "// comentário de uma linha",
            "/* comentário de múltiplas linhas */"
          ]
        }
      ],

      navigation: {
        next: "variaveis",
        previous: "intro",
        home: "topicosView"
      }
    },

    // VARIÁVEIS
    {
      id: "variaveis",
      title: "📊 Variáveis e Tipos",

      content: [
        {
          type: "card",
          title: "Como declarar variáveis",
          paragraphs: [
            "let — variável que pode mudar de valor.",
            "const — variável constante, não pode ser alterada.",
            "var — forma antiga, evite usar."
          ]
        },
        {
          type: "card",
          title: "Tipos primitivos",
          list: [
            "string",
            "number",
            "boolean",
            "null",
            "undefined",
            "bigint",
            "symbol"
          ]
        }
      ],

      navigation: {
        next: "estruturas",
        previous: "basico",
        home: "topicosView"
      }
    },

    // ESTRUTURAS DE CONTROLE
    {
      id: "estruturas",
      title: "🔄 Estruturas de Controle",

      content: [
        {
          type: "card",
          title: "Condicionais",
          paragraphs: [
            "if (condição) { ... }",
            "else { ... }",
            "else if (condição) { ... }"
          ]
        },
        {
          type: "card",
          title: "Loops",
          paragraphs: [
            "for (let i=0; i<10; i++) { ... }",
            "while (condição) { ... }",
            "do { ... } while (condição)"
          ]
        }
      ],

      navigation: {
        next: "funcoes",
        previous: "variaveis",
        home: "topicosView"
      }
    },

    // FUNÇÕES
    {
      id: "funcoes",
      title: "🧩 Funções",

      content: [
        {
          type: "card",
          title: "Criando funções",
          paragraphs: [
            "function soma(a, b) { return a + b }",
            "const soma = (a, b) => a + b"
          ]
        }
      ],

      navigation: {
        next: "colecoes",
        previous: "estruturas",
        home: "topicosView"
      }
    },

    // ARRAYS & OBJETOS
    {
      id: "colecoes",
      title: "🗃️ Arrays e Objetos",

      content: [
        {
          type: "card",
          title: "Arrays",
          paragraphs: [
            "Arrays armazenam listas de valores.",
            "Exemplo: const numeros = [1, 2, 3];"
          ]
        },
        {
          type: "card",
          title: "Objetos",
          paragraphs: [
            "Objetos armazenam pares chave-valor.",
            "Exemplo: const pessoa = { nome: 'Ana', idade: 22 };"
          ]
        }
      ],

      navigation: {
        next: "interacao",
        previous: "funcoes",
        home: "topicosView"
      }
    },

    // INTERAÇÃO
    {
      id: "interacao",
      title: "💬 Interação com Usuário",

      content: [
        {
          type: "card",
          title: "Funções de interação",
          list: [
            "alert('Mensagem');",
            "prompt('Digite algo');",
            "confirm('Você confirma?');"
          ]
        }
      ],

      navigation: {
        next: "projetos",
        previous: "colecoes",
        home: "topicosView"
      }
    },

    // PROJETOS
    {
      id: "projetos",
      title: "🛠️ Projetos Práticos",

      content: [
        {
          type: "card",
          title: "Projetos sugeridos",
          list: [
            "Calculadora simples",
            "Lista de tarefas",
            "Jogo de adivinhação",
            "Relógio digital"
          ]
        }
      ],

      navigation: {
        next: null,
        previous: "interacao",
        home: "topicosView"
      }
    }
  ]
};
