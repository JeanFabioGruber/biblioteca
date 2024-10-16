'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NomeDoModelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NomeDoModelo.init({
    atributo1: DataTypes.STRING,
    atributo2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NomeDoModelo',
  });
  return NomeDoModelo;
};