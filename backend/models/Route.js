const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');
const ClimbSite = require('./ClimbSite');

const Route = sequelize.define('Route', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grade: {
    type: DataTypes.STRING, // Could be different scales like YDS, V-scale, etc.
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('Sport', 'Trad', 'Boulder', 'Mixed', 'Aid', 'Ice'),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of photo URLs
    defaultValue: []
  },
  length: {
    type: DataTypes.INTEGER, // in meters or feet
    allowNull: true
  },
  firstAscent: {
    type: DataTypes.STRING,
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

// Establish relationship
Route.belongsTo(ClimbSite, { foreignKey: 'climbSiteId', as: 'climbSite' });
ClimbSite.hasMany(Route, { foreignKey: 'climbSiteId', as: 'routes' });

module.exports = Route; 