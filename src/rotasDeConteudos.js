import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get conteúdos.');
});

router.post('/', (req, res) => {
  res.send('Post conteúdos!');
});
router.put('/:id', (req, res) => {
  res.send('Put conteúdo!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete conteúdo!');
});

export default router;
