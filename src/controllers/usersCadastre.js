const bcrypt = require('bcrypt');
const knex  = require('../database/connection');

const cadastre = async (req, res) => {
    const { name, phone, email, password } = req.body;

    if (!name) return res.status(400).json( "O campo nome é obrigatório");
    if (!phone) return res.status(400).json("O campo senha é obrigatório")
    if (!email) return res.status(400).json("O campo email é obrigatório");
    if (!password) return res.status(400).json("O campo senha é obrigatório");
    
    try {
        const amount  = await knex('users').where({email}).orWhere({phone}).first()

        if (amount) return res.status(404).json( "Já existe usuário cadastrado com o e-mail ou telefone informado.");

        const hash = await bcrypt.hash(password, 10)

        const user  = await knex('users').insert({name, phone, email, password: hash})
        
        if (!user) return res.status(400).json("Não foi possivel cadastrar o usuário");

        return res.status(200).json("Usuário cadastrado com sucesso")
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    cadastre
}