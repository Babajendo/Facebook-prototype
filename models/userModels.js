const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('users',{
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    surname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    othernames: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    occupation: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false
    },
    about_me: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false
    },
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password_salt: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
})

// sequelize.sync()
// .then(data) => {
//     console.log("model synced with table")
// }
// .catch(err => console.log("error:", ))
User.removeAttribute(['id'])

module.exports = User