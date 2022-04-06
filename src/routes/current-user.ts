import expres from 'express';
import jwt from 'jsonwebtoken';

const router = expres.Router();

router.get('/api/users/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT!
    );
    res.send({ currentUser: payload });
  } catch (err) {
    res.send({ currentUser: null })
  }

});

export { router as currentUserRouter };