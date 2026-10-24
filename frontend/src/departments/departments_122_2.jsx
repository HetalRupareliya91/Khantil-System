// Khantil System - Frontend :: Departments view (PR 122, step 2)
import React, { useEffect, useState } from 'react';

export default function DepartmentsPage1222() {
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
