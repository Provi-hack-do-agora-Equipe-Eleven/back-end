const knex = require('../../database/connection');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../service/jwtSecret');

const login = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await knex('users').where({ email }).first();
    const token = jwt.sign(
      {
        id: user.id,
      },
      jwtSecret,
      {
        expiresIn: '6h',
      },
    );
    const { password: userPassword, ...registeredUser } = user;

    return res.json({ user:registeredUser, token });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = login;
