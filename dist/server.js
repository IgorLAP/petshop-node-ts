"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const index_1 = __importDefault(require("./routes/index"));
const searchRoutes_1 = __importDefault(require("./routes/searchRoutes"));
//Instanciando o dotenv
dotenv_1.default.config();
//Instanciando o express
const server = (0, express_1.default)();
//Setando o template engine
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
//Setando a pasta estática
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
//Rotas
server.use(index_1.default);
server.use(searchRoutes_1.default);
server.use((req, res) => {
    res.render('pages/notFound');
});
//Rodando o servidor
server.listen(process.env.PORT);
