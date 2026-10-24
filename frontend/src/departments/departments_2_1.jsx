// Khantil System - Frontend :: Departments view (PR 2, step 1)
import React, { useEffect, useState } from 'react';

export default function DepartmentsPage21() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/departments')
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading departments...</p>;
  return (
    <section className="hr-departments">
      <h2>Departments</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name || i.id}</li>)}</ul>
    </section>
  );
}
