import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import alunosRoutes from './routes/alunosRouter';
import photoRoutes from './routes/photoRoutes';
import tokenRoutes from './routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(delay(2000));
    this.app.use(cors());
    this.app.use(helmet({ crossOriginEmbedderPolicy: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunosRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
