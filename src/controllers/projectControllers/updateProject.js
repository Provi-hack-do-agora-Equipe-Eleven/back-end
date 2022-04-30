const knex = require('../../database/connection');

const updateProject = async (req, res) => {
  const { address, ...project } = req.body;
  const { id } = req.params;

  if(!Object.keys(req.body).length){
    return res.status(400).json({ error: 'Não pode enviar dados vazios' });
  }
  
  try {
    if (Object.keys(project).length) {
      const [projectUpdated] = await knex('projects')
        .where({ id })
        .update(project)
        .returning(['id', 'name', 'description']);

      if (!projectUpdated) {
        return res.status(404).json({ error: 'Projeto não pode ser atualizado' });
      }
    }

    if (Object.keys(address).length) {
      const addressUpdated = await knex('adresses')
        .where({ project_id: id })
        .update(address);

      if (!addressUpdated) {
        return res.status(404).json({ error: 'Endereço não pode ser atualizado' });
      }
    }

    return res.status(200).json({ message: 'Projeto atualizado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProject;
