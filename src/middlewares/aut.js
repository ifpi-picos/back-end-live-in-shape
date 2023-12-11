import jwt from 'jsonwebtoken';
const chaveSecretaToken = '1skljaksdj9983498327453lsldkjf';

function validaToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  console.log('bearerToken', bearerToken);
  if (!bearerToken) {
    return res.status(403).send({
      auth: false,
      message: 'Token não informado.',
    });
  }

  const token = bearerToken.split(' ')[1];
  console.log('token', token);

  jwt.verify(token, chaveSecretaToken, (error, decoded) => {
    if (error) {
      return res.status(500).send({
        auth: false,
        message: 'Falha na autenticação. Error -> ' + error,
      });
    }
    req.userId = decoded.id;
    next();
  });
}

export default validaToken;