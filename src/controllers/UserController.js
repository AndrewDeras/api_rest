import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  // index

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Id não enviado'] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe.'] });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Id não enviado'] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe.'] });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();

/*
  index -> lista todos os usuarios
  store/create -> cria um novo usuário
  delete -> apaga um usuário
  show -> mostra um usuário
  update -> atualiza um usuário
*/
