// Khantil System - Frontend :: Recruitment view (PR 26, step 4)
import React, { useEffect, useState } from 'react';

export default function RecruitmentPage264() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/recruitment')
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading recruitment...</p>;
  return (
    <section className="hr-recruitment">
      <h2>Recruitment</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name || i.id}</li>)}</ul>
    </section>
  );
}
