const verifyFields = async (req, res, next) => {
  const { address, ...project } = req.body;
  const { city, state, country, zipcode } = address;

  if (!project.name.trim()) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }
  if (!project.description.trim()) {
    return res.status(400).json({ error: 'Descrição é obrigatória' });
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

module.exports = verifyFields;
