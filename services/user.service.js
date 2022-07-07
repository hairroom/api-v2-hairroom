const bcrypt = require('bcrypt');
const userModel = require('../models/User')

const nodemailer = require("nodemailer");
const fs = require('fs');
const { config } = require('../config/index')

const createUser = async (data) => {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await userModel.create({
        ...data,
        password: hash
    });
    let newObjectUser = newUser;
    newObjectUser = newObjectUser.toObject();
    delete newObjectUser.password;
    console.log(newObjectUser)
    return newObjectUser;
}

const findAll = async () => {
    const data = await userModel.find();
    return data;
}

const findByEmail = async (email) => {
    const user = await userModel.findOne({email});
    return user;
}


module.exports = {
    createUser,
    findAll,
    findByEmail
}