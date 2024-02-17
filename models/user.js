const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// passport local mongoose plugin? Wait for 0Auth...

const userSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    },
    displayName: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        required: true
    },
    profileDescription: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;