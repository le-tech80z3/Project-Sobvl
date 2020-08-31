const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    }
})

UserSchema.methods = {
    // check that user's password matches the one in the db
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    // hash a plain text into secure string that is stored in db
    hashPassword: function (plainTextPassword) {
        const salt = bcrypt.genSaltSync(10)

        return bcrypt.hashSync(plainTextPassword, salt)
    }
}

UserSchema.pre('save', function(next) {
   if (!this.password) {
        next()
    } else {
        // if pw, hash it, add it to the user and then save the user
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User