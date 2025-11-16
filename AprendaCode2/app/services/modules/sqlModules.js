// /services/modules/sqlModules.js

export const SQLContent = {
  id: "sql",
  name: "SQL",
  icon: "🗄️",
  home: "topicosView",

  modules: [
    // ------------------------------
    // INTRODUÇÃO AO SQL
    // ------------------------------
    {
      id: "intro",
      title: "🗄️ Introdução ao SQL",

      content: [
        {
          type: "card",
          title: "O que é SQL?",
          paragraphs: [
            "SQL (Structured Query Language) é uma linguagem usada para gerenciar dados em bancos relacionais.",
            "Com SQL você pode inserir, consultar, atualizar e excluir informações."
          ],
          list: [
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "SQL Server",
            "Oracle"
          ]
        },
        {
          type: "card",
          title: "Por que aprender SQL?",
          paragraphs: [
            "SQL é fundamental para qualquer área que envolve dados: tecnologia, negócios, ciência, análise e automação."
          ],
          list: [
            "Consultas rápidas e precisas",
            "Manipulação de grandes volumes de dados",
            "Indispensável em aplicações web",
            "Base para Data Science e BI"
          ]
        }
      ],

      navigation: {
        next: "basico",
        previous: null,
        home: "topicosView",
      }
    },

    // ------------------------------
    // MÓDULO BÁSICO
    // ------------------------------
    {
      id: "basico",
      title: "📘 Comandos Básicos do SQL",

      content: [
        {
          type: "card",
          title: "Comandos mais usados",
          paragraphs: [
            "Estes são os principais comandos para iniciar no SQL:"
          ],
          list: [
            "SELECT → consulta dados",
            "INSERT → insere novos registros",
            "UPDATE → atualiza dados existentes",
            "DELETE → remove registros"
          ]
        }
      ],

      navigation: {
        next: "filtros",
        previous: "intro",
        home: "topicosView"
      }
    },

    // ------------------------------
    // FILTROS E CONSULTAS
    // ------------------------------
    {
      id: "filtros",
      title: "🔎 Consultas e Filtros",

      content: [
        {
          type: "card",
          title: "Filtrando com WHERE",
          paragraphs: [
            "WHERE é usado para filtrar resultados específicos de uma tabela."
          ],
          list: [
            "WHERE idade > 18",
            "WHERE nome = 'Carlos'",
            "WHERE ativo = true"
          ]
        },
        {
          type: "card",
          title: "Ordenando com ORDER BY",
          paragraphs: [
            "Ordena os resultados da consulta."
          ],
          list: [
            "ORDER BY idade DESC",
            "ORDER BY nome ASC"
          ]
        }
      ],

      navigation: {
        next: "relacionamentos",
        previous: "basico",
        home: "topicosView"
      }
    },

    // ------------------------------
    // RELACIONAMENTOS
    // ------------------------------
    {
      id: "relacionamentos",
      title: "🔗 Relacionamentos e JOINs",

      content: [
        {
          type: "card",
          title: "O que é um relacionamento?",
          paragraphs: [
            "Relacionamentos conectam tabelas diferentes usando chaves primárias e estrangeiras."
          ],
          list: [
            "1 → 1 (Um para um)",
            "1 → Many (Um para muitos)",
            "Many → Many (Muitos para muitos)"
          ]
        },
        {
          type: "card",
          title: "Tipos de JOIN",
          paragraphs: [
            "JOINs permitem combinar dados de duas ou mais tabelas."
          ],
          list: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL JOIN"
          ]
        }
      ],

      navigation: {
        next: "projetos",
        previous: "filtros",
        home: "topicosView"
      }
    },

    // ------------------------------
    // PROJETOS PRÁTICOS
    // ------------------------------
    {
      id: "projetos",
      title: "🛠️ Projetos Práticos de SQL",

      content: [
        {
          type: "card",
          title: "Projetos Reais",
          paragraphs: [
            "Aqui estão ideias de projetos para treinar SQL na prática:"
          ],
          list: [
            "Criar um banco para um sistema de vendas",
            "Gerar relatórios com filtros e agregações",
            "Criar consultas usando JOINs e subqueries",
            "Criar um banco para um sistema de login"
          ]
        }
      ],

      navigation: {
        next: null,
        previous: "relacionamentos",
        home: "topicosView"
      }
    }
  ]
};
