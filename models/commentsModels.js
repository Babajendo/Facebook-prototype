const { Sequelize, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/db')

const Comments = sequelize.define('comments', {

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
    comment: {
        type: DataTypes.String(),
        allowNull: false
    }
})

Comments.removeAttribute(['id'])

module.exports = Comments