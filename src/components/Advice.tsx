'use client';

import { fetchAdvice } from '@/lib/advice';
import { useEffect, useState } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState({ id: 0, advice: '' });
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAdvice();

      setAdvice(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="relative bg-secondary/50 p-4 rounded-[8px] text-center"
      onClick={() => {
        fetchAdvice().then(data => setAdvice(data));
      }}
    >
      <div className="text-muted-foreground">Tip #{advice?.id}</div>
      <p>{advice?.advice}</p>
    </div>
  );
};

export default Advice;
