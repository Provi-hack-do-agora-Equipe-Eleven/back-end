const knex = require('../../database/connection');

const getProjects = async (req, res) => {
  try {
    const projects = await knex
      .select('p.id', 'p.name', 'p.description','p.project_image', 'a.city', 'a.state')
      .from('projects as p')
      .leftJoin('adresses as a', 'a.project_id', 'p.id');

    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProjects;
