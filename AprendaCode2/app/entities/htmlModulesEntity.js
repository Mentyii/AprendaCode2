// /services/modules/htmlModulesEntity.js

export const HTMLContent = {
  id: "html",
  name: "HTML",
  icon: "🌐",
  home: "topicosView",

  modules: [
    // ------------------------------
    // INTRODUÇÃO AO HTML
    // ------------------------------
    {
      id: "intro",
      title: "🌐 Introdução ao HTML",

      content: [
        {
          type: "card",
          title: "O que é HTML?",
          paragraphs: [
            "HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas da web.",
            "Ele define títulos, parágrafos, imagens, links, listas e toda a estrutura básica do site."
          ],
          list: [
            "É a base de toda página web",
            "Trabalha junto com CSS e JavaScript",
            "Fácil de aprender e fundamental"
          ]
        },
        {
          type: "card",
          title: "Como funciona?",
          paragraphs: [
            "HTML usa *tags* para marcar elementos da página.",
            "Essas tags aparecem entre < > e podem conter conteúdo e atributos."
          ],
          list: [
            "<p> → parágrafos",
            "<h1> → títulos",
            "<img> → imagens",
            "<a> → links"
          ]
        }
      ],

      navigation: {
        next: "basico",
        previous: null,
        home: "topicosView"
      }
    },

    // ------------------------------
    // MÓDULO BÁSICO
    // ------------------------------
    {
      id: "basico",
      title: "📘 Estrutura Básica do HTML",

      content: [
        {
          type: "card",
          title: "Estrutura padrão",
          paragraphs: [
            "Toda página HTML começa com uma estrutura básica como esta:"
          ],
          list: [
            "<!DOCTYPE html>",
            "<html>",
            "<head>",
            "<title></title>",
            "</head>",
            "<body>",
            "</body>",
            "</html>"
          ]
        },
        {
          type: "card",
          title: "Tags essenciais",
          paragraphs: [
            "Essas são algumas das tags mais importantes:"
          ],
          list: [
            "<h1> até <h6> → Títulos",
            "<p> → Parágrafos",
            "<strong> → Negrito",
            "<em> → Itálico"
          ]
        }
      ],

      navigation: {
        next: "listas",
        previous: "intro",
        home: "topicosView"
      }
    },

    // ------------------------------
    // LISTAS E LINKS
    // ------------------------------
    {
      id: "listas",
      title: "📋 Listas e Links",

      content: [
        {
          type: "card",
          title: "Listas HTML",
          paragraphs: [
            "Listas são usadas para organizar itens."
          ],
          list: [
            "<ul> → lista não ordenada",
            "<ol> → lista numerada",
            "<li> → item da lista"
          ]
        },
        {
          type: "card",
          title: "Criando links",
          paragraphs: [
            "Usamos a tag <a> para criar links."
          ],
          list: [
            '<a href="https://site.com">Clique aqui</a>',
            "Links podem abrir páginas, arquivos ou seções internas."
          ]
        }
      ],

      navigation: {
        next: "imagens",
        previous: "basico",
        home: "topicosView"
      }
    },

    // ------------------------------
    // IMAGENS E MÍDIA
    // ------------------------------
    {
      id: "imagens",
      title: "🖼️ Imagens e Mídia",

      content: [
        {
          type: "card",
          title: "Adicionando imagens",
          paragraphs: [
            "Para inserir uma imagem, usamos a tag <img> com o atributo src."
          ],
          list: [
            '<img src="imagem.jpg" alt="Descrição">',
            "Sempre use alt para acessibilidade",
            "Imagens podem estar na web ou localmente"
          ]
        },
        {
          type: "card",
          title: "Vídeos e áudio",
          paragraphs: [
            "HTML permite incorporar vídeos e áudios facilmente."
          ],
          list: [
            "<video> → vídeos",
            "<audio> → áudio",
            "Ambos suportam controles embutidos"
          ]
        }
      ],

      navigation: {
        next: "tabelas",
        previous: "listas",
        home: "topicosView"
      }
    },

    // ------------------------------
    // TABELAS
    // ------------------------------
    {
      id: "tabelas",
      title: "📊 Tabelas em HTML",

      content: [
        {
          type: "card",
          title: "Criando tabelas",
          paragraphs: [
            "Tabelas organizam dados em linhas e colunas."
          ],
          list: [
            "<table> → tabela",
            "<tr> → linha",
            "<td> → célula",
            "<th> → cabeçalho"
          ]
        }
      ],

      navigation: {
        next: "formularios",
        previous: "imagens",
        home: "topicosView"
      }
    },

    // ------------------------------
    // FORMULÁRIOS
    // ------------------------------
    {
      id: "formularios",
      title: "📝 Formulários HTML",

      content: [
        {
          type: "card",
          title: "Inputs principais",
          paragraphs: [
            "Formulários enviam dados para o servidor."
          ],
          list: [
            "<input> → texto, senha, email...",
            "<textarea> → área de texto",
            "<button> → botões",
            "<select> → listas suspensas"
          ]
        },
        {
          type: "card",
          title: "Atributos comuns",
          paragraphs: [
            "Campos têm atributos importantes:"
          ],
          list: [
            "placeholder",
            "required",
            "value",
            "name"
          ]
        }
      ],

      navigation: {
        next: "projetos",
        previous: "tabelas",
        home: "topicosView"
      }
    },

    // ------------------------------
    // PROJETOS FINAIS
    // ------------------------------
    {
      id: "projetos",
      title: "🛠️ Projetos Práticos HTML",

      content: [
        {
          type: "card",
          title: "Ideias de Projetos",
          paragraphs: [
            "Agora é hora de praticar HTML!"
          ],
          list: [
            "Crie uma página pessoal",
            "Monte um currículo em HTML",
            "Crie uma página com galeria de fotos",
            "Monte um formulário de contato completo"
          ]
        }
      ],

      navigation: {
        next: null,
        previous: "formularios",
        home: "topicosView"
      }
    }
  ]
};
