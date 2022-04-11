import expres, { Request, Response } from 'express';

const router = expres.Router();

router.post('/api/users/signout', (req: Request, res: Response) => {
  req.session = null;

  res.send({});
});

export { router as signoutUserRouter };