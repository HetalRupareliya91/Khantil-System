// Khantil System - Backend :: Documents module (PR 49, step 4)
const express = require('express');
const router = express.Router();

const documentsStore = [];

router.get('/', (req, res) => res.json({ data: documentsStore, count: documentsStore.length }));

router.get('/:id', (req, res) => {
  const item = documentsStore.find(x => x.id === req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Documents not found' });
});

router.post('/', (req, res) => {
  const item = { id: String(Date.now()), ...req.body, createdAt: new Date().toISOString() };
  documentsStore.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const i = documentsStore.findIndex(x => x.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Documents not found' });
  documentsStore.splice(i, 1);
  res.status(204).end();
});

module.exports = router;
