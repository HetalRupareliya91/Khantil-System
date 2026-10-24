// Khantil System - Backend :: Auth module (PR 53, step 4)
const express = require('express');
const router = express.Router();

const authStore = [];

router.get('/', (req, res) => res.json({ data: authStore, count: authStore.length }));

router.get('/:id', (req, res) => {
  const item = authStore.find(x => x.id === req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Auth not found' });
});

router.post('/', (req, res) => {
  const item = { id: String(Date.now()), ...req.body, createdAt: new Date().toISOString() };
  authStore.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const i = authStore.findIndex(x => x.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Auth not found' });
  authStore.splice(i, 1);
  res.status(204).end();
});

module.exports = router;
