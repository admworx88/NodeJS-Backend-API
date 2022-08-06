const express = require('express');
const app = express();
const db = require('../db');
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
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      res.sendStatus(400);
      return;
    }
    let result = await db.login(username, password);
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/users/read', async (req, res, next) => {
  try {
    let result = await db.all();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/users/search/:id', async (req, res, next) => {
  try {
    let result = await db.one(req.params.id);
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.post('/users/add', async (req, res, next) => {
  try {
    let users = req.body;
    let result = await db.add(users);
    if (result.affectedRows == 0)
      res.json({ message: 'User unsuccessfully added...' });
    else res.json({ message: 'User added successfully...' });
  } catch (e) {
    res.sendStatus(500);
  }
});
app.patch('/users/edit/:id', async (req, res, next) => {
  try {
    let users = req.body;
    let result = await db.edit(users, req.params.id);
    if (result.affectedRows == 0) res.json({ message: 'User ID not found...' });
    else res.json({ message: 'User updated successfully...' });
  } catch (e) {
    res.sendStatus(500);
  }
});
app.delete('/users/delete/:id', async (req, res, next) => {
  try {
    let result = await db.delete(req.params.id);
    if (result.affectedRows == 0) res.json({ message: 'User ID not found...' });
    else res.json({ message: 'User deleted successfully' });
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = app;
