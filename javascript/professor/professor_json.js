const database = require('./connect');
const Sequelize = require('sequelize');

const professor = database.define('professor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // sala: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    // responsavel: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // materia: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // prova: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // ativ_extra: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // frequencia: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // presenca: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // notas: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    // situacaomateria: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // solicitacaomatriculaatvextra: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // mensalidademateria: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    
})
 
module.exports = professor;