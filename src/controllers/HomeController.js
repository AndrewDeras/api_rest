import Aluno from '../models/AlunoModel';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Vini',
      sobrenome: 'Oliveira',
      email: 'avini@email.com',
      idade: 22,
      peso: 60.5,
      altura: 1.74,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
