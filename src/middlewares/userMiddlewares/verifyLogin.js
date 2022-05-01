const knex = require('../../database/connection');
const bcrypt = require('bcrypt');

const verifyLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json('Email é obrigatório');
  if (!password) return res.status(400).json('Senha é obrigatório');
  try {
    const user = await knex('users').where({ email }).first();
    if (!user) return res.status(400).json('Usuário não encontrado');

    const verifiedPassword = await bcrypt.compare(password, user.password);
    if (!verifiedPassword) return res.status(400).json('Dados não conferem');
  } catch (error) {
    return res.status(500).json(error.message);
  }

  next();
};

module.exports = verifyLogin;
