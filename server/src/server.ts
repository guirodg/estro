import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json()); //Exoress entender requisicao body
app.use(routes);


app.listen(3333);

