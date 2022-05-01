const knex = require('../../database/connection');

const verifyIfProjectExists = async (req, res, next) => {
  const { id } = req.params;
  const verifyProject = await knex('projects').where({ id }).first();
  if (!verifyProject) {
    return res.status(400).json({ error: 'Projeto não existe' });
  }
  next();
};

module.exports = verifyIfProjectExists;