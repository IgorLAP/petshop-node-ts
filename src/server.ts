import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import MainRoutes from './routes/index';
import SearchRoutes from './routes/searchRoutes';

//Instanciando o dotenv
dotenv.config();

//Instanciando o express
const server = express();

//Setando o template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Setando a pasta estática
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(MainRoutes);
server.use(SearchRoutes);
server.use((req: Request, res: Response)=>{
    res.render('pages/notFound');
})

//Rodando o servidor
server.listen(process.env.PORT);