"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _UserModel2.default.create(req.body);

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
      const users = await _UserModel2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const user = await _UserModel2.default.findByPk(req.userId);
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({ errors: ['Id não enviado'] });
      }

      const user = await _UserModel2.default.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe.'] });
      }

      const updatedUser = await user.update(req.body);
      const { id: userId, nome, email } = updatedUser;

      return res.json({ userId, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({ errors: ['Id não enviado'] });
      }

      const user = await _UserModel2.default.findByPk(id);
      const { id: userId, nome, email } = user;

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe.'] });
      }

      await user.destroy();

      return res.json({ userId, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new UserController();

/*
  index -> lista todos os usuarios
  store/create -> cria um novo usuário
  delete -> apaga um usuário
  show -> mostra um usuário
  update -> atualiza um usuário
*/
