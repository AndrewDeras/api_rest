import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
