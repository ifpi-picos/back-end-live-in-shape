import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get clientes.');
});

router.post('/', (req, res) => {
  res.send('Post clientes!');
});
router.put('/:id', (req, res) => {
  res.send('Put cliente!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete cliente!');
});

export default router;
