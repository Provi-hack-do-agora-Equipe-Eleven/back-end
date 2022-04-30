const knex = require('../database/connection');

const getProjects = async (req, res) => {
  try {
    const projects = await knex.select('id', 'name', 'description').from('projects');
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProject = async (req, res) => {
  const { address, ...project } = req.body;
  project.user_id = req.user.id;

  try {
    const [projectCreated] = await knex('projects').insert(project).returning('*');
    if (!projectCreated) {
      return res.status(404).json({ error: 'Projeto não pode ser criado' });
    }

    address.project_id = projectCreated.id;

    const [addressCreated] = await knex('adresses').insert(address).returning('*');
    if (!addressCreated) {
      return res.status(404).json({ error: 'Projeto não pode ser criado' });
    }

    const { id, project_id, ...projectAddress } = addressCreated;
    projectCreated.address = projectAddress;

    return res.status(201).json({ project: projectCreated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProject = async (req, res) => {
  const { address, ...project } = req.body;
  const { id } = req.params;

  try {
    const [ projectUpdated ] = await knex('projects')
      .where({ id })
      .update(project)
      .returning('*');

    if (!projectUpdated) {
      return res.status(404).json({ error: 'Projeto não pode ser atualizado' });
    }

    const [ addressUpdated ] = await knex('adresses')
      .where({ project_id: id })
      .update(address)
      .returning('*');

    if (!addressUpdated) {
      return res.status(404).json({ error: 'Endereço não pode ser atualizado' });
    }

    const { id: addressID, project_id, ...projectAddress } = addressUpdated;
    projectUpdated.address = projectAddress;

    return res.status(200).json({ project: projectUpdated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const addressDeleted = await knex('adresses').where({ project_id: id }).del();
    if(!addressDeleted) {
      return res.status(404).json({ error: 'Endereço não pode ser deletado' });
    }

    const projectDeleted = await knex('projects').where({ id }).del();
    if(!projectDeleted) {
      return res.status(404).json({ error: 'Projeto não pode ser deletado' });
    }

    return res.status(200).json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getUserProjects = async (req, res) => {
  const { id } = req.user;

  try {
    const projects = await knex('projects').where({ user_id: id });
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getProjects, createProject, updateProject, deleteProject, getUserProjects };
