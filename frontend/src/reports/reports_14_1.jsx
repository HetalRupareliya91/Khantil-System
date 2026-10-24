// Khantil System - Frontend :: Reports view (PR 14, step 1)
import React, { useEffect, useState } from 'react';

export default function ReportsPage141() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reports')
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading reports...</p>;
  return (
    <section className="hr-reports">
      <h2>Reports</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name || i.id}</li>)}</ul>
    </section>
  );
}
