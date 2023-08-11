const Joi = require('joi');

const ValidateUserAccount = (data) => {

    const createAccountSchema = Joi.object({
        surname: Joi.string().required(),
        username: Joi.string().required(),
        othernames: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        password: Joi.string().required(),
        occupation: Joi.string().required(),
        about_me: Joi.string().required(),
        repeat_password: Joi.ref('password')
    })

    return createAccountSchema.validate(data);
}

module.exports = {
    ValidateUserAccount
};