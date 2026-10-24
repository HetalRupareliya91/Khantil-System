// Khantil System - Backend :: Payroll module (PR 85, step 1)
const express = require('express');
const router = express.Router();

const payrollStore = [];

router.get('/', (req, res) => res.json({ data: payrollStore, count: payrollStore.length }));

router.get('/:id', (req, res) => {
  const item = payrollStore.find(x => x.id === req.params.id);
  return item ? res.json(item) : res.status(404).json({ error: 'Payroll not found' });
});

router.post('/', (req, res) => {
  const item = { id: String(Date.now()), ...req.body, createdAt: new Date().toISOString() };
  payrollStore.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const i = payrollStore.findIndex(x => x.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Payroll not found' });
  payrollStore.splice(i, 1);
  res.status(204).end();
});

module.exports = router;
