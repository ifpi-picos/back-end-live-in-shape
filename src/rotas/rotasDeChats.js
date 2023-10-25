import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get chats.');
});

router.post('/', (req, res) => {
  res.send('Post chats!');
});
router.put('/:id', (req, res) => {
  res.send('Put chat!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete chat!');
});

export default router;
