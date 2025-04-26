const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');
const User = require('./User');
const ClimbSite = require('./ClimbSite');

const TripPlan = sequelize.define('TripPlan', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT,
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

// Establish relationships
TripPlan.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(TripPlan, { foreignKey: 'userId', as: 'tripPlans' });

// Junction table for many-to-many relationship between TripPlan and ClimbSite
const TripPlanClimbSite = sequelize.define('TripPlanClimbSite', {
  planDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

TripPlan.belongsToMany(ClimbSite, { 
  through: TripPlanClimbSite,
  as: 'climbSites',
  foreignKey: 'tripPlanId'
});

ClimbSite.belongsToMany(TripPlan, { 
  through: TripPlanClimbSite,
  as: 'tripPlans',
  foreignKey: 'climbSiteId'
});

module.exports = {
  TripPlan,
  TripPlanClimbSite
}; 