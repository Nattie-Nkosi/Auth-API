import expres from 'express';

const router = expres.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi There from routes folder')
});

export { router as signinUserRouter };