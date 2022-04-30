const knex = require('../../database/connection');

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const addressDeleted = await knex('adresses')
      .where({ project_id: id })
      .del();
    if (!addressDeleted) {
      return res.status(404).json({ error: 'Endereço não pode ser deletado' });
    }

    const projectDeleted = await knex('projects').where({ id }).del();
    if (!projectDeleted) {
      return res.status(404).json({ error: 'Projeto não pode ser deletado' });
    }

    return res.status(200).json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProject;
