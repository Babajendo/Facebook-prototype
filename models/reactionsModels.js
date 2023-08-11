const { Sequelize, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/db')

const Reactions = sequelize.define('reactions', {
    
    post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: false
    },
    reaction: {
        type: DataTypes.ENUM(),
        value: ['like', 'dislike', 'hate', 'love', 'insightful', 'funny', 'inspiring', 'celebrates', 'educating'],
        allowNull: false
    } 
})

Reactions.removeAttributes(['id'])

module.exports = Reactions