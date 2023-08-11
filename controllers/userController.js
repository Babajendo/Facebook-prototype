const UserModel = require('../models/userModels')
// async function syncDatabase() {
//   await User.sync({ force: true });
//   console.log('Database synced!');
// }

// syncDatabase();
const { ValidateUserAccount } = require('../validations/userValidations')
const { v4: uuidv4 } = require('uuid')
