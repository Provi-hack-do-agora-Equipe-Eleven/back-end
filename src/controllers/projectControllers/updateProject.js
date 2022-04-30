const knex = require('../../../database/connection');

const updateProject = async (req, res) => {
  const { address, ...project } = req.body;
  const { id } = req.params;

  try {
    const [projectUpdated] = await knex('projects')
      .where({ id })
      .update(project)
      .returning(['id', 'name', 'description']);

    if (!projectUpdated) {
      return res.status(404).json({ error: 'Projeto não pode ser atualizado' });
    }

    const [addressUpdated] = await knex('adresses')
      .where({ project_id: id })
      .update(address);

    if (!addressUpdated) {
      return res
        .status(404)
        .json({ error: 'Endereço não pode ser atualizado' });
    }

    return res.status(200).json({ project: projectUpdated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProject;
