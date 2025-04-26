const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// MongoDB Connection (if using MongoDB)
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// PostgreSQL Connection (if using PostgreSQL)
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: 'postgres',
  logging: false,
});

const connectPostgreSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
    process.exit(1);
  }
};

// Export both connection methods, and let the application decide which to use
module.exports = {
  connectMongoDB,
  connectPostgreSQL,
  sequelize, // Export for model definitions
  mongoose,  // Export for model definitions
}; 