const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', async (req, res, next) => {
  try {
    res.json({ message: 'API is working...', status: 200 }).status(200);
  } catch (e) {
    res.sendStatus(500);
  }
});
app.post('/users/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.sendStatus(400);
      return;
    }
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/users/read', async (req, res, next) => {
  try {
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/users/search/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.sendStatus(400);
      return;
    }
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});

app.post('/users/add', async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      address,
      post_code,
      phone_number,
      email,
      username,
      password,
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !address ||
      !post_code ||
      !phone_number ||
      !email ||
      !username ||
      !password
    ) {
      res.sendStatus(400);
      return;
    }
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});
app.patch('/users/edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.sendStatus(400);
      return;
    }
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});
app.delete('/users/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.sendStatus(400);
      return;
    }
    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = app;
