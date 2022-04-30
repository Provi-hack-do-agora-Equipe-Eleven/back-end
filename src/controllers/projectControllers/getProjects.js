const knex = require('../../../database/connection');

const getProjects = async (req, res) => {
  try {
    const projects = await knex
      .select('id', 'name', 'description')
      .from('projects');
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProjects;
