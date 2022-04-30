const knex = require('../../database/connection');

const createProject = async (req, res) => {
  const { address, ...project } = req.body;
  project.user_id = req.user.id;

  try {
    const [projectCreated] = await knex('projects')
      .insert(project)
      .returning(['id', 'name', 'description']);
    if (!projectCreated) {
      return res.status(404).json({ error: 'Projeto não pode ser criado' });
    }

    address.project_id = projectCreated.id;

    const [addressCreated] = await knex('adresses')
      .insert(address)
      .returning('*');
    if (!addressCreated) {
      return res.status(404).json({ error: 'Projeto não pode ser criado' });
    }

    return res.status(201).json({ project: projectCreated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createProject;
