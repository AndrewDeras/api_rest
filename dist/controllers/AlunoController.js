"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _AlunoModel = require('../models/AlunoModel'); var _AlunoModel2 = _interopRequireDefault(_AlunoModel);
var _PhotoModel = require('../models/PhotoModel'); var _PhotoModel2 = _interopRequireDefault(_PhotoModel);

class AlunoController {
  async index(req, res) {
    const alunos = await _AlunoModel2.default.findAll({
      attributes: ['id', 'nome', 'idade', 'email'],
      order: [['id', 'DESC'], [_PhotoModel2.default, 'id', 'DESC']],
      include: {
        model: _PhotoModel2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.send(alunos);
  }

  async store(req, res) {
    try {
      const novoAluno = await _AlunoModel2.default.create(req.body);

      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(id, {
        attributes: ['id', 'nome', 'idade', 'email'],
        order: [['id', 'DESC'], [_PhotoModel2.default, 'id', 'DESC']],
        include: {
          model: _PhotoModel2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      await aluno.destroy();

      return res.json({ deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const updatedAluno = await aluno.update(req.body);
      const { id: alunoId, nome, email } = updatedAluno;

      return res.json({ alunoId, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new AlunoController();
