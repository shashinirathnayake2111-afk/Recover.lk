'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const pathname = usePathname();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 h-16 w-full bg-slate-800/80 shadow-lg shadow-black/20 text-white">
            <div className="flex items-center gap-3">
                <Image className="rounded-full h-11 w-11 ml-4" src="/images/logo-2.png" alt="Logo" width={40} height={40} priority/>
                <span className="text-xl font-bold text-slate-300/80 -ml-1.5">Recover<span className="text-emerald-500/80">.lk</span></span>
            </div>
            <div className="flex items-center gap-8 font-medium text-base text-slate-400 tracking-wide">
                <Link href="/" className={`px-2 py-1 transition-all ${ pathname === '/' ? 'text-emerald-600 border-b-2 border-emerald-600/80' : 'hover:text-emerald-600 transition-colors'}`}>Home</Link>
                <Link href="/relief" className={`px-2 py-1 transition-all ${ pathname === '/relief' ? 'text-emerald-600 border-b-2 border-emerald-600/80' : 'hover:text-emerald-600 transition-colors'}`}>Relief</Link>
                <Link href="/triggers" className={`px-2 py-1 transition-all ${ pathname === '/triggers' ? 'text-emerald-600 border-b-2 border-emerald-600/80' : 'hover:text-emerald-600 transition-colors'}`}>Trigger Log</Link>
                <Link href="/specialists" className={`px-2 py-1 transition-all ${ pathname === '/specialists' ? 'text-emerald-600 border-b-2 border-emerald-600/80' : 'hover:text-emerald-600 transition-colors'}`}>Specialist</Link>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className={`relative inline-flex h-11 w-24 items-center rounded-lg p-1 transition-colors duration-300 focus:outline-none border border-slate-700/50 ${
                        darkMode ? 'bg-slate-900/80' : 'bg-slate-800/50'
                    }`} aria-label="Toggle Theme">
                    {/* Background Icons 🌙 & ☀️ */}
                    <span className="flex w-full justify-between px-2 text-base select-none">
                        <span>🌙</span>
                        <span>☀️</span>
                    </span>

                    {/* Sliding Knob (Soft Rounded Square) 🔲 */}
                    <span className={`absolute h-9 w-9 rounded-md bg-slate-700 border border-slate-600/50 transition-transform duration-300 flex items-center justify-center font-bold shadow-sm ${
                        darkMode ? 'translate-x-0' : 'translate-x-12' }`}>
                        <span className="text-sm">{darkMode ? '🌙' : '☀️'}</span>
                    </span>
                </button>
                <button className="px-5 py-2 rounded-lg font-medium text-base text-emerald-500 border border-emerald-800/50 hover:bg-emerald-500/10 hover:border-emerald-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30">
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </nav>
    );
}