const { Sequelize, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/db')

const Post = sequelize.define('posts', {

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
    post: {
        type: DataTypes.STRING(),
        allowNull: false
    }
})

Post.removeAttribute(['id'])

module.exports = Post