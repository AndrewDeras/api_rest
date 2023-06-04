import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }

    if (!(await user.validatePassword(password))) {
      return res.status(401).json({
        errors: ['Senha inválida.'],
      });
    }

    const { id, nome, email: userEmail } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_DURATION,
    });

    return res.json({ token, user: { id, nome, userEmail } });
  }
}

export default new TokenController();
