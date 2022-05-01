const knex = require('../../database/connection');

const getUserProjects = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await knex('users').where({ id }).first();
    if (!user) return res.status(400).json('Usuário não encontrado');

    const projects = await knex('projects').where({ user_id: id });
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getUserProjects;
