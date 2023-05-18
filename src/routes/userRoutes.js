import { Router } from 'express';

import userController from '../controllers/UserController';

// middlewares

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não precisaria em um sistema
// router.get('/id', loginRequired, userController.show); // Lista um usuário
// router.get('/', loginRequired, userController.index); // Lista de usuários

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
