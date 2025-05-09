module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Jokes', [
      { text: "Quelle est la femelle du hamster ? L’Amsterdam", createdAt: new Date(), updatedAt: new Date() },
      { text: "Que dit un oignon quand il se cogne ? Aïe", createdAt: new Date(), updatedAt: new Date() },
      { text: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette.", createdAt: new Date(), updatedAt: new Date() },
      { text: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit", createdAt: new Date(), updatedAt: new Date() },
      { text: "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.", createdAt: new Date(), updatedAt: new Date() },
      { text: "Que se fait un Schtroumpf quand il tombe ? Un Bleu", createdAt: new Date(), updatedAt: new Date() },
      { text: "Quel est le comble pour un marin ? Avoir le nez qui coule", createdAt: new Date(), updatedAt: new Date() },
      { text: "Qu'est-ce que les enfants usent le plus à l'école ? Le professeur", createdAt: new Date(), updatedAt: new Date() },
      { text: "Quel est le sport le plus silencieux ? Le para-chuuuut", createdAt: new Date(), updatedAt: new Date() },
      { text: "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule", createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Jokes', null, {});
  }
};
