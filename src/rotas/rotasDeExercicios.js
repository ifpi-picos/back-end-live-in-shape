import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get exercícios.');
});

router.post('/', (req, res) => {
  res.send('Post exercícios!');
});
router.put('/:id', (req, res) => {
  res.send('Put exercício!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete exercício!');
});

export default router;
