const supertest = require('supertest');
const app = require('./db.js');

describe('POST /users/login', () => {
  describe('given a username and password', () => {
    test('should with a 200 status code', async () => {
      const response = await supertest(app)
        .post('/users/login')
        .send({ username: 'username', password: 'username' });
      expect(response.statusCode).toBe(200);
    });
    test('should specify json in the content type header', async () => {
      const response = await supertest(app)
        .post('/users/login')
        .send({ username: 'username', password: 'username' });
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    describe('when the username is exists and the password is missing', () => {
      test('should respond with a status code of 400', async () => {
        const response = await supertest(app)
          .post('/users/login')
          .send({ username: 'username' });
        expect(response.statusCode).toBe(400);
      });
    });
    describe('when the password is exists and the username is missing', () => {
      test('should respond with a status code of 400', async () => {
        const response = await supertest(app)
          .post('/users/login')
          .send({ password: 'password' });
        expect(response.statusCode).toBe(400);
      });
    });
  });
});

describe('GET /users/read', () => {
  describe('select all users data', () => {
    test('should respond with a status code of 200', async () => {
      const response = await supertest(app).get('/users/read');
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('GET /users/search/:id', () => {
  describe('should filter specific data by id', () => {
    test('should respond with a status code of 200', async () => {
      const response = await supertest(app)
        .get('/users/search/:id')
        .send({ id: 'id' });
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('POST /users/add', () => {
  describe('Able to add new record', () => {
    test('should with a 200 status code', async () => {
      const response = await supertest(app).post('/users/add').send({
        first_name: 'first_name',
        last_name: 'last_name',
        address: 'address',
        post_code: 'post_code',
        phone_number: 'phone_number',
        email: 'email',
        username: 'username',
        password: 'password',
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('GET /users/edit/:id', () => {
  describe('should edit data by id', () => {
    test('should respond with a status code of 200', async () => {
      const response = await supertest(app)
        .patch('/users/edit/:id')
        .send({ id: 'id' });
      expect(response.statusCode).toBe(200);
    });
  });
});
describe('GET /users/delete/:id', () => {
  describe('should edit data by id', () => {
    test('should respond with a status code of 200', async () => {
      const response = await supertest(app)
        .delete('/users/delete/:id')
        .send({ id: 'id' });
      expect(response.statusCode).toBe(200);
    });
  });
});
