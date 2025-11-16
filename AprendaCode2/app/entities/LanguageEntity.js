// /entities/languageEntity.js

export const LanguageEntity = {
  id: "",       // python
  name: "",     // Python
  icon: "",     // 🐍

  modules: [
    {
      id: "",       // intro
      title: "",    // Introdução Técnica

      content: [
        {
          type: "card",
          title: "",
          paragraphs: [],
          list: [],
        }
      ],

      navigation: {
        next: "",       // id do próximo módulo
        previous: "",   // id do módulo anterior
        home: "",       // rota da home (ex: "topicosView")
      }
    }
  ]
};
