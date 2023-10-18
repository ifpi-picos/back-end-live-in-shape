import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get usuários.');
});

router.post('/', (req, res) => {
  res.send('Post usuário!');
});
router.put('/:id', (req, res) => {
  res.send('Put usuário!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete usuário!');
});

export default router;
