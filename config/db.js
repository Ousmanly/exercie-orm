// const { Sequelize } = require('sequelize');
import Sequelize from 'sequelize'
const sequelize = new Sequelize('tache_db', 'root', 'ousmane12042061', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
