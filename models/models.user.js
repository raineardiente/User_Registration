const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: { type: String, required: yes },
    middleName: { type: String, required: yes },
    lastName: { type: String, required: yes },
    address: { type: String, required: yes },
    gender: { type: String, required: yes },

}) 

module.exports = User = mongoose.model('users', UserSchema);