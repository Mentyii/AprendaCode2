// /services/modules/cssModulesEntity.js

export const CSSContent = {
  id: "css",
  name: "CSS",
  icon: "🎨",
  home: "topicosView",

  modules: [
    // INTRODUÇÃO
    {
      id: "intro",
      title: "🎨 Introdução ao CSS",

      content: [
        {
          type: "card",
          title: "O que é CSS?",
          paragraphs: [
            "CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML.",
            "Com CSS você controla cores, tamanhos, espaçamentos, layouts e muito mais."
          ],
          list: [
            "Define aparência visual",
            "Separa conteúdo (HTML) de estilo",
            "Responsável pela identidade visual dos sites"
          ]
        },
        {
          type: "card",
          title: "Como incluir CSS?",
          paragraphs: [
            "Existem três formas de adicionar CSS em uma página:"
          ],
          list: [
            "<style> → CSS interno",
            "style=\"\" → CSS inline (não recomendado)",
            "<link rel=\"stylesheet\"> → CSS externo (recomendado)"
          ]
        }
      ],

      navigation: {
        next: "seletores",
        previous: null,
        home: "topicosView"
      }
    },

    // SELETORES
    {
      id: "seletores",
      title: "🧩 Seletores CSS",

      content: [
        {
          type: "card",
          title: "O que são seletores?",
          paragraphs: [
            "Seletores definem *qual elemento* será estilizado."
          ],
          list: [
            "Tag → h1, p, div",
            "Classe → .botao",
            "ID → #menu",
            "Universal → *",
            "Agrupamento → h1, h2, p"
          ]
        },
        {
          type: "card",
          title: "Combinadores",
          paragraphs: [
            "Combinadores ajudam a selecionar elementos relacionados."
          ],
          list: [
            "div p → descendente",
            "div > p → filho direto",
            "div + p → próximo irmão",
            "div ~ p → todos irmãos seguintes"
          ]
        }
      ],

      navigation: {
        next: "cores",
        previous: "intro",
        home: "topicosView"
      }
    },

    // CORES E FONTES
    {
      id: "cores",
      title: "🎨 Cores e Fontes",

      content: [
        {
          type: "card",
          title: "Cores em CSS",
          paragraphs: [
            "Há várias formas de definir cores:"
          ],
          list: [
            "Por nome → red, blue, green",
            "Hexadecimal → #FF8800",
            "RGB → rgb(255, 0, 0)",
            "HSL → hsl(200, 50%, 50%)"
          ]
        },
        {
          type: "card",
          title: "Fontes",
          paragraphs: [
            "CSS permite personalizar textos:"
          ],
          list: [
            "font-size → tamanho",
            "font-weight → negrito",
            "font-family → tipo da fonte",
            "text-align → alinhamento"
          ]
        }
      ],

      navigation: {
        next: "caixas",
        previous: "seletores",
        home: "topicosView"
      }
    },

    // BOX MODEL
    {
      id: "caixas",
      title: "📦 Box Model",

      content: [
        {
          type: "card",
          title: "Entendendo o Box Model",
          paragraphs: [
            "Todo elemento HTML é uma caixa composta por:"
          ],
          list: [
            "content → conteúdo",
            "padding → espaçamento interno",
            "border → borda",
            "margin → espaçamento externo"
          ]
        },
        {
          type: "card",
          title: "Propriedades importantes",
          paragraphs: ["Algumas propriedades essenciais do box model:"],
          list: [
            "width / height",
            "padding",
            "margin",
            "border",
            "box-sizing: border-box"
          ]
        }
      ],

      navigation: {
        next: "flex",
        previous: "cores",
        home: "topicosView"
      }
    },

    // FLEXBOX
    {
      id: "flex",
      title: "📐 Layout com Flexbox",

      content: [
        {
          type: "card",
          title: "O que é Flexbox?",
          paragraphs: [
            "Flexbox é um sistema de layout moderno e flexível para alinhar itens."
          ],
          list: [
            "display: flex",
            "justify-content → alinhamento horizontal",
            "align-items → alinhamento vertical",
            "flex-direction → direção (row/column)"
          ]
        },
        {
          type: "card",
          title: "Propriedades dos itens",
          paragraphs: [
            "Cada item dentro do container flex também possui propriedades próprias."
          ],
          list: [
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "order"
          ]
        }
      ],

      navigation: {
        next: "grid",
        previous: "caixas",
        home: "topicosView"
      }
    },

    // CSS GRID
    {
      id: "grid",
      title: "🧱 CSS Grid Layout",

      content: [
        {
          type: "card",
          title: "Grid: o sistema mais moderno",
          paragraphs: [
            "CSS Grid cria layouts bidimensionais (linhas e colunas)."
          ],
          list: [
            "display: grid",
            "grid-template-columns",
            "grid-template-rows",
            "gap",
            "grid-area"
          ]
        },
        {
          type: "card",
          title: "Quando usar Grid?",
          paragraphs: [
            "Use Grid quando o layout tem estrutura em linhas e colunas ao mesmo tempo."
          ]
        }
      ],

      navigation: {
        next: "projetos",
        previous: "flex",
        home: "topicosView"
      }
    },

    // PROJETOS
    {
      id: "projetos",
      title: "🛠️ Projetos Práticos CSS",

      content: [
        {
          type: "card",
          title: "Ideias de Projetos",
          paragraphs: [
            "Agora é a hora de estilizar páginas de verdade!"
          ],
          list: [
            "Criar um layout com Flexbox",
            "Montar um grid responsivo",
            "Criar um cartão estilizado (card component)",
            "Criar uma página de login estilizada"
          ]
        }
      ],

      navigation: {
        next: null,
        previous: "grid",
        home: "topicosView"
      }
    }
  ]
};
