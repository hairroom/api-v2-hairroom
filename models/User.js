const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    role: { 
        type: String,
        enum: ['client', 'admin'],
        default: 'client',
        requiered: true,
        message: '{VALUE} no es un rol válido'
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);