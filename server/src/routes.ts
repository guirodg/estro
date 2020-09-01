import express from 'express';

import MusicController from './controllers/MusicController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const musicControllers = new MusicController
const connectionsController = new ConnectionsController();

routes.get('/musics', musicControllers.index);
routes.post('/musics', musicControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;