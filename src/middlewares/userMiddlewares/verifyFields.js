const knex = require('../../database/connection');

const verifyFields = async (req, res, next) => {
  const { name, phone, email, password } = req.body;

  if (!name) return res.status(400).json('O campo nome é obrigatório');
  if (!phone) return res.status(400).json('O campo senha é obrigatório');
  if (!email) return res.status(400).json('O campo email é obrigatório');
  if (!password) return res.status(400).json('O campo senha é obrigatório');
  try {
    const user = await knex('users').where({ email }).first();
    if (user) {
      return res.status(404).json('Já existe usuário cadastrado com o e-mail ou telefone informado.');
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
  next();
};

module.exports = verifyFields;
