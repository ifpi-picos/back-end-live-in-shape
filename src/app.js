import Express from 'express';
import logger from 'morgan';
import rotasDeClientes from './rotas/rotasDeClientes.js';
import rotaGetDeClientes from './rotas/rotaGetDeClientes.js';
import rotasDeExercicios from './rotas/rotasDeExercicios.js';
import rotasDeDietas from './rotas/rotasDeDietas.js';
import rotasDeProfissionais from './rotas/rotasDeProfissionais.js';
import rotasDeConteudos from './rotas/rotasDeConteudos.js';
import rotasDeChats from './rotas/rotasDeChats.js';
import cors from 'cors';
import cadastro from './rotas/cadastro.js';
import login from './rotas/login.js';
import aut from './middlewares/aut.js';

const app = Express();
app.use(logger('dev'));
app.use(cors());
app.use(Express.json())

app.use('/cadastro', cadastro);
app.use('/login', login);
app.use('/clientes', rotaGetDeClientes);
app.use(aut); // middleware de autenticacao
//colocar abaixo todas as rotas privadas que precisam de autenticacao

app.use('/clientes', rotasDeClientes);
app.use('/exercicios', rotasDeExercicios);
app.use('/dietas', rotasDeDietas);
app.use('/profissionais', rotasDeProfissionais);
app.use('/conteudos', rotasDeConteudos);
app.use('/chats', rotasDeChats);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
