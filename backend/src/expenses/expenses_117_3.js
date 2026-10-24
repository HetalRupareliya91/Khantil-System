// Khantil System - Backend :: Expenses module (PR 117, step 3)
const express = require('express');
const router = express.Router();

const expensesStore = [];

router.get('/', (req, res) => res.json({ data: expensesStore, count: expensesStore.length }));

router.get('/:id', (req, res) => {
  const item = expensesStore.find(x => x.id === req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Expenses not found' });
});

router.post('/', (req, res) => {
  const item = { id: String(Date.now()), ...req.body, createdAt: new Date().toISOString() };
  expensesStore.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const i = expensesStore.findIndex(x => x.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Expenses not found' });
  expensesStore.splice(i, 1);
  res.status(204).end();
});

module.exports = router;
