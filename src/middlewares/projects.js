const knex = require('../database/connection');

const verifyFiels = async (req, res, next) => {
  const { address, ...project } = req.body;
  const { city, state, country, zipcode } = address;

  if (!project.name.trim()) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }
  if (!project.description.trim()) {
    return res.status(400).json({ error: 'Descrição é obrigatória' });
  }
  if (!project.owner_name.trim()) {
    return res.status(400).json({ error: 'Nome do dono é obrigatório' });
  }
  if (!project.owner_email.trim()) {
    return res.status(400).json({ error: 'Email do dono é obrigatório' });
  }
  if (!project.created_at.trim()) {
    return res.status(400).json({ error: 'Data de criação é obrigatória' });
  }
  if (!project.modified_at.trim()) {
    return res.status(400).json({ error: 'Data de modificação é obrigatória' });
  }
  if (!project.project_image.trim()) {
    return res.status(400).json({ error: 'Imagem é obrigatória' });
  }
  if (!city.trim()) {
    return res.status(400).json({ error: 'Cidade não informada' });
  }
  if (!state.trim()) {
    return res.status(400).json({ error: 'Estado não informado' });
  }
  if (!country.trim()) {
    return res.status(400).json({ error: 'País não informado' });
  }
  if (!zipcode.trim()) {
    return res.status(400).json({ error: 'CEP não informado' });
  }

  next();
};

const verifyIfEmailExists = async (req, res, next) => {
  const { address, ...project } = req.body;
  const { email } = project;
  const verifyEmail = await knex('users').where({ email }).first();
  if (verifyEmail) {
    return res.status(400).json({ error: 'Email já cadastrado' });
  }
  next();
};

const verifyIfProjectExists = async (req, res, next) => {
  const { id } = req.params;
  const verifyProject = await knex('projects').where({ id }).first();
  if (!verifyProject) {
    return res.status(400).json({ error: 'Projeto não existe' });
  }
  next();
};

module.exports = { verifyFiels, verifyIfEmailExists, verifyIfProjectExists };
