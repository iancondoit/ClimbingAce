const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const ClimbSite = sequelize.define('ClimbSite', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: false
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  difficultyRatings: {
    type: DataTypes.JSONB, // Array of difficulty ranges available at the site
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of photo URLs
    defaultValue: []
  },
  approachTime: {
    type: DataTypes.INTEGER, // in minutes
    allowNull: true
  },
  hikeDifficulty: {
    type: DataTypes.ENUM('Easy', 'Moderate', 'Hard', 'Very Hard'),
    allowNull: true
  },
  weatherTendencies: {
    type: DataTypes.JSONB, // Object with weather tendencies
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = ClimbSite; 