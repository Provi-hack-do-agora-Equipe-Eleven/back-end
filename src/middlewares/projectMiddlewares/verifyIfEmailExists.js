const knex = require('../../database/connection');

const verifyIfEmailExists = async (req, res, next) => {
  const { address, ...project } = req.body;
  const { email } = project;
  if(email){
    const verifyEmail = await knex('projects').where({ email }).first();
    if (verifyEmail) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }
  }
  next();
};

module.exports = verifyIfEmailExists;