import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';
import Photo from '../models/PhotoModel';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
