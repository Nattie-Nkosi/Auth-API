import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);  // 201 -> Created
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'asdfasdfasd',
      password: 'password'
    })
    .expect(400); // 400 -> Bad Request
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400); // 400 -> Bad Request
});

it('returns a 400 with a missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
    })
    .expect(400); // 400 -> Bad Request

  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'asdfasdf'
    })
    .expect(400); // 400 -> Bad Request
});