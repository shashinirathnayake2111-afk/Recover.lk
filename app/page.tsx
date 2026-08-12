'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
    </main>
  );
}