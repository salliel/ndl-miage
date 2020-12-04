'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataGathering', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      spot: {
        type: Sequelize.STRING
      },
      autre: {
        type: Sequelize.STRING
      },

      nbSurfers: {
        type: Sequelize.INTEGER
      },

      date: {
        type: Sequelize.DATE
      },
      heureDebut: {
        type: Sequelize.TIME
      },
      heureFin: {
        type: Sequelize.TIME
      },

      cremeSolaire: {
        type: Sequelize.BOOLEAN
      },
      parfumDeodorant: {
        type: Sequelize.BOOLEAN
      },
      cremeHydratante: {
        type: Sequelize.BOOLEAN
      },
      maquillage: {
        type: Sequelize.BOOLEAN
      },
      essence: {
        type: Sequelize.BOOLEAN
      },
      cigarette: {
        type: Sequelize.BOOLEAN
      },
      peintures: {
        type: Sequelize.BOOLEAN
      },
      engraisPesticides: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DataGathering');
  }
};