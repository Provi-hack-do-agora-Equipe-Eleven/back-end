const bcrypt = require('bcrypt');
const knex = require('../../database/connection');

const signUp = async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await knex('users').insert({
      name,
      phone,
      email,
      password: hash,
    });

    if (!user) return res.status(400).json('Não foi possivel cadastrar o usuário');
     
    return res.status(200).json('Usuário cadastrado com sucesso');
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = signUp;
