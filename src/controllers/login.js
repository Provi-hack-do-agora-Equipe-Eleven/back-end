const bcrypt = require('bcrypt');
const knex = require('../database/connection');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../service/jwtSecret');

const login = async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email && !phone) return res.status(400).json("Preencha campo email ou telefone")
    if (!password ) return res.status(400).json("O campo senha é obrigatório");

    try {
        const user  = await knex('users').where({email}).orWhere({phone}).first();

        if (!user) return res.status(400).json("Dados não conferem");

        const verifiedPassword = await bcrypt.compare(password, user.password);

        if (!verifiedPassword) return res.status(400).json("Dados não conferem");

        const token = jwt.sign({
            id: user.id
        }, jwtSecret, {
            expiresIn: "6h"
        });

        const { password: userPassword, ...registeredUser } = user;

        return res.json({ registeredUser, token });

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}