import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Usar o authMiddleware aqui fará com que as próximas rotas sejam autenticadas.
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/file', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
