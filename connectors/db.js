const config = require('config');
const mongoose = require('mongoose');

const connect = async () => {
    return mongoose.connect(process.env.DB_URL || config.get('DB_URL'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
const close = () => {
    return mongoose.disconnect();
}

module.exports = { connect, close }