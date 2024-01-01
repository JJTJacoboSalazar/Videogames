const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    description : {
      type : DataTypes.TEXT,
    },
    platforms : {
      type : DataTypes.JSON,
      allowNull : false
    },
    image : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isUrl : true
      }
    },
    released : {
      type : DataTypes.STRING,
      allowNull : false
    },
    rating : {
      type : DataTypes.DECIMAL,
      allowNull : false,
      validate : {
        min : 0,
        max : 5
      }
    }
  },
  {
    timestamps : false
  });
};