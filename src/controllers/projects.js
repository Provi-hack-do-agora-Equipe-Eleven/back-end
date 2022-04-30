const knex = require('../database/connection');

const getProjects = async (req, res) => {
  try {
    const projects = await knex('projects');
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProject = async (req, res) => {
  const data = req.body;
  const { id: user_id } = req.user;

  try {
    const [project] = await knex('projects')
      .insert({
        name: data.name,
        email: data.email,
        owner_name: data.owner_name,
        owner_email: data.owner_email,
        website: data.website,
        pix: data.pix,
        description: data.description,
        instagram: data.instagram,
        created_at: data.created_at,
        modified_at: data.modified_at,
        project_image: data.project_image,
        cnpj: data.cnpj,
        user_id,
      })
      .returning('*');

    const { city, state, street, zipcode, country, complement } = data.address;
    await knex('adresses').insert({
      city,
      state,
      street,
      zipcode,
      country,
      complement,
      project_id: project.id,
    });

    const projectCreated = await knex
      .select(
        'p.id',
        'p.name',
        'p.description',
        'a.city',
        'a.state',
        'a.country',
      )
      .from('projects AS p')
      .leftJoin('adresses AS a', 'a.project_id', 'p.id')
      .where({ 'p.id': project.id })
      .first();

    return res.status(201).json({ project: projectCreated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProject = async (req, res) => {
  const { address, ...project } = req.body;
  const { id } = req.params;
  
  try {
    const updatedProject = await knex('projects').where({ id }).update(project);
    if(!updatedProject) return res.status(404).json({ error: 'Projeto não pode ser atualizado' });
    
    const updatedAddress = await knex('adresses').where({ project_id: id }).update(address);
    if(!updatedAddress) return res.status(404).json({ error: 'Endereço não pode ser atualizado' });

    const projectUpdated = await knex('projects')
      .select('p.id', 'p.name', 'p.description', 'a.city', 'a.state', 'a.country')
      .from('projects AS p')
      .leftJoin('adresses AS a', 'a.project_id', 'p.id')
      .where({ 'p.id': id })
      .first();

    return res.status(200).json({ project: projectUpdated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getProjects, createProject, updateProject };
