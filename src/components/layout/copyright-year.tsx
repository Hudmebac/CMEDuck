"use client";

import { useState, useEffect } from 'react';

export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // Return null or a placeholder until the year is determined on the client
    // This avoids rendering server-calculated year which might differ by a few ms on New Year's Eve
    return new Date().getFullYear(); // Fallback to current year on server/initial render if needed, though useEffect will update.
                                    // Or return a placeholder like '...'
  }

  return <>{year}</>;
}
