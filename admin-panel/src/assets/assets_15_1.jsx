// Khantil System - Admin Panel :: Assets management (PR 15, step 1)
import React, { useState } from 'react';

export default function AdminAssets151() {
  const [form, setForm] = useState({ name: '', status: 'active' });

  const save = async () => {
    await fetch('/api/assets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', status: 'active' });
  };

  return (
    <div className="admin-card">
      <h3>Manage Assets</h3>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button onClick={save}>Save</button>
    </div>
  );
}
