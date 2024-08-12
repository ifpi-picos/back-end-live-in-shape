import cors from 'cors';
import Express from 'express';
import logger from 'morgan';
import aut from './middlewares/aut.js';
import cadastro from './rotas/cadastro.js';
import login from './rotas/login.js';
import rotaGetDeClientes from './rotas/rotaGetDeClientes.js';
import rotasDeChats from './rotas/rotasDeChats.js';
import rotasDeClientes from './rotas/rotasDeClientes.js';
import rotasDeConteudos from './rotas/rotasDeConteudos.js';
import rotasDeDietas from './rotas/rotasDeDietas.js';
import rotasDeExercicios from './rotas/rotasDeExercicios.js';
import rotasDeProfissionais from './rotas/rotasDeProfissionais.js';
import salvarHorarios from './rotas/salvarHorarios.js';

const app = Express();
app.use(logger('dev'));

// Configuração do CORS
app.use(cors({
  origin: 'https://goodshape.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Online');
});

app.use('/cadastro', cadastro);
app.use('/login', login);
app.use('/clientes', rotaGetDeClientes);
app.use(aut); // middleware de autenticação

// Colocar abaixo todas as rotas privadas que precisam de autenticação
app.use('/clientes', rotasDeClientes);
app.use('/exercicios', rotasDeExercicios);
app.use('/dietas', rotasDeDietas);
app.use('/profissionais', rotasDeProfissionais);
app.use('/conteudos', rotasDeConteudos);
app.use('/chats', rotasDeChats);
app.use('/salvarHorarios', salvarHorarios);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
