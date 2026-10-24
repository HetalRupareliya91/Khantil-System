// Khantil System - Frontend :: Onboarding view (PR 110, step 2)
import React, { useEffect, useState } from 'react';

export default function OnboardingPage1102() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/onboarding')
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading onboarding...</p>;
  return (
    <section className="hr-onboarding">
      <h2>Onboarding</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name || i.id}</li>)}</ul>
    </section>
  );
}
