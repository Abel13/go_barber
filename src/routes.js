import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Abel Dutra',
    email: 'abel.o.d@outlook.com',
    password_hash: 'JJKASDasdaasd9as0',
  });

  return res.json(user);
});

export default routes;
