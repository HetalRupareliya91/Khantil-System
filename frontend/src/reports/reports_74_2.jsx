// Khantil System - Frontend :: Reports view (PR 74, step 2)
import React, { useEffect, useState } from 'react';

export default function ReportsPage742() {
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
