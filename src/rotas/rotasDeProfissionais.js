import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get profissionais.');
});

router.post('/', (req, res) => {
  res.send('Post profissionais!');
});
router.put('/:id', (req, res) => {
  res.send('Put profissional!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete profissional!');
});

export default router;
