// Khantil System - Backend :: Employees module (PR 61, step 1)
const express = require('express');
const router = express.Router();

const employeesStore = [];

router.get('/', (req, res) => res.json({ data: employeesStore, count: employeesStore.length }));

router.get('/:id', (req, res) => {
  const item = employeesStore.find(x => x.id === req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Employees not found' });
});

router.post('/', (req, res) => {
  const item = { id: String(Date.now()), ...req.body, createdAt: new Date().toISOString() };
  employeesStore.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const i = employeesStore.findIndex(x => x.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Employees not found' });
  employeesStore.splice(i, 1);
  res.status(204).end();
});

module.exports = router;
