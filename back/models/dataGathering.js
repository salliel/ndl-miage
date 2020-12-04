'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataGathering extends Model {
  }
  DataGathering.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    date: DataTypes.DATE,
    heureDebut: DataTypes.TIME,
    heureFin: DataTypes.TIME,
    ville: {
      type: DataTypes.STRING
    },
    spot: {
      type: DataTypes.STRING
    },
    autre: {
      type: DataTypes.STRING
    },

    nbSurfers: {
      type: DataTypes.INTEGER
    },


    cremeSolaire: {
      type: DataTypes.BOOLEAN
    },
    parfumDeodorant: {
      type: DataTypes.BOOLEAN
    },
    cremeHydratante: {
      type: DataTypes.BOOLEAN
    },
    maquillage: {
      type: DataTypes.BOOLEAN
    },
    essence: {
      type: DataTypes.BOOLEAN
    },
    cigarette: {
      type: DataTypes.BOOLEAN
    },
    peintures: {
      type: DataTypes.BOOLEAN
    },
    engraisPesticides: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'DataGathering',
  });
  return DataGathering;
};