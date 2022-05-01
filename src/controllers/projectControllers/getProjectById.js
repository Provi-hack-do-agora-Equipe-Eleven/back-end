const knex = require('../../database/connection');

const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await knex('projects').where({ id });
    return res.status(200).json({ project: project });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProjectById;
