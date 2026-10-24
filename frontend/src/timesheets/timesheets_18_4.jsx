// Khantil System - Frontend :: Timesheets view (PR 18, step 4)
import React, { useEffect, useState } from 'react';

export default function TimesheetsPage184() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/timesheets')
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading timesheets...</p>;
  return (
    <section className="hr-timesheets">
      <h2>Timesheets</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name || i.id}</li>)}</ul>
    </section>
  );
}
