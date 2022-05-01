const knex = require('../../database/connection');

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { id: user_id } = req.user;

  try {
    const project = await knex('projects').where({ id, user_id }).first();
    if(!project) return res.status(401).json('Você so pode apagar um projeto que você criou');

    const addressDeleted = await knex('adresses')
      .where({ project_id: id })
      .del();
    if (!addressDeleted) {
      return res.status(404).json({ error: 'Endereço não pode ser deletado' });
    }

    const projectDeleted = await knex('projects').where({ id, user_id }).del();
    if (!projectDeleted) {
      return res.status(404).json({ error: 'Projeto não pode ser deletado' });
    }

    return res.status(200).json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProject;
