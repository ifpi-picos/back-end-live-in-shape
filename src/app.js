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
  app.get('/test-auth', validaToken, (req, res) => {
    res.send('Autorizado com sucesso!');
  });






  const chaveSecretaToken = '1skljaksdj9983498327453lsldkjf';

app.use(express.json());

app.post('/salvarHorarios', validaToken, async (req, res) => {
    const { date, inicio, fim, profissional } = req.body;

    try {
        // Adicionar a disponibilidade no banco de dados
        await prisma.disponibilidade.create({
            data: {
                diaSemana: date,
                horaInicio: inicio,
                horaFim: fim,
                profissional,
            },
        });

        res.status(200).json({ message: 'Horário salvo com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar o horário.' });
    }
});

app.get('/obterHorarios', async (req, res) => {
    try {
        // Recuperar as disponibilidades do banco de dados
        const disponibilidades = await prisma.disponibilidade.findMany();
        res.status(200).json({ disponibilidades });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar disponibilidades.' });
    }
});

function validaToken(req, res, next) {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(403).send({ auth: false, message: 'Token não informado.' });
    }

    const token = bearerToken.split(' ')[1];
    jwt.verify(token, chaveSecretaToken, (error, decoded) => {
        if (error) {
            return res.status(500).send({ auth: false, message: 'Falha na autenticação.' });
        }
        req.userId = decoded.id;
        next();
    });
}
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
