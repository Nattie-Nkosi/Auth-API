import expres from 'express';

const router = expres.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi There from routes folder')
});

export { router as currentUserRouter };