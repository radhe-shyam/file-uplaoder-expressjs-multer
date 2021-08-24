const User = require('mongoose').model('User');
const { sendSuccessResponse } = require('../../utils/response');

const createUser = async (req, res, next) => {
    try {
        const { name, age, gender } = req.body;
        const user = await new User({
            name,
            age,
            gender
        }).save();
        return sendSuccessResponse(res, res, user);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createUser
}