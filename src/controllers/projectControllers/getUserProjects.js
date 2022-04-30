const knex = require('../../../database/connection');

const getUserProjects = async (req, res) => {
  const { id } = req.user;

  try {
    const projects = await knex
      .select('id', 'name', 'description')
      .from('projects')
      .where({ user_id: id });

    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserProjects;
