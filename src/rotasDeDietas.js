import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get dietas.');
});

router.post('/', (req, res) => {
  res.send('Post dietas!');
});
router.put('/:id', (req, res) => {
  res.send('Put dieta!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete dieta!');
});

export default router;
