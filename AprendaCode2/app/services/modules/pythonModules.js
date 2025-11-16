// /services/modules/pythonModules.js

export const PythonContent = {
  id: "python",
  name: "Python",
  icon: "🐍",
  home: "topicosView",

  modules: [
    {
      id: "intro",
      title: "🐍 Introdução Técnica",

      content: [
        {
          type: "card",
          title: "Antes de Começar: Usando Python com VS Code",
          paragraphs: [
            "Para escrever e executar códigos Python com conforto e eficiência:"
          ],
          list: [
            "Baixe o VS Code em: https://code.visualstudio.com/",
            "Instale o Python: https://www.python.org/downloads/",
            "Instale a extensão 'Python' no VS Code",
            "Crie um arquivo .py",
            "Execute o código com RUN ou python arquivo.py"
          ]
        },
        {
          type: "card",
          title: "O que é Python?",
          paragraphs: [
            "Python é uma linguagem interpretada, de alto nível e com tipagem dinâmica."
          ],
          list: ["Automação", "Data Science", "Back-End", "IA e Machine Learning"]
        }
      ],

      navigation: {
        next: "basico",
        previous: null,
        home: "topicosView",
      }
    },

    {
      id: "basico",
      title: "🔤 Básico do Python",
      content: [
        {
          type: "card",
          title: "Sintaxe Básica",
          paragraphs: [
            "Python usa indentação para blocos de código.",
            "Comentários são iniciados com #"
          ]
        }
      ],
      navigation: {
        next: "variaveis",
        previous: "intro",
        home: "topicosView"
      }
    },

    {
      id: "variaveis",
      title: "📊 Variáveis e Tipos",
      content: [
        {
          type: "card",
          title: "Tipos Simples",
          paragraphs: [
            "int, float, str, bool",
            "Variáveis são criadas ao receber um valor"
          ]
        }
      ],
      navigation: {
        next: "estruturas",
        previous: "basico",
        home: "topicosView"
      }
    },

    {
      id: "estruturas",
      title: "🔄 Estruturas de Controle",
      content: [
        {
          type: "card",
          title: "If, For e While",
          paragraphs: ["Estruturas de repetição e decisão do Python"]
        }
      ],
      navigation: {
        next: "funcoes",
        previous: "variaveis",
        home: "topicosView"
      }
    },

    {
      id: "funcoes",
      title: "🧩 Funções",
      content: [
        { type: "card", title: "def", paragraphs: ["Como criar funções"] }
      ],
      navigation: {
        next: "listas",
        previous: "estruturas",
        home: "topicosView"
      }
    },

    {
      id: "listas",
      title: "🗃️ Listas e Dicionários",
      content: [
        { type: "card", title: "Listas", paragraphs: ["Estrutura mais usada em Python"] }
      ],
      navigation: {
        next: "interacao",
        previous: "funcoes",
        home: "topicosView"
      }
    },

    {
      id: "interacao",
      title: "💬 Interação com Usuário",
      content: [
        { type: "card", title: "input()", paragraphs: ["Entrada de dados no console"] }
      ],
      navigation: {
        next: "projetos",
        previous: "listas",
        home: "topicosView"
      }
    },

    {
      id: "projetos",
      title: "🛠️ Projetos Práticos",
      content: [
        { type: "card", title: "Projetos", paragraphs: ["Projetos reais para praticar"] }
      ],
      navigation: {
        next: null,
        previous: "interacao",
        home: "topicosView"
      }
    }
  ]
};
