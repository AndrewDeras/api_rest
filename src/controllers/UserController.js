import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
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
